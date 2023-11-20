import React, {useContext, useState} from 'react'
import Theme from '../../contexts/ThemeContext/ThemeContext'
import Sehir from '../../contexts/SearchContext/SearchContext'
import './style.css'

function NextDays() {
  const {theme} = useContext(Theme)
  const {data} = useContext(Sehir)

  let daysList = []

  const days = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi']
 
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
      <div className='container'>
        <div className='row'>
          <div className='col'></div>
          <div className='col d-flex align-items-center justify-content-center'>
            <span className='display-5 '>Günlük Özet</span>
          </div>
          <div className='col'>
            <div className='row h-100 d-flex align-items-end text-center'>
              <div className='col'><span>Rüzgar Hızı</span></div>
              <div className='col'><span>Hissedilen</span></div>
              <div className='col'><small>Bulut Oranı</small></div>
            </div>
        </div>
        </div>
        <hr/>
      </div>
      {daysList.map((item)=>{
      return(
        <div key={item.id} className={`container mt-3 pt-1`}>
          <div className='row'style={{height:'17vh'}}>

            <div className={`col p-0 rounded-start`}>
              <div className='row h-25'></div>
              <div className={`text-center rounded-start d-flex justify-content-evenly align-items-center dailyLeftContainer${theme}`}>
                <div className='col-3'>
                  <img height={68} width={68} className='ms-1 ' src={data ? `http://openweathermap.org/img/wn/`+item.icon+`@4x.png`: " "}></img> 
                </div>
                <div className='col-3'>
                   <small className='display-6'> {item.temp.toFixed(0)}°C</small>
                </div>
                <div className='col-6'>
                  <span style={{textTransform:'capitalize'}} className={`dailyContainerMidBottom${theme}`}>{item.weather}</span>
                </div>
              </div>
              <div className='h-25'></div>
            </div>

            <div className={`col-4 h-75 rounded align-items-center d-flex justify-content-center fullCard${theme}`}>
              <div className='display-6'>{days[new Date(item.text).getDay()]}</div>
            </div>

            <div className={`col p-0 pb-1 rounded-end  `}>
              <div className={`container-fluid h-100`}>
                <div className='row h-25'></div>
                <div className={`row text-center rounded-end h-50 dailyRightContainer${theme}`}>

                  <div className={`col-4 lastBorder${theme}`}>
                    <div className='row mt-2'><span><img width={30} src={`/wind${theme}.png`}></img></span></div>
                    <div><span className='fw-bold'>{item.wind} km/h</span></div>
                  </div>
                  <div className={`col-4 lastBorder${theme}`}>
                    <div className='row mt-2'><span><img width={30} src={`/feel${theme}.png`}></img></span></div>
                    <div><span className='fw-bold'>{item.feel.toFixed()}°C</span></div>
                  </div>
                  <div className={`col-4`}>
                    <div className='row mt-2'><span><img width={30} src={`/clouds${theme}.png`}></img></span></div>
                    <div><span className='fw-bold'>% {item.clouds}</span></div>
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