import React from 'react'
import { useContext } from 'react'
import Theme from '../../contexts/ThemeContext/ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css';

function Options() {
  const {theme,toggleTheme} = useContext(Theme)
  return (
    <div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="darkSwitch" onChange={toggleTheme} />
        <label className="form-check-label" htmlFor="darkSwitch">Dark Mode</label>
      </div>
    </div>
  )
}

export default Options