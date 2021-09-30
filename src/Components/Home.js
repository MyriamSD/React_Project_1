import './Home.css'
import React from "react";
import Header from "./Header";
import CountUp from "./CountUp";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import Catwalk from "./Video/Catwalk.mp4";

function Home() {
  return (
    <div>
    <video className="vid" autoPlay loop muted
    style={{
          display: 'flex',
          objectFit: 'fill',
          position: "fixed",
          width: "100%",
          height: '100%',
          zIndex: '-1',
          left: 0,
          top: 0
          
    }}      
    >
        <source src={Catwalk} type="video/mp4" />
      </video>
    
        <Navbar/>
        <Header/>
        <CountUp/>
        <ContactForm></ContactForm>
        
      
    </div>
  );
}

export default Home;
