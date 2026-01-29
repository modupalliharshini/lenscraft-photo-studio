
import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
       <Link to="/">LensCraft</Link> 
        </h2>

      <ul className="nav-links">

        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>


      </ul>
    </nav>
  );
}

export default Navbar;
