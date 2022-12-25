import React from 'react'
import "./Header.css"
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../projects/src/logo.png';
import {useEffect,useState} from 'react';




function Header() {
  const [profileinfo ,setProfileinfo] = useState(String)
  useEffect (() =>{
      const fetchprofileinfo = async () =>{
          const res = await fetch('/project/home/profile/63a4e5bba56d37a9b2b3714b')
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
