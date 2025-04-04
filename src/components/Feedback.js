import React from "react"
import "./Feedback.css"

function Feedback() {
  return (
    <div className="feedback-section">
      <div className="container feedback">
        <h2>What Our Customers Say</h2>

        {/* review cards */}
        <div className="feedback-cards">
          
          {/* single card */}

          <div className="feedback-card">
            <div className="quote"><img src="/images/quote.png" alt="quote" /></div>
            
            <div className="customer-feedback" > 
              I wanted to thanks everyone at this facility for the quality of
              care and compassion they showed during my stay.
            </div>
            
            {/* card image and name section*/}
            <div className="badge">
            <img src="/images/patient1.png" alt="" />
              <div className="content">
                <h4>Jacqueline Asong</h4>
                <p>Patient</p>
             </div>
            </div>
          </div>
          <div className="feedback-card">
            <div className="quote"><img src="/images/quote.png" alt="quote" /></div>
            
            <div className="customer-feedback" > 
              I wanted to thanks everyone at this facility for the quality of
              care and compassion they showed during my stay.
            </div>
            
            {/* card image and name section*/}
            <div className="badge">
            <img src="/images/patient2.png" alt="" />
              <div className="content">
                <h4>Jacqueline Asong</h4>
                <p>Patient</p>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
