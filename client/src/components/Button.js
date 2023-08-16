import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ buttonName, buttonStyle, onClick, linkTo }) => {
  return (
    <>
      {
        linkTo ? 
        <Link to={linkTo} className={`flex-center rounded font-normal text-base py-2 h-2rem ${buttonStyle ? buttonStyle : ""}`}  onClick={onClick}>
            {buttonName}
        </Link> :
        (
            <button className={`flex-center rounded font-normal text-base py-2 h-2rem ${buttonStyle ? buttonStyle : ""}`} onClick={onClick}>
                {buttonName}
            </button>
        )
      }
    </>
  )
}

export default Button
