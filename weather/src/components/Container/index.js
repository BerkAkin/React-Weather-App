import React from 'react'

import SubContainer from '../SubContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '../../contexts/ThemeContext/ThemeContext';

function Container() {
  return (
    <div>
    <ThemeProvider>
      <SubContainer/>
    </ThemeProvider>
    </div>
  )
}

export default Container