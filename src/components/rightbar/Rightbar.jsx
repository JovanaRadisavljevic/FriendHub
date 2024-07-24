import React from 'react'
import "./rightbar.css"
import { Users } from '../../Data'
import Online from '../online/Online'

export default function Rightbar({profile}) {
  const HomeRightBar = () => {
    return (
      <>
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
      </>
    )
  }
  const ProfileRightbar = () =>{
    return(
      <>
      <h4 className='rightbarTitle'>Informacije o korisniku:</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Grad:</span>
          <span className="rightbarInfoValue">Kruševac</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Država:</span>
          <span className="rightbarInfoValue">Srbija</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Zanimanje:</span>
          <span className="rightbarInfoValue">Frontend developer</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>Prijatelji</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className='rightbarFollowinfImg' src="/assets/person/2.jpeg" alt="" />
          <span className="rightbarFollowingName">Filip Filipovic</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowinfImg' src="/assets/person/3.jpeg" alt="" />
          <span className="rightbarFollowingName">Vanja Radic</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowinfImg' src="/assets/person/4.jpeg" alt="" />
          <span className="rightbarFollowingName">Lena Lekic</span>
        </div>
        <div className="rightbarFollowing">
          <img className='rightbarFollowinfImg' src="/assets/person/5.jpeg" alt="" />
          <span className="rightbarFollowingName">Ana Saric</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrappper">
       <ProfileRightbar/>
      </div>
    </div>
  )
}
