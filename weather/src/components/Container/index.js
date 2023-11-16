import React from 'react'
import SearchBar from '../SearchBar';
import Temperature from '../Temperature';
import { useContext } from 'react';
import { SehirProvider } from '../../contexts/SearchContext/SearchContext';

import 'bootstrap/dist/css/bootstrap.min.css';

function Container() {
  return (
    <div>
      <SehirProvider>
        <div className='container-fluid'>
          <div className='row'style={{height:'100vh'}}>



            <div className='col-3' >



              {/* ARAMA KUTUSUNUN SEKMESİ */}
              <div className='row bg-success' style={{height:'10vh'}}>
                  <SearchBar/>
              </div>
              {/* ARAMA KUTUSUNUN SEKMESİ */}






              {/* MEVCUT GÜN  */}
              <div className='row bg-danger' style={{height:'60vh'}}>
                <Temperature/>
              </div>
              {/* MEVCUT GÜN  */}



              
              <div className='row bg-warning' style={{height:'30vh'}}>DETAYLAR</div>
            </div>



            <div className='col-3 border'>24 SAATLİK VERİ</div>
            <div className='col-6 border'>DİĞER GÜNLER</div>
          </div>
        </div>
      </SehirProvider>
    </div>
  )
}

export default Container