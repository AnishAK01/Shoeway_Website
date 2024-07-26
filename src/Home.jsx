import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Maincontent from './Maincontent';
import Footer from './Footer';
import Carddata from './Carddata';


function Homefile() {

  
    return (
        <div >
            <nav><Navbar />
            </nav>
            
            <div>
                <Sidebar />
                <Maincontent /> 
            </div>
          
        </div>
       
    );
}

export default Homefile;