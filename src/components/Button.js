import React from 'react'
import "./Button.css"

function Button({text,className}) {
  return <button  className={className} >{text}</button>
 
}


export default Button;

