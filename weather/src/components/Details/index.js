import React from 'react'
import { useContext } from 'react'
import Theme from '../../contexts/ThemeContext/ThemeContext'

import './style.css'

function Details() {
  const {theme} = useContext(Theme)
    return (
        <>
          <div className=' container-fluid h-100 mt-3'>

            <div className='row h-50'>
              <div className='col-6 '>
                <div className={`rounded container  h-100 Card${theme}`}>
                  <div className='text-center mt-1 '>
                    <span className='fw-bold'>Sıcaklıklar</span>
                  </div>
                  <div className='row mt-2 '>
                    <div className='col-4 '><img width={35} src={`/hightemp${theme}.png`}></img></div>
                    <div className='col-8  pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Max: 16°C</span></div>
                  </div>
                  <div className='row mt-3 '>
                    <div className='col-4 '><img width={35} src={`/lowtemp${theme}.png`}></img></div>
                    <div className='col-8  pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Min: 12 °C</span></div>
                  </div>
                </div>
              </div>

              <div className='col-6'>
                <div className={`rounded container h-100 Card${theme}`}>
                  <div className='text-center mt-1'>
                    <span className='fw-bold'>Nem ve Basınç</span>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-4'><img width={35} src={`/humidity${theme}.png`}></img></div>
                    <div className='col-8 pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Nem: %80</span></div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-4'><img width={35} src={`/pressure${theme}.png`}></img></div>
                    <div className='col-8 pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Basınç: 1.02</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row h-50'>
              <div className='col-6'>
                <div className={`rounded container mt-3  h-100 Card${theme}`}>
                  <div className='text-center mt-1'>
                    <span className='fw-bold'>Rüzgar</span>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-4'><img width={35} src={`/wind${theme}.png`}></img></div>
                    <div className='col-8 pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Hız: 20km/h</span></div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-4'><img width={35} src={`/arrow${theme}.png`}></img></div>
                    <div className='col-8 pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Yön: Batı</span></div>
                  </div>
                </div>
              </div>

              <div className='col-6'>
                <div className={`rounded container mt-3  h-100 Card${theme}`}>
                  <div className='text-center mt-1'>
                    <span className='fw-bold'>Güneş Durumu</span>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-4'><img width={35} src={`/sunset${theme}.png`}></img></div>
                    <div className='col-8 pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Batış: 20:32</span></div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-4'><img width={35} src={`/sunrise${theme}.png`}></img></div>
                    <div className='col-8 pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Doğuş: 8:11</span></div>
                  </div>
                </div>
              </div>
              
            </div>


          </div>



        </>
      )
}

export default Details