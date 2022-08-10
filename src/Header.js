import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './App.css';


const Header = ({token, setToken}) => {
    const navigate = useNavigate();
    const [signInOn, setSignInOn] = useState(false);
    const username  = localStorage.getItem('username');

    const resetHandler = () => {
      setToken('');
      setSignInOn(false);
      localStorage.clear();
      navigate('/');
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
            {signInOn ? 
                <button className='headerUsername' onClick={resetHandler}>{username}</button>
            :
                <></>
            }
        </div>
    );
};

export default Header;