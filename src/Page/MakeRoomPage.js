import React, {useState } from 'react';
// import makeRoomAPI from '../API/makeRoomAPI';
import 'react-datepicker/dist/react-datepicker.css';
import MakeRoomStyle from '../css/MakeRoomStyle.css'
import DatePicker from "react-datepicker";
import axios from 'axios';
//import $ from 'jquery';


function leftPad(value) {
    if (value >= 10) {
        return value;
    }

    return `0${value}`;
}

function format(source, delimiter = '-') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
}

function MakeRoomPage( {token} ) {
    const [title, setTitle] = useState('');
    let [targetTime, setTargetTime] = useState(new Date());
    const [maxUserNum, setMaxUserNum] = useState(0);
    let [ruleNum, setRuleNum] = useState(9);

    let [roomId, setRoomId] = useState(0);
    let [roomCode, setRoomCode] = useState('');

    const makeRoom = ()  => {

        targetTime = format(targetTime);

        console.log('makeroom 함수 실행됐음');
        console.log(title);
        console.log(targetTime);
        console.log(maxUserNum);
        console.log(ruleNum);

        
        
        axios.post("http://localhost:8000/room/", 
          { 
                title: title,
                target_date: targetTime,
                max_user_num: maxUserNum,
                rule_num: ruleNum,
          },
          { headers: {
            Authorization:`Token ${token}`,
            }
        })
          .then((response) => {
              console.log(response);
              console.log('makeroom res ok');
              if (response !== '') {
                alert('방 만들기 성공');
                setTitle('');
                setMaxUserNum(0);
                setRuleNum(0);  
                setRoomId(roomId = response.data.room_id);
                setRoomCode(roomCode = response.data.room_code);
                console.log(roomId);
                console.log(roomCode);
            }
            else 
                alert('방 만들기 실패');
          })
          .catch(function (error) {
              console.log(error);
              console.log('makeroom에러?');
          });
        }


    const titleHandler = (e) =>  {
        setTitle(e.target.value);
    };

    const maxUserNumHandler = (e) => {
        let people = 0; 
        people = e.target.value;
        setMaxUserNum(people);
    }


    return (
        <div className="RoomPageContainer">
            <h1>새로운 스터디방 만들기</h1>
            <div class="field">
            <ul id="form">
                <li>
                    <label>스터디방 이름</label>
                    <input 
                        name="title" 
                        type="text"
                        placeholder = "방 이름"
                        value={title}
                        onChange={titleHandler}
                    />
                </li>
                <li>
                    <label>스터디방 인원</label>
                    <select 
                    onChange = {maxUserNumHandler}
                    >
                        <option value="1">1인</option>
                        <option value="2">2인</option>
                        <option value="3">3인</option>
                        <option value="4">4인</option>
                        <option value="5">5인</option>
                    </select>
                </li>
                <li>
                    <label>스터디방 마감일(일단 주 단위로 선택해주세요.)</label>
                    <DatePicker 
                        selected={targetTime}
                        dateFormat="yyyy-MM-dd"
                        minDate={new Date()} 
                        onChange={date => (
                            setTargetTime(date)
                        )}
                    />
                </li>
                <li>
                    <label>룰을 선택하세요</label>
                        <button 
                        onClick={() => {setRuleNum(ruleNum=0)}}>
                            룰1
                        </button>
                        <button 
                        onClick={() => {setRuleNum(ruleNum=1)}}>
                            룰2
                        </button>
                </li>
                <button>
                    계속하기
                </button>
            </ul>
                <button 
                    className="mkRoomButton" 
                    onClick={makeRoom}> 방 만들기
                </button>
            </div>
        </div>

    );
}

export default MakeRoomPage;