import React from 'react';

const RoomEnterPage = () => {

    const roomEnter = () => {
        // signUpAPI 실행
        // input: userid, (password, username, email
        // return: 성공 시, Token 값(문자열), 실패 시, ''
        roomEnterAPI(userid, password)
        .then((response) => {
          if (response !== '') {
            setToken(response);
            setUserid('');
            setPassword('');
            navigate('/enter');
          }
          else {
            alert('로그인 실패!!!');
            setUserid('');
            setPassword('');
          }
        })
      }
    return (
        <div className="RoomEnterPageContainer">
            <h1>RoomEnterPage입니다. </h1>
            <br/>
            <h1> 나중에 roomhomepage에서 칸이 따로 만들어져야함</h1>
            <div>
                <button className="signInButton" onClick={roomEnter}>
                    스터디방
                </button>
            </div>
        </div>
        
    );
};

export default RoomEnterPage;