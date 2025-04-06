import React from "react"
import "./HeroSection.css"
import Button from './Button'

function HeroSection() {
  return (
    <section className="hero-section"  >
      <div className="container hero">

        {/* hero section content */}
        <div className="hero-content">
          <p className="greet">Welcome to MediCare+ Clinic</p>
          <h2 className="title">Best Specialists</h2>
          <p className="description">
            We are on the leading edge of cancer care. Providing the full
            continuum of cancer treatments and supportive care services in a
            single convenient location.
          </p>
          <div className="btns">
            <Button className="btn1" text="Make an Appointment"/>
            <div className="btn2"><button>Departments</button></div>
          </div>
        </div>

{/* hero section right div */}
        <div className="box"></div>
      </div>
    </section>
  )
}

export default HeroSection
