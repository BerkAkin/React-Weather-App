import React from 'react'
import { ThemeProvider } from '../../contexts/ThemeContext/ThemeContext';
import SubContainer from '../SubContainer';

function Container() {
  return (
    <>
    <ThemeProvider>
      <SubContainer/>
    </ThemeProvider>
    </>
  )
}

export default Container