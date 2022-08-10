import React from 'react';
import { Link } from "react-router-dom";
import './App.css';


const username  = localStorage.getItem('username');

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
                <img className="gotgongLogo" src={ require('./img/같공로고1.png') } />
            </Link>
            <button className='headerUsername'>이름</button>
        </div>
    );
};

export default Header;