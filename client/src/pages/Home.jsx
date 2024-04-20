import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { FaRegBookmark } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [bookmarked, setBookmarked] = useState({});
  const { currentUser } = useContext(AuthContext);
  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        const initialBookmarks = res.data.reduce((acc, post) => {
          acc[post.id] = false;
          return acc;
        }, {});
        setBookmarked(initialBookmarks);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);


  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  const handleBookmark = async (postId) => {
    if (bookmarked[postId]) return;
    try {
      await axios.post("/bookmarks/", {
        uid: currentUser ? currentUser.id : null,
        pid: postId,
      });
      setBookmarked((prevBookmarked) => ({
        ...prevBookmarked,
        [postId]: true,
      }));
    } catch (err) {
        console.log(err);
    }
  }

  return (
    <div className="home">
      {posts.length === 0 ? (<h1 className="no-post-text">No Posts yet!</h1>): (
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
                <div className="home-links">
                  <Link className="link" to={`/post/${post.id}`}>
                    <button>Read More</button>
                  </Link>
                  {currentUser && <button onClick={() => {handleBookmark(post.id);}}><FaRegBookmark /></button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default Home;
