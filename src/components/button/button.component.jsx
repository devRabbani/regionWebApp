import React from 'react'

const Button = ({ children }) => {
  return (
    <>
      <input type='button' value={children} />
    </>
  )
}

export default Button
