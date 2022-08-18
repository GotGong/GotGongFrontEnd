import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/RoomMainStyle.css";

const RoomMainPage = () => {
  const params = useParams();
  //클릭된 room_id 변수 여기 저장됨
  var num = params.room_id; 

  const colorList = ["#FF8D8D", "#90FF8D", "#FF8DF4", "#FCFF64", "#95CCFF"];
  const randomIndex = Math.floor(Math.random() * colorList.length);
  const randomColor = colorList[randomIndex];
  
  const token = localStorage.getItem("token");

  const roomId = 1;
  const [roomList, setRoomList] = useState([]);
  const [usersList, setUsersList] = useState([]);


  useEffect(() => {
    axios
      .get(`http://localhost:8000/room/myroomlist/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setRoomList([]);
        for (let i = 0; i < response.data.room_count; i++) {
          roomList.push(response.data.my_room_list[i].title);
        }
        setRoomList(roomList);
        console.log(roomList);
      })
      .catch(function (error) {
        console.log(token);
        console.error(error.response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/room/users/1/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setUsersList([]);
        for (let i = 0; i < response.data.room_user_count; i++) {
          usersList.push(response.data.room_users_list[i].username);
        }
        setUsersList(usersList);
        console.log(usersList);
      })
      .catch(function (error) {
        console.log(token);
        console.error(error.response.data);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(``, {
  //       headers: {
  //         Authorization: `Token ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       const week = response.data.plan_info;
  //       setThisWeek(week);
  //       console.log(thisWeek);
  //     })
  //     .catch(function (error) {
  //       console.error(error.response.data);
  //     });
  // }, []);


  return (
    <div className = "All">
      <h1>{num}번 방의 RoomMainPage</h1>
    <div className="RoomMainContainer">
      <div className="RoomList">
      {roomList}
          {/* {roomList.map((t) => {
            return (
              <div>
                <div
                  style={{ backgroundColor: randomColor }}
                  className="roomTitle-box"
                >
                  {t}
                </div>
              </div>
            );
          })} */}
        </div>
        <div className="UsersList">
        {usersList}
          {/* {usersList.map((t) => {
            return (
              <div>
                <div
                  style={{ backgroundColor: randomColor }}
                  className="usersName-box"
                >
                  {t}
                </div>
              </div>
            );
          })} */}
        </div>
        <div className="ThisWeekPlan">
        ThisWeekPlan
        </div>
        <div className="OurPlan">
        OurPlan
        </div>
        <div className="OurCheck">
        OurCheck
        </div>
        <div className="dDay">
        dDay
        </div>
        <div className="QnA">
        QnA
        </div>
      </div>
    </div>
    );
}

export default RoomMainPage;
