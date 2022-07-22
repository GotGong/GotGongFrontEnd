import axios from "axios";

// userid, password, username, email 입력 받으면 token 값 return
// error 시, token = '', 성공 시, token = 'Token 값'
const signUpAPI = async (userid, password, username, email) => {
  let token = ''
  await axios.post("http://localhost:8000/user/signup/", {
    userid: userid,
    password: password,
    username: username,
    email: email,
  })
  .then((response) => {
    token = response.data.Token;
  })
  .catch(function (error) {
    console.log(error);
  });
  return token;
}

const idConfirm  = async (userid) => {
  await axios.post("http://localhost:8000/user/signup/", {
    userid: userid,
  })
  .then((response) => {
    if(userid == response.data.userid){
      alert("사용 불가능한 아이디입니다.");
    }
  })
  
}

export default signUpAPI;
