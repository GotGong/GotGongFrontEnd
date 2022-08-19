import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './App.css';


const NavBar2 = ({token, setToken}) => {
    const navigate = useNavigate();
    const [signInOn, setSignInOn] = useState(false);
    const username  = localStorage.getItem('username');
    

    const resetHandler = () => {
      setSignInOn(false);
      localStorage.clear();
      console.log('로그아웃');
      navigate('/');
    };

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
          setSignInOn(true);
        }
    }, []);

    return (
        <div className="navbar2">
      <ul>
        <li>
          <Link to="/room">
            <img className="gotgongLogo2" src={ require('./img/같공로고2.png') } />
          </Link>
        </li>
        <li>
          <Link to="/rule">
            <span>랭킹</span>
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
        <li>
          <Link to="/9">
            <span>계획</span>
          </Link>
        </li>
      </ul>
        {signInOn ? 
                <button className='navbarUsername' onClick={resetHandler}>{username}</button>
            :
                <></>
        }
      </div>

    );
};

export default NavBar2;