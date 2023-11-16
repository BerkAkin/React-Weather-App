import React, { useState } from 'react'
import { useContext } from 'react'
import Sehir from '../../contexts/SearchContext/SearchContext'
import turkiye from './turkiye'
import './styles.css'

function SearchBar() {
  const {city,setCity} = useContext(Sehir)

  const handleChange = (e) => {
    setCity(e.target.value)
  }
  return (
    
    <div>
      <select className='dropdown my-3' id='sehirSecimi' onChange={handleChange} value={city}>
        {turkiye.map((item)=>{
          return(
            <option key={item.id} value={item.value} >{item.name}</option>
          )
        })}
      </select>
    </div>
  );
};

export default SearchBar