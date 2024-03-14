import React from 'react'
import './PerformenceDetails.css'
import performenceDetailsImg from './images/ViewPerformanceDetails.png'
import {useEffect,useState} from 'react';
const math = require('./mathjs')

function PerformenceDetails() {
    const [profileinfo ,setProfileinfo] = useState(String)
    const [attendeceinfo,setattendeceinfo] = useState(Number)
   
    useEffect (() =>{
        var name = localStorage.getItem("user")
          name = JSON.parse(name);
          console.log(name.username) 
          if(name.username== '21CS406'){
              var id = '63a4e5bba56d37a9b2b3714b';
          }
          else if(name.username== '21CS404')
          {
              var id = '63a4e5bba56d37a9b2b3714b';
          }
          else if(name.username== '20CS36')
          {
              var id = '63a4ea85a56d37a9b2b3714d';
          }
     
      var defaultpath= '/project/home/profile/';
      var fetchlink = defaultpath+id;
      const fetchprofileinfo = async () =>{
          const res = await fetch(fetchlink)
          const json = await res.json()
          console.log(profileinfo)

          if(res.ok){
              setProfileinfo(json)

          }
      }
      fetchprofileinfo()
  },[])
    useEffect (() =>{
        var name = localStorage.getItem("user")
        name = JSON.parse(name);
        console.log(name.username) 
        if(name.username== '21CS406'){
            var id = '63a4e5bba56d37a9b2b3714b';
        }
        else if(name.username== '21CS404')
        {
            var id = '63a4e5bba56d37a9b2b3714b';
        }
        else if(name.username== '20CS36')
        {
            var id = '63a4ea85a56d37a9b2b3714d';
        }

        var defaultpath= '/project/home/profile/';
        var fetchlink = defaultpath+id;
        const fetchattendenceinfo = async () =>{
            const res = await fetch(fetchlink)
            const json = await res.json()


            if(res.ok){
                setattendeceinfo(json)
                

            }
            const Dcheld= attendeceinfo.DataCommunicationheld;
            var dcpresent = attendeceinfo.DatabaseManagementSystemPresent;
        }
        fetchattendenceinfo()
    },[])
    return (
        <div className='performenceDetails'>
            <img src={performenceDetailsImg} width={50} height={50} className='performenceDetailsImg'></img><h2>Performence Details</h2>
            <div className="performenceDetails_top">
                <label>Name :</label><input type="text" value={profileinfo.fname}  disabled/>
                <label>Examno :</label><input type="text" value={profileinfo.ExamNo} disabled/>
                <label>Rollno :</label><input type="text" value={profileinfo.rollNo}disabled/>
            </div>
            <div className="performenceDetails_top_two">
                <label>Admission No :</label><input type="text" value={profileinfo.admNo} disabled/>
                <label>Course Details :</label><input type="text" value={profileinfo.courseDetails}disabled/>
                
            </div>
        <div className='performenceDetails_body'>
            <table>
                <tr>
                    <th className='subname_th'>Subjectname</th> 
                    <th>Subject code</th>
                    <th>class Held</th>
                    <th>Attended</th>
                    <th>Percentage %</th>
                    <th>Test1</th>
                    <th className='test2_th'>Test2</th>
                </tr>
                <tr>
                    <td className='subname_th'>Database Mangement System</td> 
                    <td>{attendeceinfo.DBMSSubcode}</td>
                    <td>{attendeceinfo.DatabaseManagementSystemheld}</td>
                    <td>{attendeceinfo.DatabaseManagementSystemPresent}</td>
                    <td>{math.round(attendeceinfo.DatabaseManagementSystemPresent /attendeceinfo.DatabaseManagementSystemheld*100 )}%</td>
                    <td>{attendeceinfo.DBMDt1}</td>
                    <td className='test2_th'>{attendeceinfo.DBMSt2}</td>
                </tr>
                <tr>
                    <td className='subname_th'>Data Communication</td> 
                    <td>{attendeceinfo.DCsubcode}</td>
                    <td>{attendeceinfo.DataCommunicationheld}</td>
                    <td>{attendeceinfo.DataCommunicationPresent}</td>
                    <td>{math.round(attendeceinfo.DataCommunicationPresent /attendeceinfo.DataCommunicationheld*100 )}%</td>
                    <td>{attendeceinfo.DCt1}</td>
                    <td className='test2_th'>{attendeceinfo.DCt2}</td>
                </tr>
                <tr>
                    <td className='subname_th'>Web Technologies</td> 
                    <td>{attendeceinfo.WTsubocde}</td>
                    <td>{attendeceinfo.WebTechheld}</td>
                    <td>{attendeceinfo.WebTechPresent}</td>
                    <td>{math.round(attendeceinfo.WebTechPresent /attendeceinfo.WebTechheld*100 )}%</td>
                    <td>{attendeceinfo.WTt1}</td>
                    <td className='test2_th'>{attendeceinfo.WTt2}</td>
                </tr>
                <tr>
                    <td className='subname_th'>Unix system programming</td> 
                    <td>{attendeceinfo.USPsubcode}</td>
                    <td>{attendeceinfo.UnixSystemPrgheld}</td>
                    <td>{attendeceinfo.UnixSystemPrgPresnt}</td>
                    <td>{math.round(attendeceinfo.UnixSystemPrgPresnt /attendeceinfo.UnixSystemPrgheld*100 )}%</td>
                    <td>{attendeceinfo.USPt1}</td>
                    <td className='test2_th'>{attendeceinfo.USPt2}</td>
                </tr>
                <tr>
                    <td className='subname_th'>Skill Development III</td> 
                    <td>{attendeceinfo.SKILLdvpcode}</td>
                    <td>{attendeceinfo.SkillDevheld}</td>
                    <td>{attendeceinfo.SkillDevPresent}</td>
                    <td>{math.round(attendeceinfo.SkillDevPresent /attendeceinfo.SkillDevheld*100 )}%</td>
                    <td>{attendeceinfo.SKDt1}</td>
                    <td className='test2_th'>{attendeceinfo.SKDt2}</td>
                </tr>
            </table>  
     
        </div>
        </div>
    ) 
}

export default PerformenceDetails
