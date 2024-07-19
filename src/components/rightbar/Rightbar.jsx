import React from 'react'
import "./rightbar.css"

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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgConatiner">
              <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Marko Markovic</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgConatiner">
              <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Marko Markovic</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgConatiner">
              <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Marko Markovic</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgConatiner">
              <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Marko Markovic</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
