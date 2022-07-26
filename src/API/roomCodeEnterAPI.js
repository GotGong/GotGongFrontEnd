import axios from "axios";

const roomCodeEnterAPI = async(room_code,token) => {
    await axios.post("http://localhost:8000/room/enterbycode/",  {
        room_code: room_code,
    },{
        headers: {
            Authorization: `Token ${token}`
        }
    })
    .then((response) => {
        console.log(response.data.room_code);
        console.log(response.data.room_id);
        
    })
    .catch(function(error){
        console.log(error);
    });
}

export default roomCodeEnterAPI;