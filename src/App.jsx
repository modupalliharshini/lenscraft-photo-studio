import "./styles/App.css";
import About from "./components/About";
import {Routes, Route} from "react-router-dom";
import Home from "./components/home";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";



export default function App(){
  return(
<div>
<Navbar/>
  <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/gallery" element={<Gallery/>}></Route>
<Route path="/services" element={<Services/>}></Route>
<Route path="/contact" element={<Contact />} />

  </Routes>

  
      <Footer />
</div>
  );
}


