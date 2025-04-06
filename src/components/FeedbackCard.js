import React from 'react'

function FeedbackCard({review}) {
  return (
    <div className="feedback-card">
    <div className="quote"><img src="/images/quote.png" alt="quote" /></div>
    
    <div className="customer-feedback" > 
      {review.Reviews}
    </div>
    
    {/* card image and name section*/}
    <div className="badge">
    <img src="/images/patient1.png" alt="" />
      <div className="content">
        <h4>{review.Name}</h4>
        <p>{review.Company}</p>
     </div>
    </div>
  </div>
  )
}

export default FeedbackCard
