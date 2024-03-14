import React from 'react'
import "./Header.css"
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../projects/src/logo.png';
import {useEffect,useState} from 'react';
import {useAuthContext }from './hooks/useAuthContext' 




function Header() {
  const [profileinfo ,setProfileinfo] = useState(String)
  const [usrdata ,setusrdata] = useState(String)
  const {user} = useAuthContext
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
    <div className="header">


      <div className="header_left">

        <img src={Logo} className="Logo" alt="logo" />
        <h2>SRI SIDDARTHA INSTITUTE OF TECHOLOGY</h2><br />
        <h5 > (A Constituent Collage of Sri Siddaratha Academy of Higher Education) </h5>

      </div>
      <div className="header_logo">
        <label className="profile_name_front">{profileinfo.fname}&nbsp;{profileinfo.mname}</label>
        <AccountCircleOutlinedIcon sx={{ fontSize: "33px" }} className="profile_icon" />
  
        <MenuIcon sx={{ fontSize: "33px" }} className="burger_icon" />
      </div>
    </div>






  )
}

export default Header
