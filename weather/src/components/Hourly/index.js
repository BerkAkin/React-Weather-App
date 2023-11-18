import React, {useState,useContext} from 'react'
import Theme from '../../contexts/ThemeContext/ThemeContext'
import './style.css'

function Hourly() {

  const {theme} = useContext(Theme)

  return (
    <>
      <div className={`rounded mt-1 container hourlyCard${theme}`}>
        <div className='row'>
          <div className='col-12' style={{height:'10vh'}}>
            <div className='h-100 row'>
              <div className={`col-4 ps-1 hourlyCardSub${theme} rounded`}><img width={80}  src='/cloud.png'></img></div>
              <div className='col-8 '>
                <div className='row h-50 '>
                  <div className='col-5 text-center pt-2'><p className='border-dark border rounded-pill'>12°C</p></div>
                  <div className='col-7 text-center  h-100'>
                    <div className='row h-50'><small>Pazartesi</small></div>
                    <div className='row h-50'><small>15:40</small></div>
                  </div>
                </div>
                <hr className='m-1'/>
                <div className='row h-50'>
                  <div className='col-12 pt-0 text-center'>Parçalı Bulutlu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      
      

      
      
      
    </>
  )
}

export default Hourly