import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import "./dashboard.scss"

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
                Welcome to your Dashboard
            </div>
         )
    }
}

export default Dashboard