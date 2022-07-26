import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MyRoomListAPI from '../API/myRoomListAPI';
import "../css/RoomHomeStyle.css"
import axios from 'axios';


function RoomHomePage({token}) {
    // const isLogin = props.isLogin;
    const [myroomlist, setMyroomlist] = useState([]);
    const [num, setNum] = useState(false);

    // useEffect((token) => {
    //     // axios.get('http://localhost:8000/room/myroomlist/',
    //     // { headers: {
    //     //         Authorization:`Token ${token}` }})
    //     // .then((response) => {
    //     //     setMyroomlist(response.data.my_room_list);
    //     // })
    //     // .catch(function (error) {
    //     //     console.log(token);
    //     //     console.error(error.response.data); 
    //     // });
    // },[num])
    // changeUsernameAPI(username, token)
    // .then(() => {
    //   setUsername('');
    //   alert('사용자 이름 변경 성공!!!');
    // })

    
    // const getRoomList = (()=>{
    //     MyRoomListAPI(token)
    //     .then((response)=> {
    //         console.log(response);
    //         for(let i =0; i < response.length; i++)
    //         {
    //             roomTitle.push(
    //                 <div key={i}>
    //                     <h4>{response[0][i].title}</h4>
    //                 </div>
    //             )
    //         }
    //     })
    // });
    const roomlist = [];
    const roomTitle = [];
    MyRoomListAPI(token)
        .then((response)=> {
            console.log('api호출');
            console.log(response);
            // for(let i =0; i < response.length; i++)
            // {
            //     roomTitle.push(
            //         <div key={i}>
            //             <h4>{response[0][i].title}</h4>
            //         </div>
            //     )
            // }
        })
    
    
    // const roomTitle = [];
    // for(let i =0; i < myroomlist.length; i++)
    // {
    //     roomTitle.push(
    //         <div key={i}>
    //             <h4>{myroomlist[0][i].title}</h4>
    //         </div>
    //     )
    // }

    // useEffect(()=> {  
    //     // get(url(장고서버) body option)
    //     axios.get('http://localhost:8000/room/')
    //     //데이터 받아오기
    //     .then((response) => {
    //       //state바꾸는 함수
    //       setRooms(response.data);
    //       //state가 바뀌었지만 랜더링 안 됨, 체크 상태에 갇혀있어서
    //     })
    //     //에러대응
    //     .catch(console.log('error!'))
        
    //   }, [check]) //check가 바뀔때만 동작한다(?)
    
    //   const room_list = []
    //   for(let i = 0; i < rooms.length; i++) {
    //     room_list.push(
    //       <div key={i}>
    //         <h2>{rooms[i].title}</h2>
    //         <p>{rooms[i].start_date}</p>
    //       </div>
    //     )
    //   }

    
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
                        {/* <button onclick={setNum(!num)}>
                            !num
                        </button> */}
                        <div id="roomtitlearea">
                            {/* {roomTitle} */}
                        </div>
                        {/* <Link to="/enter">
                            <button>
                            스터디방 0
                            </button>
                        </Link> */}
                        <h4>{MyRoomListAPI}</h4>
                        <h4></h4>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default RoomHomePage;