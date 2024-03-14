import React from 'react'
import './ExamTimeTable.css';
import examtimetable from './images/TimeTable.png'

function ExamTimeTable() {
    return (
        <div className='ExamTimeTable'>
            <img src={examtimetable}  width={50} height={50} className='exam_time_img'></img> <pre><h2> Exam Time Table</h2></pre>
            <div className='ExamTimeTable_body'>
                <h1>Time Table will be uploaded soon ...</h1>
            </div>
        </div>
    )
}

export default ExamTimeTable
