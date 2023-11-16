import React from 'react'

import SubContainer from '../SubContainer';

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