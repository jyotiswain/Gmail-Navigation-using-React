import React from "react";
import './Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import NavContents from "./NavContents";
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Nav() {

    return (
        <div className="nav_container">
            <div className="nav_left">
            <MenuIcon/>
                <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="" />
                
                <div className="search_box">
                    <SearchIcon />
                    <input type="text" placeholder="Search Mail" />
                </div>

            </div>
            <div className="nav_right">
                <NavContents Icon={HelpIcon} />
                <NavContents Icon={SettingsIcon} />
                <NavContents Icon={AppsIcon} />
                <NavContents Icon={NotificationsIcon} />
                <NavContents avatar/>
            </div>
        </div>
        
    )
}

export default Nav;