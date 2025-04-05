import React from 'react'
import "./Footer.css"
import { Link } from 'gatsby'


function Footer() {
  return (
    <div>
        {/* navbar */}
        <div className=' footer-navbar-section'>
             <div className="container footer-navbar">
                    <div className="logo">Medi<span>Care+</span></div>
                    <nav>
                    <ul>
                        <li><Link to="" id='home'>Home</Link></li>
                        <li><Link to="">About</Link></li>
                        <li><Link to="">Service</Link></li>
                        <li><Link to="">News</Link></li>
                    </ul>
                    </nav>
                  </div>
        </div>
        {/* Footer icons sections */}
        <div className='footer-section'>
            <div className='container footer' >
                <div className='images'>
                <img src="/images/fb.png" alt="Facebook" />
                <img src="/images/google.png" alt="Google" />
                <img src="/images/twitter.png" alt="Twitter" />
                </div>
                <p>©2023 - 011BQ</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
