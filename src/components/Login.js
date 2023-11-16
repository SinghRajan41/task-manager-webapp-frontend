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
    <div class="login-container">


      <div class="login-input-section">
        <form onSubmit={handleSubmit} id="form1">
          <h1> LOGIN FORM</h1>
          <br></br>
          <table>
            <tr>
              <td><label for="userId">  Username  </label></td>
              <td><input type="text" id="userId" onChange={(e) => setName(e.target.value)} class = "login-input-feilds" /></td>
            </tr>
            <tr>
              <td><label for="pwd" >  Password  </label></td>
              <td><input type="password" id="pwd" onChange={(e) => setPassword(e.target.value)} class = "login-input-feilds" /></td>
            </tr>
          </table>
          <br></br>
          <br></br>
          <input type="submit" id="login-button" value="LOGIN" />
        </form>
      </div>


      <div class = "signup-redirect">
        New here? Click &nbsp;<Link to="/">here</Link> &nbsp;to sign up
      </div>


    </div>
  );
}

export default Login;