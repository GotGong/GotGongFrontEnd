import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  // 수정 - 진혁
  // userid, password, username, email
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const useridHandler = (e) => {
    setUserid(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  }
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const post = () => {
    axios
      .post("http://localhost:8000/user/signup/", {
        userid: userid,
        password: password,
        username: username,
        email: email,
      })
      .then((response) => {
        console.log(response.data);
        // if (response.data.code == 0) {
        //   setPopup({
        //     open: true,
        //     title: "Confirm",
        //     message: "Join Success!",
        //     callback: function () {
        //       navigate("/login");
        //     },
        //   });
        // } else {
        //   let message = response.data.message;
        //   if (response.data.code == 10000) {
        //     message = "User ID is duplicated. Please enter a different User ID. ";
        //   }
        //   setPopup({
        //     open: true,
        //     title: "Error",
        //     message: message,
        //   });
        // }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const submit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 다릅니다");
    }
  };

  return (
    <>
      <form>
        <div>
          <input
            name="userid"
            type="text"
            placeholder="userid"
            value={userid}
            onChange={useridHandler}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={passwordHandler}
          />
        </div>
        <div>
          <input
            name="confirmPassword"
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={confirmPasswordHandler}
          />
        </div>
        <div>
          <input
            name="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={usernameHandler}
          />
        </div>
        <div>
          <input
            name="email"
            type="text"
            placeholder="email"
            value={email}
            onChange={emailHandler}
          />
        </div>
      </form>
      <div>
        <button name="signUpButton" onClick={post}>
          회원가입
        </button>
      </div>
    </>
  );
}

export default SignUp;
