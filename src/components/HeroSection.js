import React from "react"
import "./HeroSection.css"

function HeroSection() {
  return (
    <section className="hero-section"  >
      <div className="container hero">
        {/* hero content */}
        <div className="hero-content">
          <p className="greet">Welcome to MediCare+ Clinic</p>
          <h2 className="title">Best Specialists</h2>
          <p className="description">
            We are on the leading edge of cancer care. Providing the full
            continuum of cancer treatments and supportive care services in a
            single convenient location.
          </p>
          <div className="btns">
            <button className="btn1">Make an Appointment</button>
            <button className="btn2">Departments</button>
          </div>
        </div>

        <div className="box"></div>
      </div>
    </section>
  )
}

export default HeroSection
