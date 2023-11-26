import React from 'react'
import { useContext } from 'react'
import Sehir from '../../contexts/SearchContext/SearchContext'
import Theme from '../../contexts/ThemeContext/ThemeContext'
import Details from '../Details'
import './style.css'



function Temperature() {
  const {data} = useContext(Sehir)
  const {theme} = useContext(Theme)

  return (
    <>
      <div className={`rounded-start topContext${theme}`} style={{height:'86vh'}}>
        <div style={{height:'41vh'}} className='d-flex p-2'>
          <div className={`container-fluid rounded innerTab${theme}`}>
            <div className='row h-50 text-center'>
              <span>
                <img height="200" src={data ? `http://openweathermap.org/img/wn/${data['list'][0]['weather'][0]['icon']}@4x.png`: " "}></img>
              </span>
            </div>          
            <div className='row mt-2 text-center' style={{fontSize:'1.6em', textTransform:'capitalize'}}>
              <p>{data ? data['list'][0]['weather'][0]['description']:' '}</p>
            </div>
            <div className='row  justify-content-center'>
              <p className='border rounded-pill w-50 text-center' style={{fontSize:'1.6em'}}>{data ? data['list'][0]['main']['temp'].toFixed(0):''} °C</p>
            </div>
            <div className='row '>
              <p className=' text-center'>Hissedilen Sıcaklık : {data ? data['list'][0]['main']['feels_like'].toFixed(0):''} °C</p>
            </div>
          </div>



          </div>
         <div className='mt-4' style={{height:'37vh'}}>
          <Details/>
         </div>
      </div>
    </>
  )
}

export default Temperature