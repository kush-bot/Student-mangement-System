import React from 'react'
import alertsImg from './images/Alerts.png'
import './Alerts.css'

function Alerts() {
    return (
        <div className='alerts'>
            <img src={alertsImg} height={50} width = {50} className='alertsImg'></img><h2>Alerts</h2>  
        
            <div className='alerts_body'>
              <h1>Last date to pay exam fee is 2-January-2023 </h1>
              <h1>Third internals start from 29-December-2022 </h1>
              <h1>Students are remainded to pay tuition fee before the exams </h1>
           </div>
        </div>
    )
}

export default Alerts
