import React, { useState } from 'react'
import './post.css'
import { MoreVert } from "@mui/icons-material"
import { Users } from '../../Data'

export default function Post({post}) {
    const [like,setLike]= useState(post.like);
    const [isLiked,setIsLiked]= useState(false);

    const likeHendler = () => {
        setLike(isLiked? like-1: like+1)
        setIsLiked(!isLiked)
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" />
                    <span className="postUserName">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert className='postIcon'/>
                </div>

            </div>
            <div className="postCenter">
                <span className="postText">
                   {post?.desc} 
                </span>
                <img className='postImg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" onClick={likeHendler} alt="" />
                <img className="likeIcon" src="/assets/heart.png" onClick={likeHendler} alt="" />
                <span className="postLikeCounter">{like} ljudi je lajkovalo ovaj post</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} komentara</span>
                </div>
            </div>
        </div>
    </div>
  )
}
