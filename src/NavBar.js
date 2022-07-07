import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({token, setToken}) => {
  // signInOn === true -> 로그아웃 버튼 보여줌
  // signInOn === false -> 로그인 버튼 보여줌
  const [signInOn, setSignInOn] = useState(false);

  // token 값이 바뀔때만 실행 -> signInOn 변경
  // 1. token 값이 ''이 될 때 (signOut) -> signInOn = false
  // 2. token이 값을 지니게 될 때 (signIn) -> signInOn = true
  useEffect(() => {
    token === '' ? setSignInOn(false) : setSignInOn(true)
  }, [token]);

  return (
    <div className="NavBarContainer">
      <div>
        {token}
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {signInOn ?
          <li>
            <button className="NavBarButton" onClick={() => setToken('')}>
              로그아웃
            </button>
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
      </ul>
    </div>
  );
};

export default NavBar;
