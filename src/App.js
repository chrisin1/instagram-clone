import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from "./firebase";
import { query, collection, addDoc, getDocs, onSnapshot } from "firebase/firestore"; 

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "posts"));
      const update = onSnapshot(q, (querySnapshot) => {
        setPosts(querySnapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data()
        })))

      })
    }
    fetchData()

  }, [])
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
          posts.map(({id, post}) => (
            <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
          ))
        }

    </div>
  );
}

export default App;
