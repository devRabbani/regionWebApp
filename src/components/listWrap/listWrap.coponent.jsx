import React, { useState, useEffect } from 'react'
import './listWrap.style.css'
import Card from '../card/card.component'
import PopUpCard from '../popUpCard/popUpCard.component'

const Listwrap = () => {
  const [countries, setCountries] = useState([])
  const [sinCountry, setSinCountry] = useState('')
  const [isClick, setClick] = useState(false)
  const [isLoading, setLoading] = useState(true)

  const expandClick = (e) => {
    setClick(true)
    const newCount = countries.filter((country) => country.numericCode === e)
    setSinCountry(newCount[0])
  }
  const disbandClick = () => setClick(false)

  const handleClick = async () => {
    setLoading(true)
    const res = await fetch('https://restcountries.eu/rest/v2/region/asia')
    const json = await res.json()
    setCountries(json)
    setLoading(false)
  }

  useEffect(() => {
    handleClick()
  }, [])

  return isLoading ? (
    <h1 className='loading'>Loading...</h1>
  ) : (
    <>
      {!isClick && (
        <div onClick={handleClick} className='btnReload'>
          Refresh Countries
        </div>
      )}
      <div className='listWrap'>
        {!isClick ? (
          countries.map((country) => (
            <Card
              key={country.numericCode}
              isClick
              {...country}
              expandClick={expandClick}
            />
          ))
        ) : (
          <PopUpCard disbandClick={disbandClick} {...sinCountry} />
        )}
      </div>
    </>
  )
}

export default Listwrap
