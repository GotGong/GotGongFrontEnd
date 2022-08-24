import React, { useState } from "react";
import changeUsernameAPI from "../API/changeUsernameAPI";
import changeUseridAPI from '../API/changeUseridAPI';
import changePasswordAPI from '../API/changePasswordAPI';
import deleteUserAPI from "../API/deleteUserAPI";
import NavBar1 from "../NavBar1.js";
import "../css/SettingStyle.css"


const SettingPage = ({token, setToken}) => {
  const [username, setUsername] = useState('');
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const Username  = localStorage.getItem('username');
  const UserId  = localStorage.getItem('userId');

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
    <>
    <NavBar1 />
    <div className="SettingPageContainer" style={{position: 'fixed', top: '15%', width: '100%',}}>
      <div>
        <h1>마이페이지</h1>
      </div>
      <div style={{display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
        <div >
          <input style={{width: '400px', height:'90px', margin:'15px'}}
            name="username"
            type="text"
            placeholder={Username}
            onChange={usernameHandler}
          />
          <button className="changeUsername" onClick={changeUsername} style={{width: '250px', height:'90px'}}>
            이름변경
          </button>
        </div>
        <br/>
        <div>
          <input style={{width: '400px', height:'90px', margin:'15px'}}
            name="userid"
            type="text"
            placeholder={UserId}
            onChange={useridHandler}
          />
          <button className="changeUserid" onClick={changeUserid} style={{width: '250px', height:'90px'}}> 
            아이디변경
          </button>
        </div>
        <br/>
        <div>
          <input style={{width: '400px', height:'90px', margin:'15px'}}
            name="password"
            type="text"
            placeholder="password"
            onChange={passwordHandler}
          />
          <button className="changePassword" onClick={changePassword} style={{width: '250px', height:'90px'}}>
            비밀번호변경
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
    </>
  );
}

export default SettingPage;
