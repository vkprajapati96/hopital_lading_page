import React from "react"
import "./Service.css"
import servicesData from "./servicesData "
import ServiceCard from "./ServiceCard"

function Service() {

  return (
    <section className="service-section">
      <div className="container service">
        <h2 className="title">Our Services</h2>
        <p className="content">
          We provide the most full medical services, so every person could heave
          the oppurtunity to receive qualitative medical help.
        </p>

        {/* services cards */}

        <div className="cards">
          {
            servicesData.map((service)=>(
              <ServiceCard key={service.id} 
              title={service.title} 
              Icon={service.Icon} 
               
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Service


