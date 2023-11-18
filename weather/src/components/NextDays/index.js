import React, {useContext, useState} from 'react'
import Theme from '../../contexts/ThemeContext/ThemeContext'
import './style.css'

function NextDays() {
  const {theme} = useContext(Theme)
  return (
    <>
      <div className={`rounded mt- container fullCard${theme}`}>
        <div className='row 'style={{height:'16vh'}}>

          <div className={`col-4 rounded-start align-items-center d-flex justify-content-center dailyLeftContainer${theme}`}>
            <div className='display-4'>CUMARTESİ</div>
          </div>

          <div className='col-4 p-0'>
            <div className='d-flex align-items-center justify-content-center'>
              <img height={90} width={90} src='/cloud.png'></img> <small className='display-6'> 16°C</small>
            </div>
            <div className='text-center'>
              <div className='dailyContainerMidBottomDark'>Parçalı Bulutlu</div>
            </div>
          </div>

          <div className={`col-4 p-0 rounded-end dailyRightContainer${theme}`}>
            <div className='container-fluid h-100'>
              <div className='row text-center h-100'>
                <div className='col-4 border-end'>
                  <div className='row mt-3'><span><img width={50} src={`/hightemp${theme}.png`}></img></span></div>
                  <div className='row mt-1'><span>Max</span></div>
                  <div className='row'><span>20 °C</span></div>
                </div>
                <div className='col-4 border-end'>
                  <div className='row mt-3'><span><img width={50} src={`/humidity${theme}.png`}></img></span></div>
                  <div className='row mt-1'><span>Nem</span></div>
                  <div className='row'><span>%90</span></div>
                </div>
                <div className='col-4'>
                  <div className='row mt-3'><span><img width={50} src={`/sunrise${theme}.png`}></img></span></div>
                  <div className='row mt-1'><span>Doğum</span></div>
                  <div className='row'><span>07:45</span></div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div> 

      
      
    </>
  )
}

export default NextDays