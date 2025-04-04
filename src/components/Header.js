import "./Header.css"
import {Link} from "gatsby"

import React from "react"

function Header() {
  return (
    <header >
        <div className="container inner-header ">

        {/* ist oval  */}
        <div className="ist-oval"></div>

       {/*2nd oval */}
        <div className="inner-second-oval"></div>


      {/* navbar */}
      <div className="navbar">
        <div className="logo">Medi<span>Care+</span></div>
        <nav>
        <ul>
            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Service</Link></li>
            <li><Link>News</Link></li>
        </ul>
        <button id="contact">Contact</button>
        </nav>
      </div>

     
        </div>
    </header>
  )
}

export default Header
