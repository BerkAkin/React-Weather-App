import React from 'react'

import { useContext } from 'react'
import Theme from '../../contexts/ThemeContext/ThemeContext'

function Options() {
  const {theme,toggleTheme} = useContext(Theme)
  return (
    <>
      <div className='container'>
        <div className='row d-flex float-end'>
          <div className='col-sm-2 d-none d-sm-block'>
            <label className="mt-3" htmlFor="darkSwitch">
              <img width="45" src={`/modSite${theme}.png`}></img>
            </label>
            <input className="d-none" type="checkbox" role="switch" id="darkSwitch" onChange={toggleTheme} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Options