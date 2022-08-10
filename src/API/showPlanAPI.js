import axios from "axios";

const showPlanAPI = async (token, room_id) => {
  await axios
    .get(
      "http://localhost:8000/plan/all_plan/",
      {
        room_id: room_id,
        headers: { 
          // Authorization: `Token ${token}`
      Authorization: localStorage.getItem('token'),
        },
      }
    )
    .then((response) => {
      console.log(response);
      console.log('show plan api 호출');
      return response.data.length;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default showPlanAPI;
