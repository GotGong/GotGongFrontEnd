import axios from "axios";


const MyRoomListAPI = async (token) => {
        axios.get('/room/myroomlist/',
        { headers: {
                Authorization:`Token ${token}`,
        }})
        .then(response => {
            console.log(response);})
        .catch(function (error) {
            console.log(token);
            console.error(error.response.data); 
        });
        return;
}

export default MyRoomListAPI;