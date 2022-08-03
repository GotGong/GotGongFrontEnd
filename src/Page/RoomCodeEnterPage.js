import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
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

//   const codeEnter = ((room_code,token) =>  {
//     let room_id = ''
//     axios.post("http://localhost:8000/room/enterbycode/",  {
//         room_code: room_code,
//     },{
//         headers: {
//             Authorization: `Token ${token}`
//         }
//     })
//     .then((response)=> {
//       console.log("roomcode인식성공");
//         if (response !== ''){
//             console.log(response);
//             room_id = response;
//             setRoom_id(response);
//             setRoom_code('');
//             navigate('/myrooms');
//         }

//         else{
//             console.log(response);
//             alert('해당 코드가 존재하지 않습니다.');
//         }
//     })
//     .catch(function(error){
//       console.log(error);
//       console.log("roomcode인식실패");
//   });
// });

  return (
    <div className="RoomCodeEnterPageContainer">
      {token}
      <div>
        <h1>RoomCodeEnterPage입니다.</h1>
      </div>
      <div>
        <input name="roomcode" type="text" placeholder="참여코드" value={room_code} onChange={(e) => setRoom_code(e.target.value)} />
        <button onClick={codeEnter}>참여하기</button>
      </div>
    </div>
  );
}

export default RoomCodeEnterPage;
