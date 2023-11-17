import React from 'react'
import SearchBar from '../SearchBar';
import Temperature from '../Temperature';
import { SehirProvider } from '../../contexts/SearchContext/SearchContext';
import Options from '../Options';

import { useContext } from 'react';
import Theme from '../../contexts/ThemeContext/ThemeContext'


import './styles.css'

function SubContainer() {
    const {theme} = useContext(Theme)
    console.log(theme)
  return (
    <div>
        <SehirProvider>

          <div className='container-fluid'>
            <div className='row' style={{height:'10vh'}}>
                <div className={`col-3 secim${theme}`}><SearchBar/></div>
                <div className={`col-9 settings${theme}`}><Options/></div>
            </div>
            <div className='row' style={{height:'90vh'}}>
            <div className={`col-3 current${theme}`}><Temperature/></div>
            <div className={`col-2 hourly${theme}`}></div>
            <div className={`col-7 daily${theme}`}></div>
            </div>
          </div>
          
      </SehirProvider>
    </div>
  )
}

export default SubContainer