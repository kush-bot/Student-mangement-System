import React from 'react'
import "./Body.css"
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import EmojiEventsSharpIcon from '@mui/icons-material/EmojiEventsSharp';
// import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
// import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import Profile from './/images/Profile.png';
import Viewattendence from './/images/Viewattendence.png';


import SemesterResults from './/images/SemesterResults.png';


import ExamTimeTable_img from './/images/ExamTimeTable.png';
import SyllabusSubjectView from './/images/SubjectSyllabusView.png'; 
import alerts from './/images/Alerts.png';
import MyDashboard from './/images/MyDashboard.png';

import Downloads from './/images/Downloads.png';
import PhotoGallery_img from './/images/PhotoGallery.png';
import ViewPerformanceDetails from './/images/ViewPerformanceDetails.png';
import TimeTable from './/images/TimeTable.png';
import Alerts from './Alerts'
import ViewattendenceInfo from './Viewattendence'
import PhotoGallery from './PhotoGallery'
import Semresult from './Semresult'
import ExamTimeTable from './ExamTimeTable'
import PerformenceDetails from './PerformenceDetails'




function Body() {
    return (
        <div className="home_body">
            <div classname="home_body_icons">
                
               <a href = './Profile' ><img src={Profile} className={"Profile"} alt={Profile} height={170} width={170} /></a>
                
               <img src={MyDashboard} className={"MyDashboard"} alt={MyDashboard} height={170} width={170}/>

               

              

               <a href='./ViewattendenceInfo'><img src={Viewattendence} className={"Viewattendence"} alt={Viewattendence} height={170} width={170}/></a>

              

              

              
 
               <a href='./Semresult'><img src={SemesterResults} className={"SemesterResults"} alt={SemesterResults} height={170} width={170}/></a>

               <a href='./PerformenceDetails'><img src={ViewPerformanceDetails} className={"ViewPerformanceDetails"} alt={ViewPerformanceDetails} height={170} width={170}/></a>

               
               
              

               <img src={Downloads} className={"Downloads"} alt={Downloads} height={170} width={170}/>

               <a href ='./PhotoGallery'><img src={PhotoGallery_img} className={"PhotoGallery"} alt={PhotoGallery} height={170} width={170}/></a>

              

               <a href='./ExamTimeTable'><img src={ExamTimeTable_img} className={"Examtimetable"} alt={ExamTimeTable} height={170} width={170}/></a>

               <img src={TimeTable} className={"TimeTable"} alt={TimeTable} height={170} width={170}/>

               <img src={SyllabusSubjectView} className={"SyllabusSubjectView"} alt={SyllabusSubjectView} height={170} width={170}/>

               <a href='./Alerts'><img src={alerts} className={"alerts_home"} alt={alerts} height={170} width={170}/></a>

              


            </div>

        </div>
    )
}

export default Body
