import {useContext} from 'react'
import Theme from '../../contexts/ThemeContext/ThemeContext'
import Sehir from '../../contexts/SearchContext/SearchContext'
import { days } from '../Data/Dates'

import './style.css'

function Hourly() {

  const {theme} = useContext(Theme)
  const {data} = useContext(Sehir)

  return (
    <>
    {data ? data['list'].slice(0,8).map((item,index)=>{
      return (
        <div key={index}>
          <div  className={`rounded-end mt-1 container hourlyCard${theme}`}>
            <div className='row'>
              <div className='col-12' style={{height:'10vh'}}>
                <div className='h-100 row'>



                  <div className={`col-4 rounded-end h-100 hourlyCardSub${theme} `}>
                    <div className='container-fluid text-center'>
                      <div className='row'>
                        <span className='ps-2'>
                          <img width={55} src={data ? `http://openweathermap.org/img/wn/`+item['weather'][0]['icon']+`@4x.png`: " "}></img>
                        </span>
                      </div>
                      <div className='row'>
                        <span className='text-center mt-0  fw-bold'>{item['main']['temp'].toFixed()}°C</span>
                      </div>
                    </div>

                      
                  </div>


                  <div className='col-8 h-100'>
                    <div className='row h-50'>
                        <div className='col-5 align-items-center justify-content-center d-flex fw-bold'>
                          {days[new Date(item['dt_txt']).getDay()]}
                        </div>
                        
                        <div className='col-7 text-center pt-1'>
                          <small className='fw-bold h3'>{item['dt_txt'].slice(10,16)}</small>
                        </div>
                    </div>
                    <hr className='m-0 p-0'/>
                    <div className='row pt-2 h-50'>
                      <div className='col-12 pt-0 text-center'>
                        <small style={{textTransform:'capitalize'}} className='fw-bold'>{item['weather'][0]['description']}</small>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div> 
        </div>
      )
    }):""} 

    </>
  )
}

export default Hourly