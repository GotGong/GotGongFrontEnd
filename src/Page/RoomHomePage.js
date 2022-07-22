import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MyRoomListAPI from '../API/myRoomListAPI';


function RoomHomePage(props, token) {
    const isLogin = props.isLogin;

    const showRoomList= () => {
        MyRoomListAPI(token)
        .then(() => {
          console.log('aaa');
        })
      }

    
    return (
        <div>
            <h1>RoomHomePage입니다.</h1>
            <div className="RoomPageContainer">
            <div>
                <ul>
                    <li>
                        <Link to="/mkroom">
                            <button>
                            방 만들기
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/enterbycode">
                            <button>
                            참여하기
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h4>내가 속한 방 리스트가 뜰 예정</h4>
                        <h4>{showRoomList}</h4>
                        <Link to="/enter">
                            <button>
                            스터디방 0
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default RoomHomePage;