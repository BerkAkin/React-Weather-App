import React, {useContext, useState} from 'react'
import Theme from '../../contexts/ThemeContext/ThemeContext'
import './style.css'

function NextDays() {
  const {theme} = useContext(Theme)
  return (
    <>
      <div className={`container `}>
        <div className='row mt-2'style={{height:'17vh'}}>



          <div className={`col p-0 rounded-start`}>
            <div className='row h-25'></div>
            <div className={`rounded-start d-flex justify-content-evenly align-items-center dailyLeftContainer${theme}`}>
              <img height={68} width={68} className='ms-1' src='/cloud.png'></img> 
              <div className='col-1'></div>
              <small className=' display-6'> 16°C</small>
              <div className='col-1'></div>
              <small className={` dailyContainerMidBottom${theme} text-center `}>Parçalı Bulutlu</small>
            </div>
            <div className='h-25'></div>
          </div>


          <div className={`col-4 h-75 rounded align-items-center d-flex justify-content-center fullCard${theme}`}>
            <div className='display-6'>CUMARTESİ</div>
          </div>



          <div className={`col p-0 rounded-end `}>
            <div className={`container-fluid h-100`}>
              <div className='row h-25'></div>
              <div className={`row text-center rounded-end h-50 dailyRightContainer${theme}`}>

                <div className={`col-4 lastBorder${theme}`}>
                  <div className='row mt-2'><span><img width={30} src={`/hightemp${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>20 °C</span></div>
                </div>
                <div className={`col-4 lastBorder${theme}`}>
                  <div className='row mt-2'><span><img width={30} src={`/humidity${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>%90</span></div>
                </div>
                <div className={`col-4`}>
                  <div className='row mt-2'><span><img width={30} src={`/sunrise${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>07:45</span></div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div> 
      <div className={`container `}>
        <div className='row mt-2'style={{height:'17vh'}}>



          <div className={`col p-0 rounded-start`}>
            <div className='row h-25'></div>
            <div className={`rounded-start d-flex justify-content-evenly align-items-center dailyLeftContainer${theme}`}>
              <img height={68} width={68} className='ms-1' src='/cloud.png'></img> 
              <div className='col-1'></div>
              <small className=' display-6'> 16°C</small>
              <div className='col-1'></div>
              <small className={` dailyContainerMidBottom${theme} text-center `}>Parçalı Bulutlu</small>
            </div>
            <div className='h-25'></div>
          </div>


          <div className={`col-4 h-75 rounded align-items-center d-flex justify-content-center fullCard${theme}`}>
            <div className='display-6'>CUMARTESİ</div>
          </div>



          <div className={`col p-0 rounded-end `}>
            <div className={`container-fluid h-100`}>
              <div className='row h-25'></div>
              <div className={`row text-center rounded-end h-50 dailyRightContainer${theme}`}>

                <div className={`col-4 lastBorder${theme}`}>
                  <div className='row mt-2'><span><img width={30} src={`/hightemp${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>20 °C</span></div>
                </div>
                <div className={`col-4 lastBorder${theme}`}>
                  <div className='row mt-2'><span><img width={30} src={`/humidity${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>%90</span></div>
                </div>
                <div className={`col-4`}>
                  <div className='row mt-2'><span><img width={30} src={`/sunrise${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>07:45</span></div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div> 
      <div className={`container `}>
        <div className='row mt-2'style={{height:'17vh'}}>



          <div className={`col p-0 rounded-start`}>
            <div className='row h-25'></div>
            <div className={`rounded-start d-flex justify-content-evenly align-items-center dailyLeftContainer${theme}`}>
              <img height={68} width={68} className='ms-1' src='/cloud.png'></img> 
              <div className='col-1'></div>
              <small className=' display-6'> 16°C</small>
              <div className='col-1'></div>
              <small className={` dailyContainerMidBottom${theme} text-center `}>Parçalı Bulutlu</small>
            </div>
            <div className='h-25'></div>
          </div>


          <div className={`col-4 h-75 rounded align-items-center d-flex justify-content-center fullCard${theme}`}>
            <div className='display-6'>CUMARTESİ</div>
          </div>



          <div className={`col p-0 rounded-end `}>
            <div className={`container-fluid h-100`}>
              <div className='row h-25'></div>
              <div className={`row text-center rounded-end h-50 dailyRightContainer${theme}`}>

                <div className={`col-4 lastBorder${theme}`}>
                  <div className='row mt-2'><span><img width={30} src={`/hightemp${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>20 °C</span></div>
                </div>
                <div className={`col-4 lastBorder${theme}`}>
                  <div className='row mt-2'><span><img width={30} src={`/humidity${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>%90</span></div>
                </div>
                <div className={`col-4`}>
                  <div className='row mt-2'><span><img width={30} src={`/sunrise${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>07:45</span></div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div> 
      <div className={`container `}>
        <div className='row mt-2'style={{height:'17vh'}}>



          <div className={`col p-0 rounded-start`}>
            <div className='row h-25'></div>
            <div className={`rounded-start d-flex justify-content-evenly align-items-center dailyLeftContainer${theme}`}>
              <img height={68} width={68} className='ms-1' src='/cloud.png'></img> 
              <div className='col-1'></div>
              <small className=' display-6'> 16°C</small>
              <div className='col-1'></div>
              <small className={` dailyContainerMidBottom${theme} text-center `}>Parçalı Bulutlu</small>
            </div>
            <div className='h-25'></div>
          </div>


          <div className={`col-4 h-75 rounded align-items-center d-flex justify-content-center fullCard${theme}`}>
            <div className='display-6'>CUMARTESİ</div>
          </div>



          <div className={`col p-0 rounded-end `}>
            <div className={`container-fluid h-100`}>
              <div className='row h-25'></div>
              <div className={`row text-center rounded-end h-50 dailyRightContainer${theme}`}>

                <div className={`col-4 lastBorder${theme}`}>
                  <div className='row mt-2'><span><img width={30} src={`/hightemp${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>20 °C</span></div>
                </div>
                <div className={`col-4 lastBorder${theme}`}>
                  <div className='row mt-2'><span><img width={30} src={`/humidity${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>%90</span></div>
                </div>
                <div className={`col-4`}>
                  <div className='row mt-2'><span><img width={30} src={`/sunrise${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>07:45</span></div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div> 
      <div className={`container `}>
        <div className='row mt-2'style={{height:'17vh'}}>



          <div className={`col p-0 rounded-start`}>
            <div className='row h-25'></div>
            <div className={`rounded-start d-flex justify-content-evenly align-items-center dailyLeftContainer${theme}`}>
              <img height={68} width={68} className='ms-1' src='/cloud.png'></img> 
              <div className='col-1'></div>
              <small className=' display-6'> 16°C</small>
              <div className='col-1'></div>
              <small className={` dailyContainerMidBottom${theme} text-center `}>Parçalı Bulutlu</small>
            </div>
            <div className='h-25'></div>
          </div>


          <div className={`col-4 h-75 rounded align-items-center d-flex justify-content-center fullCard${theme}`}>
            <div className='display-6'>CUMARTESİ</div>
          </div>



          <div className={`col p-0 rounded-end `}>
            <div className={`container-fluid h-100`}>
              <div className='row h-25'></div>
              <div className={`row text-center rounded-end h-50 dailyRightContainer${theme}`}>

                <div className={`col-4 lastBorder${theme}`}>
                  <div className='row mt-2'><span><img width={30} src={`/hightemp${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>20 °C</span></div>
                </div>
                <div className={`col-4 lastBorder${theme}`}>
                  <div className='row mt-2'><span><img width={30} src={`/humidity${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>%90</span></div>
                </div>
                <div className={`col-4`}>
                  <div className='row mt-2'><span><img width={30} src={`/sunrise${theme}.png`}></img></span></div>
                  <div><span className='fw-bold'>07:45</span></div>
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