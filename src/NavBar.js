import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({token, setToken}) => {
  // signInOn === true -> 로그아웃 버튼 보여줌
  // signInOn === false -> 로그인 버튼 보여줌
  const [signInOn, setSignInOn] = useState(false);

  // token 값이 바뀔때만 실행 -> signInOn 변경
  // 1. token 값이 ''이 될 때 (signOut) -> signInOn = false
  // 2. token이 값을 지니게 될 때 (signIn) -> signInOn = true
  // useEffect(() => {
  //   token === null ? setSignInOn(false) : setSignInOn(true)
  // }, [token]);

  const resetHandler = () => {
    setToken('');
    setSignInOn(false);
    localStorage.clear();
  };

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setSignInOn(true);
    }
}, [token]);

  return (
    <div className="NavBarContainer">
      <div>
        {localStorage.getItem('token')}
      </div>
      <ul>
        <li>
          {/* 로그인 전일땐 /인데 로그인 후일땐 /room이여야함 */}
          <Link to="/">
            <button>홈</button>
          </Link>
        </li>
        {signInOn ?
          <li>
            <Link to="/">
              <button className="NavBarButton" onClick={resetHandler}>
                로그아웃
              </button>
            </Link>
          </li>
        :
          <li>
            <Link to="/signin">
              <button className="NavBarButton">
                로그인
              </button>
            </Link>
          </li>
        }
        {signInOn ? 
          <li></li>
        :
          <li>
            <Link to="/signup">
              <button className="NavBarButton">
                회원가입
              </button>
            </Link>
          </li>
        }
        {signInOn ? 
          <li>
            <Link to="/setting">
              <button className="NavBarButton">
                사용자 환경설정
              </button>
            </Link>
          </li>
        :
          <li></li>
        }
        <li>
          <Link to="/rule">
            <button>룰</button>
          </Link>
        </li>
        <li>
          <Link to="/plans">
            <button>계획</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
