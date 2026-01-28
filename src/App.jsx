import "./styles/App.css";


import About from "./components/About";

import {Routes, Route} from "react-router-dom";
import Home from "./components/home";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(){
  return(
<div>
<Navbar/>
  <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/gallery" element={<Gallery/>}></Route>
  </Routes>

  <Contact/>
      <Footer />
</div>
  );
}


