import React from 'react'
import { useContext } from 'react'
import Sehir from '../../contexts/SearchContext/SearchContext'
import Theme from '../../contexts/ThemeContext/ThemeContext'
import Details from '../Details'
import './style.css'

import 'bootstrap/dist/css/bootstrap.min.css';


function Temperature() {
  const {data} = useContext(Sehir)
  const {theme} = useContext(Theme)

  return (
    <>
      <div className={`rounded-start topContext${theme}`} style={{height:'85.7vh'}}>
      <div style={{height:'41vh'}}>
        <div className='row text-center'><span><img height="200" src={data ? `http://openweathermap.org/img/wn/${data['list'][0]['weather'][0]['icon']}@4x.png`: " "}></img></span></div>
          <div className='row mt-2 text-center' style={{fontSize:'1.6em'}}><p>{data ? data['list'][0]['weather'][0]['description']:' '}</p></div>
          <div className='row justify-content-center'><p className='border border-dark rounded-pill w-25 text-center' style={{fontSize:'1.6em'}}>{data ? data['list'][0]['main']['temp'].toFixed(0):''} °C</p></div>
          <div className='row'><p className=' text-center'>Hissedilen Sıcaklık : {data ? data['list'][0]['main']['feels_like'].toFixed(0):''} °C</p></div>
        </div>
        <hr/>
         <div style={{height:'37vh'}}>
          <Details/>
         </div>
      </div>
    </>
  )
}

export default Temperature