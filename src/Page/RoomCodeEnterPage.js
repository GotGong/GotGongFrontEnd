import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import roomCodeEnterAPI from "../API/roomCodeEnterAPI";

function RoomCodeEnterPage({ token, setToken }) {
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
    <div className="RoomCodeEnterPageContainer">
      <div>
        <h1>RoomCodeEnterPage입니다.</h1>
      </div>
      <div>
        <input name="roomcode" type="text" placeholder="참여코드" />
        <button onClick={codeEnter}>참여하기</button>
      </div>
    </div>
  );
}

export default RoomCodeEnterPage;
