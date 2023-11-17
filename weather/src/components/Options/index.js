import React from 'react'
import { useContext } from 'react'
import Theme from '../../contexts/ThemeContext/ThemeContext'


function Options() {
  const {theme,toggleTheme} = useContext(Theme)
  return (
    <>
      <div className='h-100'>
        <div className='row'>
          <div className='col-9'>
          </div>
          <div className='col-3'>
            <div className="form-check form-switch">
              <input className="form-check-input d-none" type="checkbox" role="switch" id="darkSwitch" onChange={toggleTheme} />
              <label className="form-check-label py-2 float-end " htmlFor="darkSwitch"><img width="50" src={`/${theme}.png`}></img></label>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </>
  )
}

export default Options