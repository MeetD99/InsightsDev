import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";
import { AiOutlineLike } from "react-icons/ai"

const Single = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const [desc, setDesc] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        const res2 = await axios.get(`/comments/${postId}`);
        const res3 = await axios.get(`/likes/${postId}`);
        
        setPost(res.data);
        setComments(res2.data);
        setLikes(res3.data);
        
        const isLikedByCurrentUser = res3.data.some(like => like.uid_likes === currentUser?.id);
        console.log(isLikedByCurrentUser + " liked or not");
        setLiked(isLikedByCurrentUser);

      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId, currentUser]);

  const handleComment = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post("/comments/", {
        desc,
        uid: currentUser? currentUser.id: null,
        pid: postId
      });

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  const handleLike = async () => {
    if (liked) return;
    try {
      await axios.post("/likes/", {
        uid: currentUser? currentUser.id:null,
        pid: postId
      })
      setLiked(true);
      window.location.reload();
    } catch (err) {
        console.log(err);
    }
  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          {post.userImg && <img
            src={`../upload/${post.userImg}`}
            alt=""
          />}
          {post.username && <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>}
          {currentUser && currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>    
        
        <div className="comments"> 
          <h2><span id="like-text">Likes</span> and <span id="comment-text">Comments</span></h2>
          {currentUser && <div className="comment-input"><button onClick={handleLike}><AiOutlineLike /></button><input type="text" className="comment-input-field" placeholder="Comment here" onChange={(e)=> setDesc(e.target.value)}></input>
          <button onClick={handleComment}>Post</button></div>}
          <div className="likes-and-comments">
              <div className="all-likes">
                {likes.map((like) => (
                  <div className="like-info" key={like.id}>
                    <span>Liked By @{like.username}</span>
                  </div>
                ))}
              </div>
              <div className="all-comments">
                  {comments.map((comment) => (
                    <div className="comment-info" key={comment.id}>
                      <span><strong>@{comment.username}</strong></span>
                      <p>{comment.desc}</p>
                    </div>
                  ))}
              </div>
          </div>
            
        </div>  
      </div>
      <Menu cat={post.cat}/>
    </div>
  );
};

export default Single;
