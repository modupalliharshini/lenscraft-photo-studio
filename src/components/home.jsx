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

      <section className="trust-strip">
        <p>Weddings • Portraits • Events • Commercial Photography</p>
      </section>

      <Services/>
      <Gallery />
      <About/>
      <Contact/>
    </div>
  )
}

export default Home;