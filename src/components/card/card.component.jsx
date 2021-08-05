import React from 'react'
import './card.style.css'

const Card = ({ name, capital, region, flag, numericCode, expandClick }) => {
  return (
    <div onClick={() => expandClick(numericCode)} className='card'>
      <h3>{name.toUpperCase()}</h3>
      <img className='flag' src={flag} alt={`${name}'s Flag`} />
      <p className='cardCapital'>
        <span>Capital : </span>
        {capital}
      </p>
      <p>
        <b> Region :</b> {region}
      </p>
    </div>
  )
}

export default Card
