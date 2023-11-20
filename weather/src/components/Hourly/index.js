import React, {useState,useContext} from 'react'
import Theme from '../../contexts/ThemeContext/ThemeContext'
import Sehir from '../../contexts/SearchContext/SearchContext'

import './style.css'

function Hourly() {

  const {theme} = useContext(Theme)
  const {data} = useContext(Sehir)

  return (
    <>
    {data ? data['list'].slice(0,8).map((item)=>{
      return (
        <>
          <div className={`rounded-end container hourlyCard${theme}`}>
            <div className='row'>
              <div className='col-12' style={{height:'10.5vh'}}>
                <div className='h-100 row'>
                  <div className={`col-4 ps-1 hourlyCardSub${theme} rounded-end`}>
                    <div className='row text-center'>
                      <span>
                        <img width={55}  src={data ? `http://openweathermap.org/img/wn/`+item['weather'][0]['icon']+`@4x.png`: " "}></img>
                      </span>
                    </div>
                    <div className='row'>
                      <span className='text-center fw-bold'>{item['main']['temp'].toFixed()}°C</span>
                    </div>
                    
                  </div>
                  <div className='col-8 '>
                    <div className='row h-50 text-center align-items-center'>
                        <div className='col-12 mt-2'>
                          <small className='display-6 fw-bold'>{item['dt_txt'].slice(10,16)}</small>
                        </div>
                    </div>
                    <div className='row pt-2 h-50'>
                      <div className='col-12 pt-0 text-center'>
                        <span className='fw-bold'>{item['weather'][0]['description']}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </>
      )
    }):""} 

    </>
  )
}

export default Hourly