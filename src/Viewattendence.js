import React from 'react'
import './Viewattendence.css'
import {useEffect,useState} from 'react';
import Viewattendenceimg from './images/Viewattendence.png';
const math = require('./mathjs')


function Viewattendence() {
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
    
    return (

        
        <div className="View_attendence">
            <img src ={Viewattendenceimg}  className="Viewattendenceimg" height={60} width={50}></img>
            <h2>View Attendence</h2>
            <div className="top_div">
                <div className="top_div_info">
                    <h1>{profileinfo.fname}&nbsp;{profileinfo.mname}</h1>
                </div>
            </div>

             <div className="table_info">
                 <table >
                    <tr>
                     <th colSpan='3' className="first_col">Database Management System</th>
                    </tr>
                    <tr>
                     <th className='second_col' >Held</th>
                     <th className='second_col'>Present</th>
                     <th className='second_col'>Pecentage</th>
                    </tr>
                    <tr>
                     <th className='third_col' >{attendeceinfo.DatabaseManagementSystemheld}</th>
                     <th className='third_col'>{attendeceinfo.DatabaseManagementSystemPresent}</th>
                     <th className='third_col'>{math.round(attendeceinfo.DatabaseManagementSystemPresent / attendeceinfo.DatabaseManagementSystemheld*100)}%</th>
                    </tr>
                    
                </table>
                <table >
                    <tr>
                     <th colSpan='3' className="fourth_col">Data Communication</th>
                    </tr>
                    <tr>
                     <th className='fifth_col' >Held</th>
                     <th className='fifth_col'>Present</th>
                     <th className='fifth_col'>Pecentage</th>
                    </tr>
                    <tr>
                     <th className='third_col' >{attendeceinfo.DataCommunicationheld}</th>
                     <th className='third_col'>{attendeceinfo.DataCommunicationPresent}</th>
                     <th className='third_col'>{math.round(attendeceinfo.DataCommunicationPresent /attendeceinfo.DataCommunicationheld*100 )}%</th>
                    </tr>
                    
                </table>
                <table >
                    <tr>
                     <th colSpan='3' className="fourth_col">Web Technologies</th>
                    </tr>
                    <tr>
                     <th className='fifth_col' >Held</th>
                     <th className='fifth_col'>Present</th>
                     <th className='fifth_col'>Pecentage</th>
                    </tr>
                    <tr>
                     <th className='third_col' >{attendeceinfo.WebTechheld}</th>
                     <th className='third_col'>{attendeceinfo.WebTechPresent}</th>
                     <th className='third_col'>{math.round(attendeceinfo.WebTechPresent /attendeceinfo.WebTechheld*100 )}%</th>
                    </tr>
                </table>
                <table >
                    <tr>
                     <th colSpan='3' className="sixth_colum">Object Oriented Modeling And Design</th>
                    </tr>
                    <tr>
                     <th className='fifth_col' >Held</th>
                     <th className='fifth_col'>Present</th>
                     <th className='fifth_col'>Pecentage</th>
                    </tr>
                    <tr>
                     <th className='seventh_col' >{attendeceinfo.ObjectOrientedModelingheld}</th>
                     <th className='seventh_col'>{attendeceinfo.ObjectOrientedModelingheldPresent}</th>
                     <th className='seventh_col'>{math.round(attendeceinfo.ObjectOrientedModelingheldPresent /attendeceinfo.ObjectOrientedModelingheld*100 )}%</th>
                    </tr>
                </table>
                <table >
                    <tr>
                     <th colSpan='3' className="fourth_col">Unix System Programming</th>
                    </tr>
                    <tr>
                     <th className='fifth_col' >Held</th>
                     <th className='fifth_col'>Present</th>
                     <th className='fifth_col'>Pecentage</th>
                    </tr>
                    <tr>
                     <th className='third_col' >{attendeceinfo.UnixSystemPrgheld}</th>
                     <th className='third_col'>{attendeceinfo.UnixSystemPrgPresnt}</th>
                     <th className='third_col'>{math.round(attendeceinfo.UnixSystemPrgPresnt /attendeceinfo.UnixSystemPrgheld*100 )}%</th>
                    </tr>
                </table>
                <table >
                    <tr>
                     <th colSpan='3' className="fourth_col">Skill Development 111</th>
                    </tr>
                    <tr>
                     <th className='fifth_col' >Held</th>
                     <th className='fifth_col'>Present</th>
                     <th className='fifth_col'>Pecentage</th>
                    </tr>
                    <tr>
                     <th className='third_col' >{attendeceinfo.SkillDevheld}</th>
                     <th className='third_col'>{attendeceinfo.SkillDevPresent}</th>
                     <th className='third_col'>{math.ceil(attendeceinfo.SkillDevPresent /attendeceinfo.SkillDevheld*100 )}%</th>
                    </tr>
                </table>
                <table >
                    <tr>
                     <th colSpan='3' className="first_col">Database Management System Lab</th>
                    </tr>
                    <tr>
                     <th className='lab1_col' >Held</th>
                     <th className='lab1_col'>Present</th>
                     <th className='lab1_col'>Pecentage</th>
                    </tr>
                    <tr>
                     <th className='lab1_col1' >{attendeceinfo.DBMSlabheld}</th>
                     <th className='lab1_col1'>{attendeceinfo.DBMSlabPresent}</th>
                     <th className='lab1_col1'>{attendeceinfo.DBMSlabPresent / attendeceinfo.DBMSlabheld*100}%</th>
                    </tr>
                    
                </table>
                <table >
                    <tr>
                     <th colSpan='3' className="first_col">Web Technologies Lab</th>
                    </tr>
                    <tr>
                     <th className='lab2_col' >Held</th>
                     <th className='lab2_col'>Present</th>
                     <th className='lab2_col'>Pecentage</th>
                    </tr>
                    <tr>
                     <th className='lab2_col1' >{attendeceinfo.DBMSlabheld}</th>
                     <th className='lab2_col1'>{attendeceinfo.DBMSlabPresent}</th>
                     <th className='lab2_col1'>{attendeceinfo.DBMSlabPresent / attendeceinfo.DBMSlabheld*100}%</th>
                    </tr>
                    
                </table>
                
               
        


            </div>
            
        </div>
    )
}

export default Viewattendence
