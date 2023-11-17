import React from 'react'
import { useContext } from 'react'
import Sehir from '../../contexts/SearchContext/SearchContext'
import Theme from '../../contexts/ThemeContext/ThemeContext'
import Details from '../Details'
import './style.css'



import 'bootstrap/dist/css/bootstrap.min.css';


function Temperature() {
  const {city,setCity} = useContext(Sehir)
  const {theme} = useContext(Theme)

  return (
    <>
      <div className={`container-fluid rounded topContext${theme}`} style={{height:'88vh'}}>
      <div style={{height:'45vh'}}>
        <div className='row text-center'><span><img height="200" src="/cloud.png"></img></span></div>
          <div className='row mt-2 text-center' style={{fontSize:'1.6em'}}><p>Parçalı Bulutlu</p></div>
          <div className='row justify-content-center'><p className='border border-dark rounded-pill w-25 text-center' style={{fontSize:'1.6em'}}>15 °C</p></div>
          <div className='row '><p className=' text-center'>Hissedilen Sıcaklık : 13 °C</p></div>
        </div>
        <hr/>


         <div style={{height:'35vh'}}>

          <Details/>

         </div>


      </div>
      
     
    </>
  )
}

export default Temperature