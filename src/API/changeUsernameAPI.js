import axios from "axios";

// username 입력받으면 현재 사용자(By token으로 조회)의 username 변경
const changeUsernameAPI = async (username, token) => {
  await axios.patch("http://localhost:8000/user/", {
    username: username
  }, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
  .then(() => {
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default changeUsernameAPI;
