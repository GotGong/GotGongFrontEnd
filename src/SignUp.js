import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const post = () => {
    axios
      .post("http://localhost:8000/user/signup/", {
        userid: id,
        password: password,
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

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const idHandler = (e) => {
    setId(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
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
            name="name"
            type="text"
            placeholder="이름"
            value={name}
            onChange={nameHandler}
          />
        </div>
        <div>
          <input
            name="id"
            type="id"
            placeholder="아이디"
            value={id}
            onChange={idHandler}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
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
