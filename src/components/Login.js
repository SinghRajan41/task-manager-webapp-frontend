import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Login.css';
function Login(props) {
  const [userId, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const url = "http://localhost:4000/users/" + userId;
    Axios
      .get(url)
      .then((res) => {
        console.log(res);
        if (!res.data) {
          alert("User does not exist");
        } else if (res.data.password !== password) {
          alert("Incorrect Password");
        } else {
          props.getUserId(userId);
          navigate("/task-list");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div class = "container">
      <form onSubmit={handleSubmit} id = "form1">
        <h1 id = "heading1" > LOGIN FORM</h1>
        <div class = "inputSection">
          <label for="userId">
            Username
          </label>
          <input
            type="text"
            id="userId"
            onChange={(e) => setName(e.target.value)}
            className="m-3"
          />
          <br />
          <label for="pwd" >
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="m-3"
          />
          <br />
          <input type="submit" />
        </div>
        <div >
          New here? Click <Link to="/">here</Link> to sign up
        </div>
      </form>
    </div>
  );
}

export default Login;