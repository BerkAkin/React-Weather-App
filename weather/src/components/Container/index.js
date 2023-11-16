import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Container() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'style={{height:'100vh'}}>
          <div className='col-3 border border-dark' >
            
          </div>
          <div className='col-3 border-danger border'>b</div>
          <div className='col-3 border border-primary'>a</div>
          <div className='col-3 border border-secondary'>d</div>
        </div>
      </div>

    </div>
  )
}

export default Container