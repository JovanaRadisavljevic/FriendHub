import React from 'react'
import './share.css'
import {PermMedia, Label,Room, EmojiEmotions} from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
        <input
          placeholder="O cemu razmisljate?"
          className="shareInput"
        />
      </div>
      <hr className="shareHr"/>
      <div className="shareBottom">
          <div className="shareOptions">
              <div className="shareOption">
                  <PermMedia htmlColor="tomato" className="shareIcon"/>
                  <span className="shareOptionText">Slika ili vide</span>
              </div>
              <div className="shareOption">
                  <Label htmlColor="blue" className="shareIcon"/>
                  <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                  <Room htmlColor="green" className="shareIcon"/>
                  <span className="shareOptionText">Lokacija</span>
              </div>
              <div className="shareOption">
                  <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                  <span className="shareOptionText">Emoji reakcija</span>
              </div>
          </div>
          <button className="shareButton">Podeli</button>
      </div>
    </div>
  </div>
  )
}
