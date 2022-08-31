import axios from "axios";


const changeUsernameAPI = async (username, token) => {
  await axios.patch("http://localhost:8000/user/", {
    username: username
  }, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
  .then((response) => {
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default changeUsernameAPI;
