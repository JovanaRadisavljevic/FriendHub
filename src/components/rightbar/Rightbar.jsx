import React from 'react'
import "./rightbar.css"
import { Users } from '../../Data'
import Online from '../online/Online'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrappper">
        <div className="birthdayConatiner">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="dirthdayText"><b>Tanja Savic</b> i jos <b>tri prijatelja</b> danas slave rodjendan.</span>
        </div>
        <img className='rightbarAd' src="/assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online prijatelji</h4>
        <ul className="rightbarFriendList">
         {Users.map(u=>(
          <Online key={u.id} user={u} />
         ))}
        </ul>
      </div>
    </div>
  )
}
