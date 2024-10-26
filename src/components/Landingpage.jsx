import React from 'react';
import Hero from '/src/components/Hero';
import Card from "/src/components/Card"
import Demovideo from './Demovideo';
import Feedback from './Feedback';
import Footer from './Footer';
import Trustedby from "/src/components/Trustedby"
function Landingpage() {
  return (
    <div className='h-screen '>
      <Hero />
      <div className='flex justify-center items-center h-1/4  '>
      
      <div style={{marginTop:"500px"}}  >
      <Card/>
      </div>
       
      </div>
      <div className="video " style={{marginTop:"680px"}}>
      <Demovideo/>
      </div>
      <Trustedby/>
      <div  style={{marginTop:"80px"}}>
      <Feedback/>
      </div>
    
    <Footer/>
   
    </div>
  );
}

export default Landingpage;
