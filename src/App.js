import React from "react";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

import './App.css';
import Hero from './Hero';
function App(){
  return(
    <div>
        <Nav/>
        <Hero/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
