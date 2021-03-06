import React from 'react'
import "./Post.css"
import {Avatar} from "@mui/material"
function Post({ key, username, caption, imageUrl }) {
  return (
    <div className="post">
        {/* header-> avatar + username */}
        <div className='post__header'>
            <Avatar
                className="post__avatar"
                alt="topher.in"
                src="static/images/avatar/1.jpg"
            />
            <h3>{username}</h3>
        </div>

        <img className="post__image" src= {imageUrl} alt=""></img>
        <h4 className='post__text'><strong>{username}</strong> {caption}</h4>
    </div>
  )
}

export default Post