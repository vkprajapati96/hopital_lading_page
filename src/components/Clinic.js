import React from "react"
import "./Clinic.css"
import Button from "./Button"

function Clinic() {
  return (
    <section className="clinic-section">
      <div className="container clinic">
        {/* content */}
        <div className="content">
          <h2>Clinic With Innovative</h2>
          <p>
            We provide the most full medical services, so every person could
            heave the oppurtunity to receive qualitative medical help.
          </p>
          <Button text="Learn More" className="LeanMore-btn" />
        </div>
        {/* middle cards */}
        <div className="middle-cards">
          <div className="card">
            <img src="/images/doctor-woman.png" alt="Doctor Woman" />
            <p>Qualified Doctors</p>
          </div>
          <div className="card abmlance-card">
            <img src="/images/ambulance.png" alt="Doctor Man" />
            <p>24 Hours Service</p>
          </div>
        </div>

        {/* last card */}
        <div className="last-card">
          <img src="/images/doctor-man.png" alt="Doctor Man" />
          <p>Emergency Care</p>
        </div>
      </div>
    </section>
  )
}

export default Clinic
