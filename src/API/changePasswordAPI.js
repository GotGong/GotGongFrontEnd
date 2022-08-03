import axios from "axios";

const changePasswordAPI = async (password, token) => {
  await axios.patch("http://localhost:8000/user/", {
    password: password
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

export default changePasswordAPI;
