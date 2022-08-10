import axios from "axios";

const showDetailPlanAPI = async (token, plan_id) => {
  await axios
    .get(
      "http://localhost:8000/plan/all_detail/",
      {
        plan_id: plan_id,
        headers: { 
          Authorization: `Token ${token}`
        },
      }
    )
    .then((response) => {
      console.log(response);
      console.log('show detail plan api 호출');
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default showDetailPlanAPI;
