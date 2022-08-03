import React, { useState } from "react";
import changeUsernameAPI from "../API/changeUsernameAPI";
import changeUseridAPI from '../API/changeUseridAPI';
import changePasswordAPI from '../API/changePasswordAPI';
import deleteUserAPI from "../API/deleteUserAPI";

const SettingPage = ({token, setToken}) => {
  const [username, setUsername] = useState('');
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const useridHandler = (e) => {
    setUserid(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const changeUsername = () => {
    changeUsernameAPI(username, token)
    .then(() => {
      setUsername('');
      alert('사용자 이름 변경 성공!!!');
    })
  }

  const changeUserid = () => {
    changeUseridAPI(userid, token)
    .then(() => {
      setUserid('');
      alert('사용자 아이디 변경 성공!!!');
    })
  }

  const changePassword = () => {
    changePasswordAPI(password, token)
    .then(() => {
      setPassword('');
      alert('사용자 비밀번호 변경 성공!!!');
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
      <h1>마이페이지</h1>
      <div>
        <div>
          <input
            name="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={usernameHandler}
          />
          <button className="changeUsername" onClick={changeUsername}>
            사용자이름변경
          </button>
        </div>
        <br/>
        <div>
          <input
            name="userid"
            type="text"
            placeholder="userid"
            value={userid}
            onChange={useridHandler}
          />
          <button className="changeUserid" onClick={changeUserid}>
            사용자아이디변경
          </button>
        </div>
        <br/>
        <div>
          <input
            name="password"
            type="text"
            placeholder="password"
            value={password}
            onChange={passwordHandler}
          />
          <button className="changePassword" onClick={changePassword}>
            사용자비밀번호변경
          </button>
        </div>
        <br/><br/>
        <div>
          <button className="deleteUser" onClick={deleteUser}>
            회원탈퇴
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingPage;
