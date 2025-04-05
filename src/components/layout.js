import React from "react"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import Service from "./Service"
import Clinic from "./Clinic"
import Specialist from "./Specialist"
import Feedback from "./Feedback"
import Newsletter from "./Newsletter"
import Footer from "./Footer"

function layout({ children }) {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Service />
      <Clinic />
      <Specialist />
      <Feedback />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default layout
