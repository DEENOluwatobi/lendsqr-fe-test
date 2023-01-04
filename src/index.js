import React from 'react';
import { BrowserRouter,Route, Routes  } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from "./Components/Login/login"
import Dashboard from "./Components/Dashboard/dashboard"
import User from './Components/Dashboard/Dash-sub/Body/User/user.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element = {<App/>} />
        <Route path = "login" element = {<Login/>} />
        <Route exact path = "dashboard" element = {<Dashboard/>} />
      </Routes>
    
      <Routes>
        <Route exact path = "/home" index element = {<Dashboard/>} />
        <Route exact path = "/user" element = {<User/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)