import React from "react";
import './App.css'

import pfp from './sohan pf.jpg';



function Hero() {
  return (
    <div id="hero">
      <div className="content">
        <div className="text">
          <h1 id="ti">About Me</h1>
          <p id="abt">
            I'm Sohan, a BTech IT student passionate about coding,
            problem-solving, and technology. I enjoy building projects,
            learning new concepts, and improving my skills in Python, DSA,
            and software development. My goal is to become a strong software
            engineer who creates useful and impactful solutions while
            continuously learning and growing in the tech world.
          </p>
        </div>

        <img src={pfp} alt="Sohan" />
      </div>
    </div>
  );
}

export default Hero;