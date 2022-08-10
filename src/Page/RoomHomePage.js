import React, { useEffect, useState, useCallback } from 'react';
import { Link } from "react-router-dom";
import "../css/RoomHomeStyle.css"
import axios from 'axios';


function RoomHomePage({token}) {
    const [roomId, setRoomId] = useState(0);
    const [roomList, setRoomList] = useState([]);
    

    const showRoomListAPI = useCallback(() => {
        axios.get(`http://localhost:8000/room/myroomlist/`,
            { headers: {
                Authorization: `Token ${token}`
                }
            }
        )
        .then((response) => {
        console.log(response.data);
        setRoomList(response.data);
        // const roomTitle = [];
        // for(let i =0; i < response.data.length; i++)
        //         {
        //             console.log('for문');
        //             roomTitle.push(
        //                 <div key={i}>
        //                     {response[0][i].title}
        //                 </div>
        //             )
        //         }
        })
        .catch(function (error) {
            console.log(token);
            console.error(error.response.data); 
        });
    });

    const roomEnterAPI = useCallback(() => {
        setRoomId()
        axios.post(`http://localhost:8000/room/enter/`,
        {
            room_id:roomId,
        },
        { headers: {
            Authorization:`Token ${token}`,
            }}
        )
        .then((response) => {
            console.log('res옴');
            console.log(response.data);
            setRoomId(roomId);
        })
        .catch(function (error) {
            console.log('res안옴');
            console.log(token);
            console.error(error.response.data); 
        });
    });
    
    
    useEffect(() => {
    // if(roomList !== []){
        const roomTitle = [];
        for(let i =0; i < roomList.length; i++)
                {
                    console.log('for문');
                    roomTitle.push(
                        <div key={i}>
                            {roomList[0][i].title}
                        </div>
                    )
                }
    // }
    // else{
    //     console.log('room 없음');
    // }
        }, [roomList]);

    // const showRoomlist = () => {
    //     const roomTitle = [];
    //     for(let i =0; i < roomList.length; i++)
    //             {
    //                 console.log('for문');
    //                 roomTitle.push(
    //                     <div key={i}>
    //                         {roomList[0][i].title}
    //                     </div>
    //                 )
    //             }
    //     return roomTitle;
    // }


    return (
        <div>
            <div className="RoomPageContainer">
            <div className='btn-box'>
                        <Link to="/mkroom">
                            <button className='btn'>
                            방 만들기
                            </button>
                        </Link>
                        <Link to="/enterbycode">
                            <button className='btn'>
                            참여하기
                            </button>
                        </Link>
            </div>
            <div className='list-box'>
                        <div className='list'>
                            <h4>내가 속한 방 리스트</h4>
                        </div>
                        {/* <div>
                            <button onClick={showRoomListAPI}>
                                    btn 
                            </button>
                        </div>
                        <Link to="/myrooms">
                            <button onClick={roomEnterAPI}>
                                roomenter
                            </button>
                        </Link> */}
            </div>
        </div>
    </div>
    );
};

export default RoomHomePage;