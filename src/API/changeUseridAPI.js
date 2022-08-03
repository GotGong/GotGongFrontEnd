import axios from "axios";

const changeUseridAPI = async (userid, token) => {
  await axios.patch("http://localhost:8000/user/", {
    userid: userid
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

export default changeUseridAPI;
