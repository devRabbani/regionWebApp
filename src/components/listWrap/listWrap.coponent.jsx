import React, { useState, useEffect } from 'react'
import './listWrap.style.css'
import data from '../../data.json'
import Card from '../card/card.component'

const Listwrap = () => {
  const [countries, setCountries] = useState([])
  const [sinCountry, setSinCountry] = useState('')

  const [isClick, setClick] = useState(false)

  const expandClick = (e) => {
    setClick(true)
    const newCount = countries.filter((country) => country.numericCode === e)
    setSinCountry(newCount[0])
  }

  useEffect(() => {
    setCountries(data)
  }, [])

  return (
    <div className='listWrap'>
      {!isClick ? (
        countries.map((country) => (
          <Card
            key={country.numericCode}
            {...country}
            expandClick={expandClick}
          />
        ))
      ) : (
        <Card {...sinCountry} />
      )}
    </div>
  )
}

export default Listwrap
