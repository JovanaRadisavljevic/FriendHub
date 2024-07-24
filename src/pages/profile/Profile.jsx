import React from 'react'
import './profile.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Navbar from '../../components/navbar/Navbar'

export default function Profile() {
  return (
    <>
    <Navbar />
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
          <img className='profileCoverImg' src="/assets/post/3.jpeg" alt="" />
          <img className='profileUserImg' src="/assets/person/1.jpeg" alt="" />
          </div>
          <div className="profileInfo">
            <h4 className='profileInfoName'>Sanja Saric</h4>
            <span className='profileInfoDesc'>Zdravo prijatelji!</span>
          </div>
        </div>
        <div className="profileRightBottom">
           <Feed />
           <Rightbar profile/>
        </div>
      </div>
    </div>
  </>
  )
}