import React from 'react'
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from './About';
import Services from "./Services";
import Contact from "./Contact";


const Home = () => {
  return (
    <div>
      <Hero />
      <Services/>
      <Gallery />
      <About/>
      <Contact/>
    </div>
  )
}

export default Home;