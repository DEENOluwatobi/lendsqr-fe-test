import React, {useState} from 'react'
import "./login.scss"
import Logo from "../../images/logo.png"
import Svg from "../../images/login.svg"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const users = [{
        username: "Adedeji",
        password: "password"    
    }];
    const handleSubmit = (e) =>{
        e.preventDefault()
        const account = users.find((user) => user.username);
        if(account.username === username && account.password === password){
            setAuthenticated(true)
            localStorage.setItem(authenticated, true);
            navigate("/dashboard");
        }
    }

    const [state, setState] = useState(false);
    
    const toggleBtn = () => {
        setState(prevState => !prevState);  
    }

  return (
    <div>
        <main className="body">
            <div className='cont'>

                <div className="head">
                    <img className="logo" src={Logo} alt="logo" />
                </div>

                <div className="container">
                    <div className="svg">
                        <img className="img-svg" src={Svg} alt="svg" />
                    </div>
                    
                    <form onSubmit={handleSubmit} >
                        <h2>Welcome!</h2>
                        <p className='sub'>Enter details to login</p>
                        <div className="box">
                            <input 
                                className='email-con' 
                                type="text" 
                                name='username' 
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
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <h5 id='show' onClick={toggleBtn}>{state ? "HIDE" : "SHOW"}</h5>
                        </div>
                        <p className='fgt'>FORGOT PASSWORD?</p>
                        <input type='submit' className='button' value="LOG IN"/>
                    </form>   
                </div>
            </div>    
        </main>
    </div>
  )
}

export default Login