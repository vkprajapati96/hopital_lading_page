import React from "react"
import "./Newsletter.css"
import Button from "./Button"

function Newsletter() {
  return (
    <div className=" newsletter-section">
      {/* oval img */}
      <img className="ovalpic" src="/images/oval3.png" alt="" />
    {/* <div className="ovalpic" ></div> */}
      <div className="container newsletter">

        {/* NewsLetttr Content */}
        <div className="news-Content">
          <h4>Subscribe to Newsletter</h4>
          <p>We have a wide experience in experience design and strategy,</p>
        </div>
        <div className="input-section">
          <input type="text" placeholder="Enter your email address" />
          <Button text="Send Now" className="send" />
        </div>
      </div>
    </div>
  )
}

export default Newsletter
