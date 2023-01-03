import React from 'react'
import "./home.scss"
import "../User/user.scss"
import { AccountBalanceOutlined, DescriptionOutlined, Groups2Outlined, PeopleAltOutlined } from '@mui/icons-material'

const Home = () => {
  return (
    <div>
        <div className="home-con">
          <div className="user-con">
            <p className='user-title'>Home</p>

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
          </div>
        </div>
      </div>
  )
}

export default Home