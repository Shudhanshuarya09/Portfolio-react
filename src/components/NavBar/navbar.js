import React from 'react'
import  "./navbar.css";
import logo from "../../assets/"

const Navbar = () => {
  return (
   <nav className='navbar'>
    <img src="logo" alt=''/>
    <div className='desktopMenu'>

    </div>
    <button className='desktopMenuBtn'>
<img src='' alt='' className='desktopMenuImg'/>Contact Me
    </button>
   </nav>


  )
}

export default Navbar;