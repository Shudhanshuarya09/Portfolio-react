import React from "react";
import "./navbar.css";
import {Link} from 'react-scroll';


const Navbar = () => {
  return (
    <nav className="navbar">
     <img src="/Images/A2.logo.avif" alt="" className="logo"/>
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Clients</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src="/assets/Contact.png" alt="" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
