import React from 'react'
import semres from './images/SemesterResults.png'
import './Semresult.css'

function Semresult() {
    return (
        <div className="semresult">
            <img src={semres}  width={50} height={50} className='semres_img'></img> <h2> Semester Result</h2>
        
            <div className="semresult_body">
                <h1>Result will be announcing soon after the semester examiation </h1>
            </div>
        </div>
    )
}

export default Semresult
