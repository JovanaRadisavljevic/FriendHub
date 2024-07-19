import React from 'react'
import './closeFriend.css'

export default function CloseFrined({user}) {
  return (
    <div>
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src={user.profilePicture} alt="" />
        <span className="sidebarFrinedName">{user.username}</span>
    </li>
    </div>
  )
}
