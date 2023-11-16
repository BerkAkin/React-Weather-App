import React from 'react'
import { useContext } from 'react'
import Theme from '../../../contexts/ThemeContext/ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function Humid() {
  const {theme} = useContext(Theme)

  return (
    <>
      <div className={`rounded container   h-100 CardHumid${theme}`}>
        <div className='row mt-4'>
          <div className='col-4'><img width={35} src='/humidity.png'></img></div>
          <div className='col-8 pt-1'><span style={{fontSize:'0.92em', fontWeight:'500'}}>Nem: %90</span></div>
        </div>
        <div className='row mt-3'>
          <div className='col-4'><img width={35} src='/pressure.png'></img></div>
          <div className='col-8  pt-1'><span style={{fontSize:'0.92em', fontWeight:'500'}}>Basınç: 1.02</span></div>
        </div>
        
       
      </div>
    </>
  )
}

export default Humid