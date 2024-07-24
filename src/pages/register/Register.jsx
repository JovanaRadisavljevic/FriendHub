import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

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
                <input placeholder="Password" className="loginInput" />
                <Link to='/home' className="loginLink">
                <button className="loginButton">Sign up</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
