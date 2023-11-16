import React from 'react'
import { useContext } from 'react'
import Sehir from '../../contexts/SearchContext/SearchContext'


function Temperature() {
  const {city,setCity} = useContext(Sehir)
  return (
    <div>{city}</div>
  )
}

export default Temperature