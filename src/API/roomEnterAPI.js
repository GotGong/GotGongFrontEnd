import axios from "axios";


 const roomEnterAPI = async (room_id) => {
   let token = ''
   await axios.post("http://localhost:8000/room/enter/", {
     headers: {
         Authorization: `Token ${token}`
     },
     room_id:room_id
   })
   .then((response) => {
     room_id = response.data.room_id;
   })
   .catch(function (error) {
     console.log(error);
   });
   return room_id;
 }

 export default roomEnterAPI;