import React from 'react'
import "./menu.scss"
import { BusinessCenter, Cyclone, Equalizer, GroupsRounded, Handshake, House, HowToReg, Inventory, KeyboardArrowDown, 
    Layers, ManageAccounts, MenuBook, MonetizationOn, PeopleAltRounded, Percent, PersonOff, Receipt, 
    ReceiptLong, RequestQuote, Savings, Tune} from "@mui/icons-material"
import { Outlet, Link } from "react-router-dom"    

const Menu = () => {
  return (
    <div>
        <div className="menu">
            <div className="title"><BusinessCenter/> Switch Organization <KeyboardArrowDown/></div>
            <Link className="dash-btn" to="/home" ><House/> Dashboard </Link>
            
            <div className="menu-con">
                <div className='dash-head'>CUSTOMERS</div>
                <Link className="dash-btn" to="/user" ><PeopleAltRounded/> Users </Link>
                <div className="dash-btn"><GroupsRounded/> Guarantors </div>
                <div className="dash-btn"><MonetizationOn/> Loans </div>
                <div className="dash-btn"><Handshake/> Decison Models </div>
                <div className="dash-btn"><Savings/> Savings </div>
                <div className="dash-btn"><RequestQuote/> Loan Request </div>
                <div className="dash-btn"><HowToReg/> Whitelist </div>
                <div className="dash-btn"><PersonOff/> Karma </div>
            </div>

            <div className="menu-con">
                <div className='dash-head'>BUSINESSES</div>
                <div className="dash-btn"><BusinessCenter/> Organization </div>
                <div className="dash-btn"><RequestQuote/> Loan Products </div>
                <div className="dash-btn"><Inventory/> Saving Products </div>
                <div className="dash-btn"><Layers/> Fees and Charges </div>
                <div className="dash-btn"><Receipt/> Transactions </div>
                <div className="dash-btn"><Cyclone/> Services </div>
                <div className="dash-btn"><ManageAccounts/> Services Account </div>
                <div className="dash-btn"><ReceiptLong/> Settlements </div>
                <div className="dash-btn"><Equalizer/> Reports </div>
            </div>

            <div className="menu-con">
                <div className='dash-head'>SETTINGS</div>
                <div className="dash-btn"><Tune/> Preferences </div>
                <div className="dash-btn"><Percent/> Fees and Pricing </div>
                <div className="dash-btn"><MenuBook/> Audit Logs </div>
            </div>

        </div>
        <Outlet/>
    </div>
  )
}

export default Menu