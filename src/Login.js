import React, { useState } from "react";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idHandler = (e) => {
    setId(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form>
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
      </form>
      <div>
        <button name="loginButton" type="submit" onSubmit={submit}>
          로그인
        </button>
      </div>
    </>
  );
}

export default Login;
