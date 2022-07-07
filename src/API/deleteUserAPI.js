import axios from "axios";

// 현재 사용자(By token으로 조회) 삭제
const deleteUserAPI = async (token) => {
  await axios.delete("http://localhost:8000/user/", {
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

export default deleteUserAPI;
