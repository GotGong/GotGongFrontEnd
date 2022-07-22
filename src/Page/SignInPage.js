//로그인 + 메인 페이지
import React, { useState, useEffect } from "react";
import signInAPI from "../API/signInAPI";
import "../css/SignInStyle.css";
import { Link, useNavigate } from "react-router-dom";


function SignInPage({token, setToken}) {
  
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

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

  return (
    <div className="SignInContainer">
      <div className="SignInTop">
        <input
          name="userid"
          type="text"
          placeholder="아이디"
          value={userid}
          onChange={useridHandler}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={passwordHandler}
        />

      <div>
        <button className="signInButton" onClick={signIn}>
          로그인
        </button>
      </div>
      </div>
      <div className="SignInBottom">
        <ul>
          <li>
            <Link to="/signup">
              <span>회원가입</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>아이디찾기</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>비밀번호찾기</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SignInPage;
