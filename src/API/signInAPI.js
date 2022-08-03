import axios from "axios";

// userid, password 입력 받으면 token 값 return
// error 시, token = '', 성공 시, token = 'Token 값'
const signInAPI = async (userid, password) => {
  let token = ''
  await axios.post("http://localhost:8000/user/signin/", {
    userid: userid,
    password: password,
  })
  .then((response) => {
    token = response.data.Token;
    const username = response.data.username;
    localStorage.setItem("token",token);
    localStorage.setItem("username",username);
  })
  .catch(function (error) {
    console.log(error);
  });
  return token;
}

export default signInAPI;
