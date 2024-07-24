import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <div className="loginLogo">FriendHub</div>
            <span className="loginDesc">Povežite se sa prijateljima oko Vas uz pomoć FriendHub-a!</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <Link to='/home' className='loginLink '>
                <button className="loginButton">Log In</button>
                </Link>
                <span className="loginForgot">Zaboravili ste šifru?</span>
                <Link to='/register' className='loginLink'>
                  <button className="loginRegisterButton">Napravite nov nalog</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
