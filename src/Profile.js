import React from 'react'
import "./Profile.css"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {useEffect,useState} from 'react';


function Profile() {
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
  
    

    
    return (
        <div className="profile">
    
            <div className="myprofile">
    

                
                <AccountCircleOutlinedIcon sx={{ fontSize: "35px" }} className="my_profile"/><label>My Profile</label>
            </div>    
            <div className="profile_body">
            
                <p >{attendeceinfo.DatabaseManagementSystemheld}</p>
          
                <div className="first_row">
                    <div className="first_text">
                        <label>First Name :</label>
                        <input type="text" name="firstname" value={profileinfo.fname} disabled></input>
                        
                     </div>
                    <div className="second_text">
                        <label>Middle  Name :</label>
                        <input type="text" value={profileinfo.mname} name="firstname" disabled></input>
                    </div>
                </div>
                <div className="second_row">
                    <div className="third_text">
                        <label>Admission Number:</label>
                        <input type="text" value={profileinfo.admNo}name="firstname" disabled></input>
                    </div>
                    <div className="fourth_text">
                        <label>Exam Number :</label>
                        <input type="text" value={profileinfo.ExamNo} name="firstname" disabled></input>
                    </div>  
                </div> 
                <div className="third_row">
                    <div className="fifth_text">
                        <label>Roll No :</label>
                        <input type="text" value={profileinfo.rollNo} name="firstname" disabled></input>
                    </div>
                    <div className="sixth_text">
                        <label>Course Details :</label>
                        <input type="text" value={profileinfo.courseDetails} name="firstname" disabled></input>
                    </div>  
                </div> 
                <div className="fourth_row">
                    <div className="seventh_text">
                        <label>Date-Of-Birth :</label>
                        <input type="text" value={profileinfo.DOB} name="firstname" disabled></input>
                    </div>
                    <div className="eighth_text">
                        <label>E-Mial:</label>
                        <input type="text" value={profileinfo.mail} name="firstname" disabled></input>
                    </div>  
                    <div className="ninth_text">
                        <label>Blood Group :</label>
                        <input type="text" value={profileinfo.bloodGrp} name="firstname" disabled></input>
                    </div>  
                </div>
                <div className="fifth_row">
                    <div className="tenth_text">
                        <label>Adhar Number :</label>
                        <input type="text" value={profileinfo.AdrNo} name="firstname" disabled></input>
                    </div>
              
                </div>
              
            </div>
          
        </div>
        
      
              
     
    )
}

export default Profile
