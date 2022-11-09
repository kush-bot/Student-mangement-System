import React from 'react'
import "./Body.css"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiEventsSharpIcon from '@mui/icons-material/EmojiEventsSharp';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';



function Body() {
    return (
        <div className="home_body">
            <div classname="home_body_icons">
                <AccountCircleOutlinedIcon className="profile" sx={{ fontSize: "50px" }} />
                <label for="profile_lbl">profile</label>
                <DashboardCustomizeOutlinedIcon className="dashboard" sx={{ fontSize: "50px" }} />
                <label for="dashboard_lbl">dashboard</label>
                <CalendarMonthIcon className="calender" sx={{ fontSize: "50px" }} />
                <label for="calender_lbl">my calender</label>
                <EmojiEventsSharpIcon className="events" sx={{ fontSize: "50px" }} />
                <label for="events_lbl">events</label>
                <CollectionsRoundedIcon className="gallery" sx={{ fontSize: "50px" }} />
                <label for="gallery_lbl">gallery</label>
                <AssignmentOutlinedIcon className="assignment" sx={{ fontSize: "50px" }} />
                <label for="assigment_lbl">my assignment</label>
                

            </div>

        </div>
    )
}

export default Body
