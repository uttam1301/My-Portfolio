import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BlurBlob from './BlurBlob';

function App() {
  

  return (
    <div className='bg-black'>
      <BlurBlob position={{top: '35%', left: '20%'}} size={{width: '30%', height: '40%'}} />
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
