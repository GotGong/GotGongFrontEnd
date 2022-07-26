import axios from "axios";

const changeRoomnameAPI = async (token, room_id, title) => {
    await axios.patch("http://localhost:8000/room/", {
        title: title,
        room_id: room_id,
    },{
        headers: {
            Authorization: `Token ${token}`
          }
    }) 
    
    .then((room_id, title) => {
        console.log(room_id, title);
    })

    .catch(function (error) {
        console.log(error);
    });
};

export default changeRoomnameAPI;