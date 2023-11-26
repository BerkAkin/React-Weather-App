import React, {useContext, useState} from 'react'
import Theme from '../../contexts/ThemeContext/ThemeContext'
import Sehir from '../../contexts/SearchContext/SearchContext'
import './style.css'

function NextDays() {
  const {theme} = useContext(Theme)
  const {data} = useContext(Sehir)

  let daysList = []

  const days = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi']
  const months = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık']
 
  if(data){
    for (var i = 8; i < data.list.length; i+=8) {
      const havaList ={
        id:i,
        temp:data.list[i].main.temp,
        weather:data.list[i].weather[0].description,
        icon:data.list[i].weather[0].icon,
        text:data.list[i].dt_txt,
        wind:data.list[i].wind.speed,
        clouds:data.list[i].clouds.all,
        feel:data.list[i].main.feels_like,
      }
      daysList.push(havaList)
  }
}





  return (
    <>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-sm-10 col-md-8'><span className='display-5'>Günlük Özet</span></div>
          <div className='col-md-4 d-sm-none d-none d-sm-block'></div>
          <div className='col-sm-2 col-md-4 d-none d-sm-block'>
            <div className='row h-100 d-flex align-items-end text-center'>
              <div className='col-4 col-xl-6 col-xxl-4 col-sm-12 col-md-4 '><span>Rüzgar</span></div>
              <div className='col-4 col-xl-6 col-xxl-4 d-sm-none d-md-block col-md-4'><span>Hissedilen</span></div>
              <div className='col-4 d-sm-block col-xxl-4 d-xxl-block d-md-block col-md-4 d-xl-none d-none d-sm-none'><small>Bulut Oranı</small></div>
            </div>
        </div>
        </div>
        <hr/>
      </div>
      {daysList.map((item)=>{
      return(

        <div key={item.id} className={`container mt-2 pt-1`}>
          <div className='row'style={{height:'17vh'}}>





            <div className={`col-6 col-sm-5 col-md-4 col-xl-5 h-75 rounded-start fullCard${theme}`}>
              <div className='container p-0  h-100'>
                <div className='row h-100'>
                  <div className='col-8'>
                    <div className='row h-25'>
                      <p className='mt-1'><span>{new Date(item.text).getDate()} </span>{months[new Date(item.text).getMonth()]}</p>
                    </div>
                    <div className='row pt-2'>
                      <p className='display-6'>{days[new Date(item.text).getDay()]}</p>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div className='row h-50'>
                      <span className='text-center'><img width={60}  src={data ? `http://openweathermap.org/img/wn/`+item.icon+`@4x.png`: " "}></img> </span>
                      
                    </div>
                    <div className='row p-0 text-center h-50'>
                      <small className='h3'> {item.temp.toFixed(0)}°C</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div className={`col-6 col-sm-5 p-0 col-md-4 col-xl-3`}>
              <div className='container-fluid h-100 p-0'>
                <div className={`h-75 dailyLeftContainer${theme}`}>
                  <div className='col-12 h-100 d-flex align-items-center justify-content-center'>
                    <p style={{textTransform:'capitalize', letterSpacing:2, fontSize:'20px'}} className={`text-center pt-3 dailyContainerMidBottom${theme}`}>{item.weather}</p>
                  </div>
                </div>
              </div>
            </div>




            <div className={`p-0 d-none d-sm-block col-sm-2 col-md-4 col-xl-4`}>
              <div className={`container-fluid h-100`}>
                <div className={`row h-75 border-start text-center rounded-end dailyRightContainer${theme}`}>
                  <div className={`col-12 col-md-4 col-xl-6 col-xxl-4`}>
                    <div className='row mt-3'><span><img width={40} src={`/wind${theme}.png`}></img></span></div><hr className='mt-2 mb-2'/>
                    <div><span className='fw-bold' style={{fontSize:'14px'}}>{item.wind.toFixed(1)} <small>km/h</small></span></div>
                  </div>
                  <div className={`col-md-4 d-md-block d-none col-xl-6 col-xxl-4`}>
                    <div className='row mt-3'><span><img width={40} src={`/feel${theme}.png`}></img></span></div><hr className='mt-2 mb-2'/>
                    <div><span className='fw-bold' style={{fontSize:'16px'}}>{item.feel.toFixed()}°C</span></div>
                  </div>
                  <div className={`col-md-4 d-md-block d-none d-xl-none d-xxl-block`}>
                    <div className='row mt-3'><span><img width={40} src={`/clouds${theme}.png`}></img></span></div><hr className='mt-2 mb-2'/>
                    <div><span className='fw-bold' style={{fontSize:'16px'}}>% {item.clouds}</span></div>
                  </div>
                </div>
              </div>
            </div>





          </div>
        </div> 
      )
    })}
   
    </>
  )
}

export default NextDays