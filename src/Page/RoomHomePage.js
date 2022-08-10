import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../css/RoomHomeStyle.css";
import axios from "axios";

function RoomHomePage({ token }) {
  const [roomId, setRoomId] = useState(0);

  const showRoomListAPI = useCallback(() => {
    axios
      .get(`http://localhost:8000/room/myroomlist/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        const roomTitle = [];
        for (let i = 0; i < response.data.length; i++) {
          console.log("for문");
          roomTitle.push(<div key={i}>{response[0][i].title}</div>);
        }
      })
      .catch(function (error) {
        console.log(token);
        console.error(error.response.data);
      });
  });

  // const signUpAPI = async (userid, password, username, email) => {
  //     let token = ''
  //     await axios.post("http://localhost:8000/user/signup/", {
  //       userid: userid,
  //       password: password,
  //       username: username,
  //       email: email,
  //     })
  //     .then((response) => {
  //       token = response.data.Token;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //     return token;
  //   }

  const roomEnterAPI = useCallback(() => {
    setRoomId();
    axios
      .post(
        `http://localhost:8000/room/enter/`,
        {
          room_id: roomId,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("res옴");
        console.log(response.data);
        setRoomId(roomId);
      })
      .catch(function (error) {
        console.log("res안옴");
        console.log(token);
        console.error(error.response.data);
      });
  });

  return (
    <div className="RoomPageContainer">
      <div>
        <ul>
          <li>
            <Link to="/mkroom">
              <button className="mkroomBtn">방 만들기</button>
            </Link>
          </li>
          <li>
            <Link to="/enterbycode">
              <button className="enterBtn">참여하기</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="showRoomList">
        <ul>
          <li>
            {/* <button onClick={showRoomListAPI}>
                                    showroomList
                                </button>
                            <Link to="/myrooms">
                                <button onClick={roomEnterAPI}>
                                    roomenter
                                </button>
                            </Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RoomHomePage;
