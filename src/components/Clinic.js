import React from 'react'
import "./Clinic.css"
import woman from "../../public/images/doctor-woman.png"
import man from "../../public/images/doctor-man.png"
import ambulance from "../../public/images/ambulance.png"

function Clinic() {
  return (
    <section className='clinic-section' >
        <div className='container clinic'>
            {/* content */}
        <div className='content'>
            <h2>Clinic With Innovative</h2>
            <p>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
            <button>Learn More</button>
        </div>
        {/* middle cards */} 
        <div className='middle-cards'>
            <div className='card'>
            <img src={woman} alt="" />
            <p>Qualified Doctors</p>
            </div>
            <div className='card abmlance-card'>
            <img src={ambulance} alt="" />
            <p>Qualified Doctors</p>
            </div>
        </div>

        {/* last card */}
        <div className='last-card'>
            <img src={man} alt="" />
            <p>Qualified Doctors</p>
            </div>
        </div>
      
    </section>
  )
}

export default Clinic
