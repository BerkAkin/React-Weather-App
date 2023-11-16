import React, { useState } from 'react'
import { useContext } from 'react'
import Sehir from '../../contexts/SearchContext/SearchContext'
import turkiye from './turkiye'
import styles from './style.module.css'


function SearchBar() {
  const {city,setCity} = useContext(Sehir)

  const handleChange = (e) => {
    setCity(e.target.value)
  }
  return (
    
    <div>
      <label htmlFor='sehirSecimi'>Şehir: </label>
      <select className='m-auto' id='sehirSecimi' onChange={handleChange} value={city}>
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