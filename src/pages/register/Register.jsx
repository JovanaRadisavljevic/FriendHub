import React from 'react'
import './register.css'

export default function Register() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <div className="loginLogo">FriendHub</div>
            <span className="loginDesc">Povežite se sa prijateljima oko Vas uz pomoć FriendHub-a!</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Username" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password again" className="loginInput" />
                <button className="loginButton">Sign up</button>
            </div>
        </div>
      </div>
    </div>
  )
}
