import React, { useState } from "react";
import signInAPI from "../API/signInAPI";

function SignInPage({setToken}) {
  
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  const useridHandler = (e) => {
    setUserid(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 버튼 클릭
  const signIn = () => {
    // signUpAPI 실행
    // input: userid, password, username, email
    // return: 성공 시, Token 값(문자열), 실패 시, ''
    signInAPI(userid, password)
    .then((response) => {
      if (response !== '') {
        setToken(response);
        setUserid('');
        setPassword('');
      }
      else {
        alert('로그인 실패!!!');
        setUserid('');
        setPassword('');
      }
    })
  }

  return (
    <div className="PageContainer">
      <h1>SignInPage입니다.</h1>
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
        <button className="signInButton" onClick={signIn}>
          로그인
        </button>
      </div>
    </div>
  );
}

export default SignInPage;
