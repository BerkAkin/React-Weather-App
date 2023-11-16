import React from 'react'
import { useContext } from 'react'
import Sehir from '../../contexts/SearchContext/SearchContext'
import Theme from '../../contexts/ThemeContext/ThemeContext'
import './style.css'
import Humid from '../Details/Humid'
import Temps from '../Details/Temps'
import Wind from '../Details/Wind'
import Sunrise from '../Details/Sunrise'

import 'bootstrap/dist/css/bootstrap.min.css';


function Temperature() {
  const {city,setCity} = useContext(Sehir)
  const {theme} = useContext(Theme)

  return (
    <>
      <div className={`container-fluid rounded topContext${theme}`} style={{height:'88vh'}}>
      <div style={{height:'50vh'}}>
        <div className='row text-center'><span><img height="200" src="/cloud.png"></img></span></div>
          <div className='row mt-3 text-center' style={{fontSize:'1.6em'}}><p>Parçalı Bulutlu</p></div>
          <div className='row justify-content-center'><p className='border border-dark rounded-pill w-25 text-center' style={{fontSize:'1.6em'}}>15 °C</p></div>
          <div className='row '><p className=' text-center'>Hissedilen Sıcaklık : 13 °C</p></div>
        </div>
        <hr/>


         <div className='container-fluid ' style={{height:'33vh'}}>

         <div className='row  h-50'>
            <div className='col-6 '><Humid/></div>
            <div className='col-6 '><Sunrise/></div>
          </div>
          <div className='row  h-50'>
            <div className='col-6 '><Temps/></div>
            <div className='col-6 '><Wind/></div>
          </div>

          
          
          
          


         </div>


      </div>
      
     
    </>
  )
}

export default Temperature