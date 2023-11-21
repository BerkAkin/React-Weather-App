import React from 'react'

import { useContext } from 'react'
import Theme from '../../contexts/ThemeContext/ThemeContext'

function Options() {
  const {theme,toggleTheme} = useContext(Theme)
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
          </div>
          <div className='col-3'>
            <div className='row'>
              <div className='col-4 d-flex justify-content-end align-items-center'>
                <a href='https://github.com/BerkAkin' target='blank'><img className='rounded-pill border' width={55} src='https://avatars.githubusercontent.com/berkakin'></img></a>
              </div>
              <div className='col-4 d-flex justify-content-start align-items-center'>
                <a href='https://www.linkedin.com/in/berk-ak%C4%B1n-6a636121a/' target='blank'><img width={45} src={`/li${theme}.png`}></img></a>
              </div>
              <div className='col-4'>
                <div className="form-check form-switch">
                  <label className="form-check-label py-2" htmlFor="darkSwitch"><img width="45" src={`/${theme}.png`}></img></label>
                  <input className="form-check-input d-none" type="checkbox" role="switch" id="darkSwitch" onChange={toggleTheme} />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Options