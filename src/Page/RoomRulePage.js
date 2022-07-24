import React, { useState } from "react";
import changeRoomnameAPI from "../API/changeRoomnameAPI";

const RoomRulePage = (token, room_id) => {
  const [title, setTitle] = useState("");
  const roomnameHandler = (e) => {
    setTitle(e.target.value);
  };

  const changeRoomname = () => {
    changeRoomnameAPI(title, room_id, token)
      .then(() => {
        setTitle("");
        alert("방 이름 변경 성공");
      })
      .catch(function (error) {
        console.log(error);
        alert("방 이름 변경 실패");
      });
  };

  const [R1, setR1] = useState("");
  const changeR1 = (e) => {
    setR1(e.target.value);
  };

  return (
    <div className="PageContainer">
      <div>
        <h2>스터디방 이름 </h2>
        <input
          name="title"
          type="text"
          placeholder={title}
          onChange={roomnameHandler}
        />
      </div>
      <div>
        <h2>스터디방 인원</h2>
        <input />
      </div>
      <div>
        <h2>환급 룰</h2>
        <label>
          <input type="radio" value="1" onChange={changeR1} checked />
          1등: 200%, 2~4등:100%, 5등:0% 환급
        </label>
        <br></br>
        <label>
          <input type="radio" value="2" onChange={changeR1} />
          1등: 200%, 2~4등:80%, 5등:60% 환급
        </label>
      </div>
      <br></br>
      <div>
        <button className="changeRoomname" onClick={changeRoomname}>
          룰 변경하기
        </button>
      </div>
    </div>
  );
};

export default RoomRulePage;
