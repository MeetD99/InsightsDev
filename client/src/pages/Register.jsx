import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [file, setFile] = useState(null);

  const [err, setError] = useState(null);
  const navigate = useNavigate();

  


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


  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      await axios.post("/auth/register", {
        username,
        email,
        password,
        img: file? imgUrl : ""
      });
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={(e)=>setUsername(e.target.value)}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          name="profileImage"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
