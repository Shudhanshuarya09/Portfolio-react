import React from "react";
import "./navbar.css";
import {Link} from 'react-scroll';


const Navbar = () => {
  return (
    <nav className="navbar">
     <img src="/Images/logooo.png" alt="" className="logo" />
      <div className="desktopMenu">
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>


        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">Projects</Link>


        <Link activeClass='active' to="about" spy={true} smooth={true} offset={-70} duration={500}  className="desktopMenuListItem">About</Link>


        <Link activeClass='active' to="experience" spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">Experience</Link>
      </div>
      <button className="desktopMenuBtn" onClick={()=> {
        document.getElementById('contact').scrollIntoView({behaviour: 'smooth'});
      }}>
        <img src="/assets/Contact.png" alt="" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
