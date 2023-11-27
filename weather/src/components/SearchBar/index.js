import React, {useContext } from 'react'

import Sehir from '../../contexts/SearchContext/SearchContext'
import Theme from '../../contexts/ThemeContext/ThemeContext'

import turkiye from '../Data/Cities'
import './styles.css'

function SearchBar() {
  const {city,setCity} = useContext(Sehir)

  const {theme} = useContext(Theme)

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  return (
    
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <select className={`my-3 dropdown${theme}`} id='sehirSecimi' onChange={handleChange} value={city}>
            {turkiye.map((item)=>{
              return(
                <option key={item.id} value={item.value} >{item.name}</option>
              )
            })}
             </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar