import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "gatsby"
import Button from "./Button"
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";



function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
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
           <div className="menu-icon" onClick={toggleSidebar}>
            {sidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}

           </div>
          </nav>
        </div>
              {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="" onClick={toggleSidebar}>About</Link></li>
          <li><Link to="" onClick={toggleSidebar}>Service</Link></li>
          <li><Link to="" onClick={toggleSidebar}>News</Link></li>
          <li><Button text="Contact" className="contact" /></li>
        </ul>
      </div>

      </div>
    </div>
  )
}

export default Navbar
