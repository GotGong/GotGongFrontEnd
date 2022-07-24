import axios from "axios";

const changeRoomnameAPI = async (token, room_id, title) => {
    await axios.patch("http://localhost:8000/room/", {
        title: title,
    },{
        headers: {
            Authorization: `Token ${token} ${room_id}`
          }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
};

export default changeRoomnameAPI;