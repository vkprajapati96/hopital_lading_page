import React from 'react'

function SpecialistCard({name,profile}) {
  return (
    <div className="card1">
    <div className="top-section"></div>
    <div className="description">
      <h3>{name}</h3>
      <span>{profile}</span>
    </div>
  </div>

  )
}

export default SpecialistCard
