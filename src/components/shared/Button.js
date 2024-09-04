import React from 'react'

const Button = ({ text, bgColor, icon}) => {
  return (
    <>
        <button className={`flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-white text-lg font-bold ${bgColor}`}>
            { 
                icon && 
                <img src={icon} width={15} alt="" />
            }
            { text }
        </button>
    </>
  )
}

export default Button