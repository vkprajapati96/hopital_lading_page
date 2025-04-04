import React from "react"
import "./Specialist.css"
import SpecialistCard from "./SpecialistCard"
import oval2 from "../../public/images/Oval Copy 2.png"

function Specialist() {
  const SpecialistData = [
    {
      id: 1,
      name: "Dr. Awaatif Al",
      profile: "Dental Care",
    },
    {
      id: 1,
      name: "Dr. Filipa Gaspar",
      profile: "Cardiology",
    },
    {
      id: 1,
      name: "Dr. Sukhmeet Gorae",
      profile: "Neurological",
    },

    {
      id: 1,
      name: "Dr. Siri Jakobsson",
      profile: "Prediatrics",
    },

  ]

  return (
    <section className="Specialist-section">
     <div className="oval-img"><img src={oval2} alt="" /> </div> 

      <div className="container Specialist">
        <h2>We Have The Best Specialist</h2>
        <p>
          We have a wide experience in experience design and strategy, with
          locally-rooted knowledge.
        </p>
        {/* cards */}
        <div className="cards">
          {
            SpecialistData.map((item)=>(
                <SpecialistCard key={item.id}
                    name={item.name}
                    profile={item.profile}
                />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Specialist
