import React from 'react'
import SearchBar from '../SearchBar';
import Temperature from '../Temperature';
import Options from '../Options';
import Hourly from '../Hourly';
import NextDays from '../NextDays';

import Theme from '../../contexts/ThemeContext/ThemeContext'

import { SehirProvider } from '../../contexts/SearchContext/SearchContext';
import { useContext } from 'react';

import './styles.css'


function SubContainer() {
  const {theme} = useContext(Theme)
  return (
    <>
        <SehirProvider>
          <div className='container-fluid'>
            <div className='row' style={{height:'10vh'}}>
                <div className={`border col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 secim${theme}`}><SearchBar/></div>
                <div className={`border col-xxl-9 col-xl-8 col-lg-6 col-md-6 d-sm-none d-md-block settings${theme}`}><Options/></div>
            </div>

            <div className='row' style={{height:'90vh'}}>


              <div className={`col-xxl-5 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-1 border border-danger current${theme}`}>
                <div className='row'>
                  <div className='col-xl-7 col-md-6 pe-0 rounded-start'><Temperature/></div>
                  <div className={`hourly${theme} p-0 col-md-6 col-xl-5 d-xl-block rounded-end`} ><Hourly/></div>
                </div>
              </div>


              <div className={`col-xxl-7 col-xl-6 col-lg-12 col-md-12 col-sm-12 border border-success daily${theme}`}>
                <div className='container rounded' style={{height:'85.5vh'}}>
                  <div className='row'><NextDays/></div>
                </div>
              </div>
            </div>


          </div>
      </SehirProvider>
    </>
  )
}

export default SubContainer