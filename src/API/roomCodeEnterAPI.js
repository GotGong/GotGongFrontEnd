import axios from "axios";

const roomCodeEnterAPI = async(room_code,token) => {
    await axios.post("http://localhost:8000/",  {
        room_code: room_code,
    })
    .then((response) => {
        token  =  response.data.Token;
    })
    .catch(function(error){
        console.log(error);
    });
}

export default roomCodeEnterAPI;