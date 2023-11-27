import React from 'react'
import { useContext } from 'react'
import Theme from '../../contexts/ThemeContext/ThemeContext'
import Sehir from '../../contexts/SearchContext/SearchContext'

import './style.css'

function Details() {
  const {theme} = useContext(Theme)
  const {data} = useContext(Sehir)

 // const {list} = data;
 // const {0:alp} = list
 // console.log(alp)
  
  
  return (
        <>
          <div className='container-fluid h-100'>

            <div className='row h-50'>



              <div className='col-6'>
                <div className={`rounded container h-100 Card${theme}`}>
                  <div className='text-center mt-1'>
                    <span className='fw-bold'>Sıcaklıklar</span>
                    <hr style={{marginTop:'8px', marginBottom:0}}/>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-4 ps-4 d-sm-flex justify-content-sm-end justify-content-lg-center'><img width={35} src={`./hightemp${theme}.png`}></img></div>
                    <div className='col-8 ps-3 pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Max: {data ? data['list'][0]['main']['temp_max'].toFixed(0):' '}°C</span></div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-4 ps-4 d-sm-flex justify-content-sm-end justify-content-lg-center'><img width={35} src={`./lowtemp${theme}.png`}></img></div>
                    <div className='col-8 ps-3 pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Min: {data ? data['list'][0]['main']['temp_min'].toFixed(0):' '} °C</span></div>
                  </div>
                </div>
              </div>


              <div className='col-6 '>
                <div className={`rounded container h-100 Card${theme}`}>
                  <div className='text-center mt-1'>
                    <span className='fw-bold'>Nem ve Basınç</span>
                    <hr style={{marginTop:'8px', marginBottom:0}}/>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-4 ps-4 d-sm-flex justify-content-sm-end justify-content-lg-center'><img  width={35} src={`./humidity${theme}.png`}></img></div>
                    <div className='col-8 ps-3 pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Nem: %{data ? data['list'][0]['main']['humidity'].toFixed(0):' '}</span></div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-4 ps-4 d-sm-flex justify-content-sm-end justify-content-lg-center'><img width={35} src={`./pressure${theme}.png`}></img></div>
                    <div className='col-8 ps-3 pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Basınç: {data ? data['list'][0]['main']['pressure'].toFixed(0):' '}</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row h-50 mt-3'>
              
              <div className='col-6 '>
                <div className={`rounded container mt-2 h-100 Card${theme}`}>
                  <div className='text-center mt-1'>
                    <span className='fw-bold'>Rüzgar</span>
                    <hr style={{marginTop:'8px', marginBottom:0}}/>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-4 ps-4 d-sm-flex justify-content-sm-end justify-content-lg-center'><img width={35} src={`./wind${theme}.png`}></img></div>
                    <div className='col-8 ps-3 pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Hız: {data ? data['list'][0]['wind']['speed'].toFixed(0):' '}km/h</span></div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-4 ps-4 d-sm-flex justify-content-sm-end justify-content-lg-center'><img width={35} src={`./arrow${theme}.png`}></img></div>
                    <div className='col-8 ps-3 pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Yön: {data ? data['list'][0]['wind']['deg'].toFixed(0):' '}°</span></div>
                  </div>
                </div>
              </div>

              <div className='col-6'>
                <div className={`rounded container mt-2 h-100 Card${theme}`}>
                  <div className='text-center mt-1'>
                    <span className='fw-bold'>Güneş Durumu</span>
                    <hr style={{marginTop:'8px', marginBottom:0}}/>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-4 ps-4 d-sm-flex justify-content-sm-end justify-content-lg-center'><img width={35} src={`./sunset${theme}.png`}></img></div>
                    <div className='col-8 ps-3 pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Bat: {data ? new Date(data['city']['sunset']*1000).toTimeString().slice(0,5) :' '}</span></div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-4 ps-4 d-sm-flex justify-content-sm-end justify-content-lg-center'><img width={35} src={`./sunrise${theme}.png`}></img></div>
                    <div className='col-8 ps-3 pt-1'><span style={{fontSize:'0.8em', fontWeight:'500'}}>Doğ: {data ? new Date(data['city']['sunrise']*1000).toTimeString().slice(0, 5) :' '}</span></div>
                  </div>
                </div>
              </div>
              
            </div>


          </div>



        </>
      )
}

export default Details