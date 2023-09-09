import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ buttonType, buttonName, buttonStyle, onClick, linkTo, to }) => {
  return (
    <>
      {
        linkTo ? 
        <Link to={linkTo} className={`flex-center rounded font-normal text-base py-2 h-2rem ${buttonStyle ? buttonStyle : ""}`} buttonType={buttonType} onClick={onClick}>
            {buttonName}
        </Link> :
        (
            <button className={`flex-center rounded font-normal text-base py-2 h-2rem ${buttonStyle ? buttonStyle : ""}`} buttonType={buttonType} onClick={onClick} to={to}>
                {buttonName}
            </button>
        )
      }
    </>
  )
}

export default Button
