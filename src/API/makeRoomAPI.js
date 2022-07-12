import axios from "axios";

const makeRoomAPI = async (title, targetTime, startTime, 
    planHalfFee, planNoFee, maxUserNum, 
    planPeriod, negativePercent) => {
  let token = ''
  await axios.post("http://localhost:8000/room/", {
    title: title,
    target_time: targetTime,
    start_time: startTime,
    plan_half_fee: planHalfFee,
    plan_no_fee: planNoFee,
    max_user_num: maxUserNum,
    plan_period: planPeriod,
    negative_percent: negativePercent,
  })
  .then((response) => {
    token = response.data.Token;
  })
  .catch(function (error) {
    console.log(error);
  });
  return token;
}

export default makeRoomAPI;
