import React, { useState } from "react";
import changeUsernameAPI from "../API/changeUsernameAPI";
import deleteUserAPI from "../API/deleteUserAPI";

const SettingPage = ({token, setToken}) => {
  const [username, setUsername] = useState('');
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const changeUsername = () => {
    changeUsernameAPI(username, token)
    .then(() => {
      setUsername('');
      alert('사용자 이름 변경 성공!!!');
    })
  }

  const deleteUser = () => {
    deleteUserAPI(token)
    .then(() => {
      setToken('');
      alert('사용자 탈퇴 성공!!!');
    });
  }

  return (
    <div className="PageContainer">
      <h1>SettingPage입니다.</h1>
      <div>
        사용자 이름 변경
      </div>
      <input
        name="username"
        type="text"
        placeholder="username"
        value={username}
        onChange={usernameHandler}
      />
      <div>
        <button className="changeUsername" onClick={changeUsername}>
          사용자이름변경
        </button>
      </div>
      <br/><br/><br/><br/><br/>
      <div>
        사용자 탈퇴
      </div>
      <div>
        <button className="deleteUser" onClick={deleteUser}>
          사용자 탈퇴
        </button>
      </div>
    </div>
  );
}

export default SettingPage;
