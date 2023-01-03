import React from 'react'
import "./user.scss"
import Header from '../../Header/header'
import Menu from '../../Menu/menu'
import { AccountBalanceOutlined, DescriptionOutlined, Groups2Outlined, PeopleAltOutlined } from '@mui/icons-material'
import Userlist from './userlist'

const User = () => {
  return (
    <div>
      <Header/>
      <div className="main-con">
        <Menu/>

        <div className="user-con">
          <p className='user-title'>Users</p>

          <div className="user-boxes">
            <div className="box">
              <div className="u-icon i-one"><PeopleAltOutlined/></div>
              <p className="user-head">USERS</p>
              <h2>2,453</h2>
            </div>
            <div className="box">
            <div className="u-icon i-two"><Groups2Outlined/></div>
              <p className="user-head">ACTIVE USERS</p>
              <h2>2,453</h2>
            </div>
            <div className="box">
              <div className="u-icon i-three"><DescriptionOutlined/></div>
              <p className="user-head">USERS WITH LOANS</p>
              <h2>12,453</h2>
            </div>
            <div className="box">
              <div className="u-icon i-four"><AccountBalanceOutlined/></div>
              <p className="user-head">USERS WITH SAVINGS</p>
              <h2>102,453</h2>
            </div>
          </div>

          <Userlist/>
        </div>
      </div>  
    </div>
  )
}

export default User