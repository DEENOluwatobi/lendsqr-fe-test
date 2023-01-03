import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import "./dashboard.scss"
import Header from './Dash-sub/Header/header'
import Menu from './Dash-sub/Menu/menu'
import Home from "./Dash-sub/Body/Home/home"

const Dashboard = () => {

    const [authenticated, setAuthenticated] = useState("")
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);
    if (!authenticated) {
        return <Navigate replace to="/dashboard"/>
    }else{
        return (
            <div>
                <Header className="header"/>
                <div className="main-con">
                    <Menu/>
                    <Home/>
                </div>
            </div>
         )
    }
}

export default Dashboard