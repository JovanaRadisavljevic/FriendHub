import React from 'react'
import './login.css'

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
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Zaboravili ste šifru?</span>
                <button className="loginRegisterButton">Napravite nov nalog</button>
            </div>
        </div>
      </div>
    </div>
  )
}
