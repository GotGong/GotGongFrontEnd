import axios from "axios";

const roomCodeEnterAPI = async(room_code) => {
    let room_id = ''
    const token  = localStorage.getItem('token');
    console.log(token);
    console.log(room_code);
    await axios.post("http://localhost:8000/room/enterbycode/",  {
        room_code: room_code,
    },{
        headers: {
            Authorization: `Token ${token}`
        }
    })
    
    .then((response) => {
        console.log("roomcode인식성공");
        console.log(response);
        room_id = response;
    })
    .catch(function(error){
        console.log(error);
        console.log("roomcode인식실패");

    });
    return room_id;
}

export default roomCodeEnterAPI;