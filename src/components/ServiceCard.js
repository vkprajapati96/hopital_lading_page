import React from 'react'
import { MdKeyboardArrowRight, } from "react-icons/md"

function ServiceCard({title,Icon}){
  return (
    <div className="card">
    <div>
    {/* <LiaToothSolid className="icons" /> */}
    <Icon className="icons"/>
    </div>
    <p>{title}</p>

    {/* learn More */}

    <div className="Learn-more">  
      <p>LEARN MORE</p>
      <div className="arrow-icon">
        <MdKeyboardArrowRight />
      </div>
    </div>
  </div>
     )
}

export default ServiceCard
