import React from 'react';
import { useState } from 'react';
import '../assets/css/LoginSignup.css';
import user_icon from '../assets/images/person.png';
import email_icon from '../assets/images/email.png';
import password_icon from '../assets/images/password.png';
import icon from '../assets/images/twist.png'
import layer from '../assets/images/layer.png'


const LoginSignup = () => {
    const [action,setAction]=useState("Sign Up");
  return (
    <div className="big-container">
        <img src={layer} alt="" className='layer'/>
        <div className="nav-bar">
            <div className="logo">
                <img src={icon} alt="" />
                <h3>TWIST</h3>
            </div>

        </div>

    <div className="box">
        {action==="Sign Up"?<div></div>:
        <div className="icon-container">
            <img src={icon} alt="" />
        </div>
        }
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="navigator underline-1">
            
            <div className={action==="Login"?"navigator":"navigator line"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"navigator":"navigator line"} onClick={()=>{setAction("Login")}}>Login</div>
    
            </div>
    
        
        <div className="inputs">
                {action==="Login"?<div></div>:
                
                <div className="input"> 
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' />
            </div>
                }
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
            {action==="Login"?<div></div>:
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Confirm-Password'/>
            </div>
            }
        </div>
        {action==="Sign Up"?<div></div>:
        <div className="forgot-password"><span onClick={()=>{setAction("Sign Up")}}>New user?</span></div>
        }
        <div className="submit-container">
            <div className='submit' >{action}</div>
        </div>
      
    </div>
    {action==="Login"?<div></div>:
        <div className="icon-container">
            <img src={icon} alt="" />
        </div>
        }
    </div>
    </div>
  )
}

export default LoginSignup
