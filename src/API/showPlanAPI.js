import axios from 'axios';

const showPlanAPI = async(token,room_id) => {
    await axios.get("http://localhost:8000/plan/all_plan/", {
    
    headers: 
        {Authorization: `Token ${token} ${room_id}`}
    })
    .then((response)=>{
      console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
};

export default showPlanAPI;