import React from 'react'

import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from './About';


const Home = () => {
  return (
    <div>
      <Hero />
      <Gallery />
      <About/>
    </div>
  )
}

export default Home;