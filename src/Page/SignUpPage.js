import React, { useState } from "react";
import signUpAPI from "../API/signUpAPI";
import duplicationCheckAPI from "../API/duplicationCheckAPI";
import { useNavigate } from 'react-router-dom';

function SignUpPage({setToken}) {

  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passwordToConfirm, setPasswordToConfirm] = useState('');
  const [usableId, setUsableId] = useState(false);
  const isValidEmail =  email.includes('@') && email.includes('.');
  const isValidPassword  = password.length  >= 8;
  const navigate = useNavigate()

  const duplicationCheck = () => {
    duplicationCheckAPI(userid)
    .then((response) => {
        //if(response === false){
        if(response !== ''){
          alert('사용 가능한 아이디입니다.');
          setUsableId(true);
        }
        else {
          alert('중복된 아이디입니다. 다시 시도하세요.');
          setUserid('');
        }
    })
  }

  // 회원가입 버튼 클릭
  const signUp = () => {
    // signUpAPI 실행
    // input: userid, password, username, email
    // return: 성공 시, Token 값(문자열), 실패 시, ''
    if(password !== passwordToConfirm) {
      alert('비밀번호와 비밀번호 확인이 다릅니다.');
    }
    else if (userid === ''){
      alert('아이디는 필수항목입니다.');
    }
    else if (password === ''){
      alert('비밀번호는 필수항목입니다.');
    }
    else if (passwordToConfirm === ''){
      alert('비밀번호 확인은 필수항목입니다.');
    }
    else if (username === ''){
      alert('닉네임은 필수항목입니다.');
    }
    else if (email === ''){
      alert('이메일은 필수항목입니다.');
    }
    else if (!isValidEmail) {
      alert('이메일 입력양식이 틀렸습니다.');
    }
    else if (!isValidPassword) {
      alert('비밀번호는 8글자 이상으로 설정하십시오.');
    }
    else if (setUsableId(false)){
      alert('아이디 중복 확인을 하십시오.');
    }
    
    else {
      signUpAPI(userid, password, username, email)
      .then((response) => {
        if (response !== '') {
          setToken(response);
          alert('회원가입 성공!!!');
          console.log(response.data);
          setUserid('');
          setPassword('');
          setPasswordToConfirm('');
          setUsername('');
          setEmail('');
          navigate('/room');
        }
        else {
          alert('회원가입 실패!!! - 원인으로는 서버 문제 or 아이디 중복 등의 원인이 있을 수 있습니다.');
        }
      });
    }
  }

  const useridHandler = (e) => {
    setUserid(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  }
  const passwordToConfirmHandler = (e) => {
    setPasswordToConfirm(e.target.value);
  };

  return (
    <div className="PageContainer">
      <h1>SignUpPage입니다.</h1>
      <div>
        <input
          name="email"
          type="text"
          placeholder="이메일"
          value={email}
          onChange={emailHandler}
        />
      </div>
      <div>
        <input
          name="username"
          type="text"
          placeholder="이름"
          value={username}
          onChange={usernameHandler}
        />
      </div>
      <div>
        <input
          name="userid"
          type="text"
          placeholder="아이디"
          value={userid}
          onChange={useridHandler}
        />
      </div>
      <div>
        <button className="duplicationCheckButton" onClick={duplicationCheck}>
          중복확인
        </button>
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={passwordHandler}
        />
      </div>
      <div>
        <input
          name="passwordToConfirm"
          type="password"
          placeholder="비밀번호 재확인"
          value={passwordToConfirm}
          onChange={passwordToConfirmHandler}
        />
      </div>
      
      
      <div>
        <button className="signUpButton" onClick={signUp}>
          가입하기
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;
