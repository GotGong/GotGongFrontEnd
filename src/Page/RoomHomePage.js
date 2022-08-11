import React, { useMemo, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../css/RoomHomeStyle.css";
import axios from "axios";


function RoomHomePage({token}) {

    
    // useEffect(() => {
    //     // 룸리스트 조회, 보이기
    //     console.log('useEffect 실행');
    //     showRoomListAPI();
    //     },[]);

    const [roomId, setRoomId] = useState(0);
    const [roomList, setRoomList] = useState([]);
    

    useEffect(()=> {    
        axios.get(`http://localhost:8000/room/myroomlist/`,
            { headers: {
                Authorization: `Token ${token}`
                }
            }
        )
        .then((response) => {
        // const roomTitle = [];
        console.log('api 호출 성공');
        console.log(response.data);
        console.log(response.data.room_count);
        for(let i=0;i<response.data.room_count;i++){
            roomList.push(response.data.my_room_list[i].title);
        }
        setRoomList(roomList);
        console.log(roomList)
        })
        .catch(function (error) {
            console.log(token);
            console.error(error.response.data); 
        });
        
    },);
    // },[]);

    const roomEnterAPI = useCallback(() => {
        setRoomId()
        axios.post(`http://localhost:8000/room/enter/`,
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
      <div className="button-box">
            <Link to="/mkroom">
              <button className="mkroomBtn" >방 만들기</button>
            </Link>
            <Link to="/enterbycode">
              <button className="enterBtn">참여하기</button>
            </Link>
      </div>
      <div className="showRoomList">
        {roomList.map((t)=> {
                return (
                    <div>
                        <div className="roomTitle-box">{t}</div>
                    </div>
                );
            })}
      </div>
    </div>
  )};

export default RoomHomePage;
