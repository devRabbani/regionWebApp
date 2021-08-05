import React from 'react'
import './popUpCard.style.css'

const PopUpCard = ({
  disbandClick,
  name,
  flag,
  capital,
  region,
  subregion,
  population,
  borders,
  languages,
}) => {
  return (
    <div className='popUpCard'>
      <h2>{name.toUpperCase()}</h2>
      <img className='flag' src={flag} alt={`${name}'s Flag`} />
      <p className='capital'>
        <b>Capital : </b>
        {capital}
      </p>
      <p>
        <b>Region :</b> {region} , <br /> <b> Subregion :</b> {subregion}
      </p>
      <p>
        <b>Populations : </b>
        {population}
      </p>
      <p className='borders'>BORDERS :</p>
      <ul className='bor'>
        {borders.map((border, i) => (
          <li key={i}>{border}</li>
        ))}
      </ul>
      <p className='borders'>LANGUAGES :</p>
      <ul className='lan'>
        {languages.map((border, i) => (
          <li key={i}>{border.name}</li>
        ))}
      </ul>
      {console.log(languages)}
      <div onClick={disbandClick} className='closeBtn'>
        Close
      </div>
    </div>
  )
}

export default PopUpCard
