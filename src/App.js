import React, { useState } from 'react';
import './App.css';
import Post from './Post';
function App() {
  const [posts, setPosts] = useState([
    {
      username: "topher",
      caption: "ayy",
      imageUrl: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
    },
    {
      username: "bubba",
      caption: "dink",
      imageUrl: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
    }
  ]);

  return (
    <div className="App">
        <div className='app__header'>
          <img
            className='app__headerImage'
            alt=""
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          />
        </div>
        <h1>YuHHH</h1>

        {/* Posts */}
        {
          posts.map(post => (
            <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
          ))
        }

    </div>
  );
}

export default App;
