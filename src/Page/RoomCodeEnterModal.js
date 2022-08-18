import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import roomCodeEnterAPI from "../API/roomCodeEnterAPI";
import "../css/RoomCodeEnterStyle.css";

function RoomCodeEnterModal({ token, setToken }) {
    const [room_code, setRoom_code] = useState("");
    const [room_id, setRoom_id] = useState("");
    const navigate = useNavigate();
  
    const codeEnter = () =>  {
        roomCodeEnterAPI(room_code,token)
        .then((response)=> {
            if (response !== ''){
                console.log(response);
                setRoom_id(response);
                setRoom_code('');
                navigate('/myrooms');
            }
  
            else{
                console.log(response);
                alert('해당 코드가 존재하지 않습니다.');
            }
        })
    }

    return (
        <div className='RoomCodeEnterPageContainer'>
            <div>
                <input name="roomcode" type="text" placeholder="참여코드" value={room_code} onChange={(e) => setRoom_code(e.target.value)} />
            </div>
            <div>
                <button onClick={codeEnter}>참여하기</button>
            </div>
        </div>
        
    );
}

export default RoomCodeEnterModal;