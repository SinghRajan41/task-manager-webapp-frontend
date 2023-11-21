import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
function SignUp(props) {
  const [userId, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isInputBoxHovered, setIsInputBoxHovered] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    let obj = { userId: userId, password: password };
    Axios.post("http://localhost:4000/add-user", obj)
      .then((res) => {
        if (res.status === 200) {
          alert("User added sucessfully");
          props.getUserId(userId);
          navigate("/task-list");
        }
      })
      .catch((err) => alert(err));
  }
  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      class="outer-container"
    >
      <div
        onMouseOver={() => setIsInputBoxHovered(true)}
        onMouseOut={() => setIsInputBoxHovered(false)}
        class="input-section"
      >
        <form onSubmit={handleSubmit}>
          <h1 style={{ fontFamily: "fanatsy" }}>TASK MANAGER</h1>

          <br></br>
          <br></br>
          <table>
            <tr>
              <td>
                <label for="name" style={{ fontSize: "25px" }}>
                  &nbsp;USER ID &nbsp;:
                </label>
              </td>
              <td>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  id="userId"
                  onChange={(e) => setName(e.target.value)}
                  class="input-feilds"
                />
              </td>
            </tr>
            <br></br>
            <tr>
              <td>
                <label for="pwd" style={{ fontSize: "25px" }}>
                  Password :
                </label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  class="input-feilds"
                  style={{ marginLeft: "20px" }}
                />
              </td>
            </tr>
            <br></br>
            <br></br>
          </table>
          <input type="submit" value="CREATE  USER" id="submit-button" />
        </form>
      </div>

      <div class="login-section">
        Already have an account? Click <Link to="/login">here</Link> to log in
      </div>
    </div>
  );
}

export default SignUp;
