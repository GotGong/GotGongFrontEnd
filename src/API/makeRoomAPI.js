import axios from "axios";
import { useState } from "react";

  

const makeRoomAPI = async (title, targetTime, maxUserNum, ruleNum ) => {
  await axios.post("http://localhost:8000/room/", 
    {params: {
          title: title,
          target_time: targetTime,
          max_user_num: maxUserNum,
          rule_num: ruleNum
    }})
    .then((response) => {
        console.log(response);
        console.log('makeroom');
    })
    .catch(function (error) {
        console.log(error);
        console.error(error.response.data); 
        console.log('makeroom에러?');
    });
  }

export default makeRoomAPI;
