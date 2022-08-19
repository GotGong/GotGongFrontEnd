import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './App.css';

const NavBar1 = () => {
  const navigate = useNavigate();
  const username  = localStorage.getItem('username');
  
  const [navBar1, setNavBar1] = useState(true);

  const [signInOn, setSignInOn] = useState(false);
  // signInOn === true -> 로그아웃 버튼 보여줌
  // signInOn === false -> 로그인 버튼 보여줌
  // token 값이 바뀔때만 실행 -> signInOn 변경
  // 1. token 값이 ''이 될 때 (signOut) -> signInOn = false
  // 2. token이 값을 지니게 될 때 (signIn) -> signInOn = true
  // useEffect(() => {
  //   token === null ? setSignInOn(false) : setSignInOn(true)
  // }, [token]);

  const resetHandler = () => {
    setSignInOn(false);
    localStorage.clear();
    navigate('/');
  };

  const navBarHandler = () => {
    setNavBar1(!navBar1);
  };

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setSignInOn(true);
    }
}, []);

  return (
    <div className="NavBarContainer">
      {/* {navBar1  ? */}
        <div className='navbar1'>
            {signInOn ?
                <Link to="/room">
                    <img className="gotgongLogo1" src={ require('./img/같공로고1.png') } />
                </Link>
            :
                <Link to="/">
                    <img className="gotgongLogo1" src={ require('./img/같공로고1.png') } />
                </Link>
            }
            {signInOn ? 
                <button className='navbarUsername' onClick={resetHandler}>{username}</button>
            :
                <></>
            }
        </div>
    {/* { :
      <div className="navbar2">
      <ul>
        <li>
          <Link to="/room">
            <img className="gotgongLogo2" src={ require('./img/같공로고2.png') } />
          </Link>
        </li>
        <li>
          <Link to="/rule">
            <span>룰</span>
          </Link>
        </li>
        <li>
          <Link to="/plans">
            <span>환급 비용 계산</span>
          </Link>
        </li>
      </ul>
        {signInOn ? 
                <button className='navbarUsername' onClick={resetHandler}>{username}</button>
            :
                <></>
        }
      </div>
}) */}
  </div>
  );

};

export default NavBar1;