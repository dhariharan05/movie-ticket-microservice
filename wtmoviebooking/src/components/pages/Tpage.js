import React from 'react';
import Footer from '../Footer';
import Moviemain from '../Moviemain';
import Loginmain from '../Loginmain'
import Theatrepage from '../Theatrepage'
import Logincontroller from '../Logincontroller';
import { useLocation } from "react-router-dom";
import { ReactSession } from 'react-client-session';
import Navbar from '../Navbar';
import { Apicalls } from '../Apicalls'
import { useState } from "react";
function Tpage() {
//   // Access the passed props here and use them as needed
// };

  return (
    <div> 
      <Navbar/>
   <Theatrepage />
   <Footer/>
    </div>
  )
}

export default Tpage
