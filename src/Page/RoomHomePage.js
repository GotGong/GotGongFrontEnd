import React, { useMemo, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../css/RoomHomeStyle.css";
import axios from "axios";
import RoomCodeEnterModal from "./RoomCodeEnterModal.js";
import Modal from "./Modal.js";

function RoomHomePage() {
  const colorList = ["#FF8D8D", "#90FF8D", "#FF8DF4", "#FCFF64", "#95CCFF"];
  const randomIndex = Math.floor(Math.random() * colorList.length);
  const randomColor = colorList[randomIndex];

  const token = localStorage.getItem("token");

  const [roomId, setRoomId] = useState(0);
  const [roomList, setRoomList] = useState([]);

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

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="RoomPageContainer">
      <div className="RoomHome">
        <div className="button-box">
          <Link to="/mkroom">
            <button className="mkroomBtn">방 만들기</button>
          </Link>
          <button className="enterBtn" onClick={openModal}>
            참여하기
          </button>
          {modalOpen && (
            <Modal closeModal={() => setModalOpen(!modalOpen)}>
              <RoomCodeEnterModal />
            </Modal>
          )}
        </div>
        <div className="showRoomList">
          {roomList.map((t) => {
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
          })}
        </div>
      </div>
    </div>
  );
}

export default RoomHomePage;
