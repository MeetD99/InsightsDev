import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const User = () => {
    const [posts, setPosts] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [file, setFile] = useState(null);
    const [err, setError] = useState(null);

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    const { currentUser, setCurrentUser } = useContext(AuthContext);

    const upload = async () => {
        try {
          const formData = new FormData();
          formData.append("file", file);
          const res = await axios.post("/upload", formData);
          return res.data;
        } catch (err) {
          console.log(err);
        }
      };

      const handleUpdate = async (e) => {
        e.preventDefault();
        const imgUrl = await upload();
    
        try {
          await axios.put("/users", {
            
            img: file? imgUrl : "",
            uid: currentUser.id
          });

          setCurrentUser({
            ...currentUser,
            img: imgUrl
            });
        } catch (err) {
          setError(err.response.data);
        }
      };

    useEffect(() => {
        
            const fetchData = async () => {
                try {
                    const res = await axios.get(`/users/${currentUser.id}`); // Update the URL
                    const res2 = await axios.get(`/bookmarks/${currentUser.id}`);
                    setBookmarks(res2.data);
                    setPosts(res.data);
                } catch (err) {
                    console.log(err);
                }
            };
        fetchData();
        
    }, []);
  
  
    return (
    <div className='user'>
        <div className="user-info">
            <div className="image">
                <img src={`../upload/${currentUser.img}`} alt="" />
            </div>
            <div className="info">
                <div className="user-details">
                    <h1 className='username'>@{currentUser.username}</h1>
                    <span>{currentUser.email}</span>
                </div>
                
                <div className="update-pp">
                    <input 
                        type='file'
                        accept= "image/*"
                        name=""
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button onClick={handleUpdate}>Update Profile Picture</button>
                </div>
                
            </div>
            
        </div>
        <div className="user-bookmarks">
            <h2>My Bookmarks</h2>
            <div className="bookmarks">
                    {bookmarks.map((bookmark) => (
                        <div key={bookmark.id}>
                            <Link className="link bookmark-info" to={`/post/${bookmark.id}`}>
                                <span role="img" aria-label="Bookmark">🔖</span>
                                <h3>{bookmark.title}</h3>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
        <div className="user-posts">
            <h2>My Posts</h2>
        <div className="posts">
            {posts.map((post) => (
            <div className="post" key={post.id}>
                <div className="img">
                    <img src={`../upload/${post.img}`} alt="" />
                    </div>
                    <div className="content">
                    <Link className="link" to={`/post/${post.id}`}>
                        <h1>{post.title}</h1>
                    </Link>
                    <p>{getText(post.desc)}</p>
                    <Link className="link" to={`/post/${post.id}`}>
                        <button>Read More</button>
                    </Link>
                
                </div>
            </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default User