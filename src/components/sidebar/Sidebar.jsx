import React from 'react'
import "./sidebar.css"
import {RssFeed,Event,Chat,School,PlayCircleFilledOutlined,WorkOutline,Group,Bookmark,HelpOutline} from "@mui/icons-material"
import { Users } from '../../Data'
import CloseFrined from '../closeFrineds/CloseFrined'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videi</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Grupe</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Pitanja</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Poslovi</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Dogadjaji</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Kursevi</span>
          </li>
        </ul>
        <button className='sidebarButton'>Prikazi jos</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
          {Users.map(u => (
            <CloseFrined key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}
