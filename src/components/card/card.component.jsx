import React from 'react'
import './card.style.css'

const Card = ({
  name,
  capital,
  region,
  subregion,
  population,
  borders,
  languages,
  flag,
  numericCode,
  expandClick,
}) => {
  return (
    <div onClick={() => expandClick(numericCode)} className='card'>
      <h3>{name}</h3>
      <img className='flag' src={flag} alt={`${name}'s Flag`} />
      <h4>{capital}</h4>
      <p>
        Region :{region} Sub Region: {subregion}
      </p>
      <p>{population}</p>
    </div>
  )
}

export default Card
