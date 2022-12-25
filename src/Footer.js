import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <CopyrightIcon   sx={{ fontSize: "25px" }} /> <label className="lbl">all rights reserved</label> 
            </div>
            <a href="https://github.com/kush-bot/Projectrepo">
            <div className="footer_right">
                <GitHubIcon sx={{ fontSize: "35px" }} />
            
            </div>
            </a>
        </div>
        
    )
}

export default Footer
