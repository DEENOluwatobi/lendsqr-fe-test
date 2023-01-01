import React, {useState} from 'react'
import "./login.scss"
import Logo from "../../images/logo.png"
import Svg from "../../images/login.svg"
import Dashboard from "../Dashboard/dashboard"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const users = [{
        username: "Tobi",
        password: "password"    
    }];
    const handleSubmit = (e) =>{
        e.preventDefault()
        const account = users.find((user) => user.username);
        if(account && account.password === password){
            setAuthenticated(true)
            localStorage.setItem("authenticated", true);
        }
    }

    const [state, setState] = useState(false);
    
    const toggleBtn = () => {
        setState(prevState => !prevState);  
    }

  return (
    <div>
        <body>
            <div className='con'>
                <div className="header">
                    <img className="logo" src={Logo} alt="logo" />
                </div>
                <div className="container">
                    <div className="svg">
                        <img className="img-svg" src={Svg} alt="svg" />
                    </div>
                    <div onSubmit={handleSubmit} className="form">
                        <h2>Welcome!</h2>
                        <p className='sub'>Enter details to login</p>
                        <div className="box">
                            <input 
                                className='email-con' 
                                type="text" 
                                name='Username' 
                                value={username} 
                                placeholder="Email" 
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="box">
                            <input 
                                id='pwd' 
                                className='password-con' 
                                type={state ? "text" : "password"} 
                                placeholder="Password" 
                                name='Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <h5 id='show' onClick={toggleBtn}>{state ? "HIDE" : "SHOW"}</h5>
                        </div>
                        <p className='fgt'>FORGOT PASSWORD?</p>
                        <button type='submit' value="Submit">LOG IN</button>
                    </div>   
                </div>
            </div>    
        </body>
    </div>
  )
}

export default Login