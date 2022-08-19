//로그인 + 메인 페이지
import React, { useCallback, useState, useEffect, useRef as UseRef } from "react";
import signInAPI from "../API/signInAPI";
import "../css/SignInStyle.css";
import { Link, useNavigate as UseNavigate } from "react-router-dom";
import axios from "axios";
import NavBar1 from "../NavBar1.js";


function SignInPage({token, setToken}) {
  
  // const localSt_token = localStorage.getItem('token');

  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  const navigate = UseNavigate()

  const useridHandler = (e) => {
    setUserid(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 버튼 클릭
  const signIn = () => {
    // signUpAPI 실행
    // input: userid, (password, username, email
    // return: 성공 시, Token 값(문자열), 실패 시, ''
    signInAPI(userid, password)
    .then((response) => {
      if (response !== '') {
        setToken(response);
        setUserid('');
        setPassword('');
        navigate('/room');
      }
      else {
        alert('로그인 실패!!!');
        setUserid('');
        setPassword('');
      }
    })
  }

  //로그인 상태 관리
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
  if(token === ''){
      console.log('로그인 후 사용가능합니다.');
  }
  else{
      setIsLogin(true);
      console.log('로그인 상태');
  }
    }, [token]);

  //   useEffect(() => {
  //     if (localStorage.getItem('token') !== null) {
  //       setIsLogin(true);
  //     }
  // }, []);



  return (
    <>
    <NavBar1 />
    <div className="SignInContainer">
      <div className="SignInTop">
        <div className="idInput">
          <input 
            name="userid"
            type="text"
            placeholder="아이디"
            value={userid}
            onChange={useridHandler}
          />
        </div>
        <div className="passwordInput">
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={passwordHandler}
          />
        </div>
        <div className="signInButton">
          <button onClick={signIn}>
            로그인
          </button>
        </div>
      </div>
      <div className="SignInBottom">
        <ul>
          <li className="signUp">
            <Link to="/signup">
              <span>회원가입</span>
            </Link>
          </li>
          <li className="findId">
            <Link to="/">
              <span>아이디찾기</span>
            </Link>
          </li>
          <li className="findPassword">
            <Link to="/">
              <span>비밀번호찾기</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}



export default SignInPage;
