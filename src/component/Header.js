import React from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <nav className="header"  >
      <div className="logo">
       <img src="https://logodix.com/logo/1788552.png" height="60px" width="60px" style={{borderRadius:"50%"}}/>

      </div>
      <input type="checkbox" id="check" checked="false"/>
      <label for="check" id="checkb" ><FiAlignJustify style={{color:"white"}}/></label>
      <ul>
        <li><NavLink to="/"  style={{textDecoration:"none", color:"white"}}>Home</NavLink></li>
        <li><NavLink to="/Template" style={{textDecoration:"none", color:"white"}}>Template</NavLink></li>
        <li><NavLink to="/About" style={{textDecoration:"none", color:"white"}}>About us</NavLink></li>
        <li style={{textDecoration:"none", color:"white", display:"none"}}><NavLink to="/Form" style={{textDecoration:"none", color:"white", display:"none"}}>Form</NavLink></li>
        <li><NavLink to="Contribute" style={{textDecoration:"none", color:"white"}}>Contribute</NavLink></li>
        <li><NavLink to="Contact" style={{textDecoration:"none", color:"white"}}>Contact us</NavLink></li>
      </ul>

    </nav>
    </>

  )
}

export default Header;