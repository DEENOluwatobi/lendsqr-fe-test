import React from 'react'
import "./header.scss"
import Logo from "../../../../images/logo.png"
import Profile from "../../../../images/profile.jpg"
import { ArrowDropDown, NotificationsNone, Search } from '@mui/icons-material'

const Header = () => {
  return (
    <div>
        <div className="topbar">
            <div className="left">
                <img className="logo" src={Logo} alt="logo" />
                <div className="searchbar">
                    <input className="search" type="text" placeholder='Search for anything'/>
                    <div className="search-con">
                        <Search className="search-icon"/>
                    </div>    
                </div>
            </div>
            <div className="right">
                <p className='docs'>Docs</p>
                <NotificationsNone className="bell"/>
                <img className="profile" src={Profile} alt="profile" />
                <h5 className="user">Adedeji</h5>
                <ArrowDropDown className="arrowdown"/>
            </div>    
        </div>
    </div>
  )
}

export default Header