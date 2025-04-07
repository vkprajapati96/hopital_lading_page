import React from "react"
import "./Navbar.css"
import { Link } from "gatsby"
import Button from "./Button"
import { AiOutlineMenu } from "react-icons/ai";


function Navbar() {
  return (
    <div className="navbar-section">
      <div className="container inner-navbar ">
        {/* ist oval  */}
        <div className="ist-oval"></div>

        {/*2nd oval */}
        <div className="second-oval"></div>

        {/* navbar */}
        <div className="navbar">
          <div className="logo">
            Medi<span>Care+</span>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="" id="home">
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to="">About </Link>
              </li>
              <li>
                <Link to="">Service</Link>
              </li>
              <li>
                <Link to="">News </Link>
              </li>
            </ul>
            <Button text="Contact" className="contact" />
            <AiOutlineMenu id="menu" />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
