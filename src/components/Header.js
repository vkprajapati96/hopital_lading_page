import React from 'react'
import "./Header.css"
import {Link} from "gatsby"
import Button from "./Button"


function Header() {
    return (
        <header >
            <div className="container inner-header ">
    
            {/* ist oval  */}
            <div className="ist-oval"></div>
    
           {/*2nd oval */}
            <div className="second-oval"></div>
    
          {/* navbar */}
          <div className="navbar">
            <div className="logo">Medi<span>Care+</span></div>
            <nav>
            <ul>
                <li><Link to="" id="home" >Home   </Link></li>
                <li><Link to="">About  </Link></li>
                <li><Link to="">Service</Link></li>
                <li><Link to="">News   </Link></li>
            </ul>
            <Button text="Contact"/>
            </nav>
          </div>
    
         
            </div>
        </header>
      )
}

export default Header
