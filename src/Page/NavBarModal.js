import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

function NavBarModal({ token, setToken }) {
    // const [room_code, setRoom_code] = useState("");
    // const [room_id, setRoom_id] = useState("");
    const navigate = useNavigate();
    const [signInOn, setSignInOn] = useState(false);

  
    const resetHandler = () => {
        setSignInOn(false);
        localStorage.clear();
        console.log('로그아웃');
        navigate('/');
    };

    return (
        <div className='navbarModal'>
            <Link to='/setting'>
                <div>
                    <button style={{width:'200px',height:'70px',fontSize:'25px', backgroundColor:'#D9D9D9', color:'black'}}>마이페이지</button>
                </div>
            </Link>
            <div>
                <button onClick={resetHandler} style={{width:'200px',height:'70px',fontSize:'25px', backgroundColor:'#D9D9D9', color:'black'}}>로그아웃</button>
            </div>
        </div>
    );
}

export default NavBarModal;