import React from 'react'
import "./Login.css"
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import InstagramIconlog from '@mui/icons-material/Instagram';
import FacebookIconllog from '@mui/icons-material/Facebook';
import shadows from '@mui/material/styles/shadows';
import Logo from '/home/kush/Desktop/projects/src/logo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIconforlog from '@mui/icons-material/GitHub';

import {useLogin} from './hooks/useLogin'
import {useEffect,useState} from 'react';


const Login=() =>{
    const [user,setUser] = useState('')
    const [password, setPassword] = useState('')
    const {login,error,isLoading} = useLogin()

    const handleSubmit = async(e) =>{

        e.preventDefault()

        console.log(user,password)
        const res = await login(user,password);
       
      
       
       
      

    }
   
    
  
    


    return (
        <div className="container">
            
                <div className='cnt-head'>
             
                    <div className='icons'>
                     <div className="ins-icon">
                           <a  href="/"><InstagramIconlog  sx={{fontSize:"30px"}}/></a>
                     </div>
                      <div className="fb-icon">
                       <a  href="www.facebook.com"><FacebookIconllog sx={{fontSize:"30px"}}/></a>
                      </div>
                      <div className="lkdin-icon">
                           <a  href="www.linkedin.com"><LinkedInIcon sx={{fontSize:"30px"}}/></a>
                      </div>
                      <div className="git">
                           <a  href="https://github.com/galinandish/ims"><GitHubIconforlog sx={{fontSize:"30px"}}/></a>
                      </div>
                </div>
                </div>
        
         
            <form id="form" onSubmit={handleSubmit}> 
           <a href="https://ssit.edu.in/"><img src={Logo} className="Logo" alt="logo" /></a>
            <h1>Sign in to Site</h1>         
                <div className="input-ctrl">
                    <label className="username"><PersonIcon style={{background:'#ffff'}} />&nbsp;</label>
                    <input id="username" name="username1" onChange={(e)=>setUser(e.target.value)} value={user} type="text" placeholder="username" required></input>
                </div>
                <div className="input-ctrl">
                    <label className="password"><LockIcon style={{background:'#ffff'}}/>&nbsp;</label>
                    <input id="password" name="password"   type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="password" required></input>
                </div>
             
                <a  className="frt-pass"  href="/">forgot password?</a>   
                 <button>LOGIN </button>
                 {error &&<div className='error'>{error}</div>}
           
             </form>
               
            </div>

           
    )


}

export default Login
