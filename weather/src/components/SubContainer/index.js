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
                <div className={`col-3 secim${theme}`}><SearchBar/></div>
                <div className={`col-9 settings${theme}`}><Options/></div>
            </div>
            <div className='row' style={{height:'90vh'}}>
            <div className={`col-3 current${theme}`}><Temperature/></div>
            <div style={{padding:0}} className={`col-2 hourly${theme}`}><Hourly/></div>
            <div className={`col-7 daily${theme}`}><NextDays/></div>
            </div>
          </div>
      </SehirProvider>
    </>
  )
}

export default SubContainer