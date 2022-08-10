//로그인 + 메인 페이지
import React, { useState, useEffect, useRef as UseRef } from "react";
import signInAPI from "../API/signInAPI";
import "../css/SignInStyle.css";
import { Link, useNavigate as UseNavigate } from "react-router-dom";
//import axios from "axios";
//import { useCookies as UseCookies } from 'react-cookie';

function SignInPage({token, setToken}) {
  
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



  return (
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
  );
}

// //로그인 하면 토큰을 받아 쿠키에 저장
// const SaveToken = (props) => {
// 	const formRef = UseRef();
// 	const [cookies, setCookie] = UseCookies(['id']); // 쿠키 훅 
// 	const navigate = UseNavigate();

// 	const save = (e) => {
// 		e.preventDefault();
// 		axios
// 			.post('/user/signin/', { // 로그인 요청
// 				userid: formRef.current.userid.value,
// 				password: formRef.current.password.value,
// 			})
// 			.then((res) => {
// 					setCookie('id', res.data.token);// 쿠키에 토큰 저장
// 			});
// 	};

// 	return (
// 		<form ref={formRef} onSubmit={save}>
// 			<input type="text" name="id" placeholder="id" required />
// 			<input type="password" name="passWord" placeholder="passWord" required />
// 			<input type="submit"></input>
// 		</form>
// 	);
// };

// //쿠키로 인증
// const KeepSignin = (props) => {
// 	const [cookies, setCookie, removeCookie] = UseCookies(['id']);
// 	const [userid, setUserid] = useState(null);
// 	const navigate = UseNavigate();

// 	const authCheck = () => { // 페이지에 들어올때 쿠키로 사용자 체크
// 		const token = cookies.id; // 쿠키에서 id 를 꺼내기
// 		axios
// 			.post('/users/loginCheck', { token: token }) // 토큰으로 서버에 인증 요청
// 			.then((res) => {
// 				setUserid(res.data.userid); // 유저 아이디 표시를 위해 작성
// 			})
// 			.catch(() => {
// 				logOut(); // 에러 발생시 실행
// 			});
// 	};

// 	useEffect(() => {
// 		authCheck(); // 로그인 체크 함수
// 	});

// 	const logOut = () => {
// 		removeCookie('id'); // 쿠키를 삭제
// 		navigate('/'); // 메인 페이지로 이동
// 	};

// 	return (
// 		<>
// 			{userid && <h1>{userid}</h1>} // 로그인 되어있으면 아이디 표시
// 			<button onClick={logOut}>로그아웃</button> // 로그아웃 버튼
// 		</>
// 	);
// };

export default SignInPage;
