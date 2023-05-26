
// Material UI imports
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";
import { useEffect } from "react";
import { Apicalls } from './Apicalls'
import Switch from "@mui/material/Switch";
import { useState } from "react";
import Loginmain from "./Loginmain";
import Signup from "./Signup";
import { WidthFull } from "@mui/icons-material";
import { ReactSession } from 'react-client-session';
import { useNavigate } from "react-router-dom";

function Theatremain() {
//   const ot = ReactSession.get("original_title")
//   const pop = ReactSession.get("popularity");
//   const lan = ReactSession.get("original_language");
  const[movies,setMovies]=useState(false);
  const [theaterName, setTheaterName] = useState("");
  var [movName, setMovName] = useState("");
  const navigate = useNavigate();


var movsta;
  useEffect(() => {
    const mdetail = {
        movieName: ReactSession.get("original_title"),
        cbfcrating: ReactSession.get("popularity"),
        moviegenre: ReactSession.get("original_language")
      };
      const mdetail1 = {
        movieName: ReactSession.get("original_title"),
        
      };
   movsta = ReactSession.get("original_title")
//   Apicalls.Movies(mdetail).then(response=> {
//     setMovies(true)
//   }).catch(error => {
//     const error1=error;
//   });
Apicalls.CheckMovie(mdetail1)
      .then(response => {
        console.log(response);
        const movieExists = response.data.movieName;
      
        setMovName(mdetail.movieName);
        console.log(movieExists); // Assuming the response has a boolean field indicating if the movie exists
        if (!movieExists) {
          // Movie details are not present in the database, add them
          Apicalls.Movies(mdetail)
            .then(() => {
              setMovies(true);
            })
            .catch(error => {
              console.error(error);
            });
        } else {
          // Movie details are already present in the database
          setMovies(true);
        }
      })
      .catch(error => {
        console.error(error);
      });
}, [ReactSession.get("original_title"), ReactSession.get("popularity"), ReactSession.get("original_language")]);

//   Apicalls.Theatres(tdetail).then(response=> {
//     setTheatres(true)
//   }).catch(error => {
//     const error2=error;
//   });
// console.log(pop);
// console.log(lan);
// useEffect(() => {
//     if (ot && pop && lan) {
//       const postData = {
//         movie_name: ot,
//         cbfcrating: pop,
//         moviegenre: lan,
//       };
  
//       fetch("http://localhost:8083/api/Movies", {
//         mode: "no-cors",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(postData),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data); // Log the response from the server
//           // Handle any further actions after successful posting
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           // Handle any error cases
//         });
//     }
//   }, [ot, pop, lan]);
const handleInputChange = (event) => {
    setTheaterName(event.target.value);
  };
const handleSubmit = (event) => {
   ReactSession.set("moviename",movName);
    event.preventDefault();
    // Perform any desired action with the theaterName value
    console.log("Submitted theater name:", theaterName);
    // Reset the input value
    setTheaterName(theaterName);
    getTheatre();

  };
  const getTheatre= () => {
    fetch('http://localhost:8082/api/theatres/t/'+ theaterName).then(
      response => response.json()
    ).then(data => {
      console.log(data)
      var tid = data.id;
      ReactSession.set("tid",tid);
      ReactSession.set("theatrename",theaterName);
      // console.log(verifyEmail);
      // console.log(emailInput);
      // console.log(username);
    navigate("/tpage")
    }, (e) =>{
      console.log(e);
    })

  } 
  return (
    
    
    <div style={styles.container}>
       
    <form onSubmit={handleSubmit} style={styles.form}>
      <label value={movsta}>{movName}</label>
      <input
        type="text"
        value={theaterName}
        onChange={handleInputChange}
        placeholder="Enter theater name"
        style={styles.input}
      />
      <button type="submit" style={styles.button} >
        Submit
      </button>
    </form>
  </div>);
}
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f2f2f2",
      padding: "20px",
      borderRadius: "10px",
    },
    input: {
      width: "300px",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
  
  

export default Theatremain;