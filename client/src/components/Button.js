import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ buttontype, buttonName, buttonStyle, onClick, linkTo, to }) => {
  return (
    <>
      {
        linkTo ? 
        <Link to={linkTo} className={`flex-center rounded font-normal text-base py-2 h-2rem ${buttonStyle ? buttonStyle : ""}`} type={buttontype} onClick={onClick}>
            {buttonName}
        </Link> :
        (
            <button className={`flex-center rounded font-normal text-base py-2 h-2rem ${buttonStyle ? buttonStyle : ""}`} type={buttontype} onClick={onClick} to={to}>
                {buttonName}
            </button>
        )
      }
    </>
  )
}

export default Button
