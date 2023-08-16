import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ buttonName, buttonStyle, onClick, linkTo }) => {
  return (
    <>
      {
        linkTo? <Link to={linkTo} className={`${buttonStyle ? "flex-center rounded font-semibold py-2 h-2rem" + buttonStyle : "flex-center rounded font-semibold py-2 h-2rem"}`}  onClick={onClick}>
            {buttonName}
        </Link> :
        (
            <button className={`${buttonStyle ? "flex-center rounded font-semibold py-2 h-2rem" + buttonStyle  : "flex-center rounded font-semibold py-2 h-2rem"}`} onClick={onClick}>
                {buttonName}
            </button>
        )
      }
    </>
  )
}

export default Button
