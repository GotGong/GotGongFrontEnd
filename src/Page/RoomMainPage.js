import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/RoomMainStyle.css";
import NavBar2 from "../NavBar2.js";

function RoomMainPage() {
  const params = useParams();
  //클릭된 room_id 변수 여기 저장됨
  var num = params.room_id;

  const colorList = ["#FF8D8D", "#90FF8D", "#FF8DF4", "#FCFF64", "#95CCFF"];
  const randomIndex = Math.floor(Math.random() * colorList.length);
  const randomColor = colorList[randomIndex];

  const token = localStorage.getItem("token");

  // const roomId = 1;
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
        // for (let i = 0; i < response.data.room_count; i++) {
        //   roomList.push(response.data.my_room_list[i].title);
        // }
        setRoomList(response.data.my_room_list);
        console.log(response.data.my_room_list);
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
        setUsersList(response.data.room_users_list);
        console.log(response.data.room_users_list);
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
    <>
      <NavBar2 />
      <div
        className="All"
        style={{
          position: "fixed",
          backgroundColor: "#F5F5F5",
          top: "19%",
          left: "0%",
          width: "100%",
          height: "81%",
        }}
      >
        <div
          className="RoomMainContainer"
          style={{
            // position: "fixed",
            // top: "23%",
            // left: "3.5%",
            // width: "93%",
            // height: "72%",
            display: "grid",
            gridTemplateColumns: "10fr 10fr 20fr 25.5fr 25.5fr",
            gridTemplateRows: "65fr 35fr",
            height: '100%',
          }}
        >
          <div
            className="RoomList"
            style={{
              backgroundColor: "#D9D9D9",
              height: "100%",
              display: "grid",
              gridRow: "1/3",
              alignContent:'start',
              textAlign:'center',
            }}
          >
            {roomList.map((r) => {
              return (
                <div key={r.id}>
                  {/* <Link to={`/myrooms/${r.id}`}> */}
                  <button
                    className="Title-box"
                    style={{ backgroundColor: randomColor }}
                  >
                    {r.title}
                  </button>
                  {/* </Link> */}
                </div>
              );
            })}
          </div>
          <div
            className="UsersList"
            style={{
              backgroundColor: "#BFBFBF",
              display: "grid",
              gridRow: "1/3",
              alignContent:'start',
              textAlign:'center',

            }}
          >
            {usersList.map((r) => {
              return (
                <div key={r.id}>
                  {/* <Link to={`/myrooms/${r.id}`}> */}
                  <button
                    className="Title-box"
                    style={{ backgroundColor: "#EDEDED" }}
                  >
                    {r.username}
                  </button>
                  {/* </Link> */}
                </div>
              );
            })}
          </div>

          <div
            className="ThisWeekPlan"
            style={{
              backgroundColor: "#FFFFFF",
              display: "grid",
              borderRadius: "22px",
              margin: '20px',
            }}
          >
            ThisWeekPlan
          </div>
          <div
            className="OurPlan"
            style={{
              backgroundColor: "#FFFFFF",
              display: "grid",
              borderRadius: "22px",
              margin: '20px',
            }}
          >
            OurPlan
          </div>
          <div
            className="OurCheck"
            style={{
              backgroundColor: "#FFFFFF",
              display: "grid",
              borderRadius: "22px",
              margin: '20px',
            }}
          >
            OurCheck
          </div>
          <div
            className="dDay"
            style={{
              backgroundColor: "#000000",
              color: "#FFFFFF",
              display: "grid",
              borderRadius: "22px",
              margin: '20px',
              
            }}
          >
            dDay
          </div>
          <div
            className="QnA"
            style={{
              backgroundColor: "#FFFFFF",
              display: "grid",
              gridColumn: "4/6",
              borderRadius: "22px",
              margin: '20px',

            }}
          >
            QnA
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomMainPage;
