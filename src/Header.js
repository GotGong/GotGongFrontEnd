import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './App.css';


const username  = localStorage.getItem('username');

const Header = ({token, setToken}) => {
    const [signInOn, setSignInOn] = useState(false);
  
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
        <div className='header'>
            <Link to="/">
                <img className="gotgongLogo" src={ require('./img/같공로고1.png') } />
            </Link>
            <button className='headerUsername' onClick={resetHandler}>이름</button>
        </div>
    );
};

export default Header;