import React, {useState,useContext} from 'react'
import Theme from '../../contexts/ThemeContext/ThemeContext'
import './style.css'

function Hourly() {

  const {theme} = useContext(Theme)

  return (
    <>
      <div className={`rounded-end container hourlyCard${theme}`}>
        <div className='row'>
          <div className='col-12' style={{height:'10.5vh'}}>
            <div className='h-100 row'>
              <div className={`col-4 ps-1 hourlyCardSub${theme} rounded-end`}>
                <div className='row text-center'>
                  <span>
                    <img width={55}  src='/cloud.png'></img>
                  </span>
                </div>
                <div className='row'>
                  <span className='text-center fw-bold'>12°C</span>
                </div>
                
              </div>
              <div className='col-8 '>
                <div className='row h-50 text-center align-items-center'>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>Pazartesi</small>
                    </div>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>15:40</small>
                    </div>
                </div>
                <hr className='m-1'/>
                <div className='row h-50'>
                  <div className='col-12 pt-0 text-center'>
                    <span className='fw-bold'>Parçalı Bulutlu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      <div className={`rounded-end container hourlyCard${theme}`}>
        <div className='row'>
          <div className='col-12' style={{height:'10.5vh'}}>
            <div className='h-100 row'>
              <div className={`col-4 ps-1 hourlyCardSub${theme} rounded-end`}>
                <div className='row text-center'>
                  <span>
                    <img width={55}  src='/cloud.png'></img>
                  </span>
                </div>
                <div className='row'>
                  <span className='text-center fw-bold'>12°C</span>
                </div>
                
              </div>
              <div className='col-8 '>
                <div className='row h-50 text-center align-items-center'>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>Pazartesi</small>
                    </div>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>15:40</small>
                    </div>
                </div>
                <hr className='m-1'/>
                <div className='row h-50'>
                  <div className='col-12 pt-0 text-center'>
                    <span className='fw-bold'>Parçalı Bulutlu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className={`rounded-end container hourlyCard${theme}`}>
        <div className='row'>
          <div className='col-12' style={{height:'10.5vh'}}>
            <div className='h-100 row'>
              <div className={`col-4 ps-1 hourlyCardSub${theme} rounded-end`}>
                <div className='row text-center'>
                  <span>
                    <img width={55}  src='/cloud.png'></img>
                  </span>
                </div>
                <div className='row'>
                  <span className='text-center fw-bold'>12°C</span>
                </div>
                
              </div>
              <div className='col-8 '>
                <div className='row h-50 text-center align-items-center'>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>Pazartesi</small>
                    </div>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>15:40</small>
                    </div>
                </div>
                <hr className='m-1'/>
                <div className='row h-50'>
                  <div className='col-12 pt-0 text-center'>
                    <span className='fw-bold'>Parçalı Bulutlu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className={`rounded-end container hourlyCard${theme}`}>
        <div className='row'>
          <div className='col-12' style={{height:'10.5vh'}}>
            <div className='h-100 row'>
              <div className={`col-4 ps-1 hourlyCardSub${theme} rounded-end`}>
                <div className='row text-center'>
                  <span>
                    <img width={55}  src='/cloud.png'></img>
                  </span>
                </div>
                <div className='row'>
                  <span className='text-center fw-bold'>12°C</span>
                </div>
                
              </div>
              <div className='col-8 '>
                <div className='row h-50 text-center align-items-center'>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>Pazartesi</small>
                    </div>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>15:40</small>
                    </div>
                </div>
                <hr className='m-1'/>
                <div className='row h-50'>
                  <div className='col-12 pt-0 text-center'>
                    <span className='fw-bold'>Parçalı Bulutlu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className={`rounded-end container hourlyCard${theme}`}>
        <div className='row'>
          <div className='col-12' style={{height:'10.5vh'}}>
            <div className='h-100 row'>
              <div className={`col-4 ps-1 hourlyCardSub${theme} rounded-end`}>
                <div className='row text-center'>
                  <span>
                    <img width={55}  src='/cloud.png'></img>
                  </span>
                </div>
                <div className='row'>
                  <span className='text-center fw-bold'>12°C</span>
                </div>
                
              </div>
              <div className='col-8 '>
                <div className='row h-50 text-center align-items-center'>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>Pazartesi</small>
                    </div>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>15:40</small>
                    </div>
                </div>
                <hr className='m-1'/>
                <div className='row h-50'>
                  <div className='col-12 pt-0 text-center'>
                    <span className='fw-bold'>Parçalı Bulutlu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className={`rounded-end container hourlyCard${theme}`}>
        <div className='row'>
          <div className='col-12' style={{height:'10.5vh'}}>
            <div className='h-100 row'>
              <div className={`col-4 ps-1 hourlyCardSub${theme} rounded-end`}>
                <div className='row text-center'>
                  <span>
                    <img width={55}  src='/cloud.png'></img>
                  </span>
                </div>
                <div className='row'>
                  <span className='text-center fw-bold'>12°C</span>
                </div>
                
              </div>
              <div className='col-8 '>
                <div className='row h-50 text-center align-items-center'>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>Pazartesi</small>
                    </div>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>15:40</small>
                    </div>
                </div>
                <hr className='m-1'/>
                <div className='row h-50'>
                  <div className='col-12 pt-0 text-center'>
                    <span className='fw-bold'>Parçalı Bulutlu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className={`rounded-end container hourlyCard${theme}`}>
        <div className='row'>
          <div className='col-12' style={{height:'10.5vh'}}>
            <div className='h-100 row'>
              <div className={`col-4 ps-1 hourlyCardSub${theme} rounded-end`}>
                <div className='row text-center'>
                  <span>
                    <img width={55}  src='/cloud.png'></img>
                  </span>
                </div>
                <div className='row'>
                  <span className='text-center fw-bold'>12°C</span>
                </div>
                
              </div>
              <div className='col-8 '>
                <div className='row h-50 text-center align-items-center'>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>Pazartesi</small>
                    </div>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>15:40</small>
                    </div>
                </div>
                <hr className='m-1'/>
                <div className='row h-50'>
                  <div className='col-12 pt-0 text-center'>
                    <span className='fw-bold'>Parçalı Bulutlu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className={`rounded-end container hourlyCard${theme}`}>
        <div className='row'>
          <div className='col-12' style={{height:'10.5vh'}}>
            <div className='h-100 row'>
              <div className={`col-4 ps-1 hourlyCardSub${theme} rounded-end`}>
                <div className='row text-center'>
                  <span>
                    <img width={55}  src='/cloud.png'></img>
                  </span>
                </div>
                <div className='row'>
                  <span className='text-center fw-bold'>12°C</span>
                </div>
                
              </div>
              <div className='col-8 '>
                <div className='row h-50 text-center align-items-center'>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>Pazartesi</small>
                    </div>
                    <div className='col-6 mt-2'>
                      <small className='fw-bold'>15:40</small>
                    </div>
                </div>
                <hr className='m-1'/>
                <div className='row h-50'>
                  <div className='col-12 pt-0 text-center'>
                    <span className='fw-bold'>Parçalı Bulutlu</span>
                  </div>
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