import React, {useState } from 'react';
import makeRoomAPI from '../API/makeRoomAPI';
//import DatePicker from "react-datepicker";
import {ko} from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css';
import MakeRoomStyle from '../css/MakeRoomStyle.css'
import DatePicker from "react-datepicker";


function MakeRoomPage( {token} ) {
    const [title, setTitle] = useState('');
    const [targetTime, setTargetTime] = useState(new Date());
    const [maxUserNum, setMaxUserNum] = useState(0);
    const [ruleNum, setRuleNum] = useState(0);

    const [roomId, setRoomId] = useState(0);
    const [roomCode, setRoomCode] = useState('');

    const makeRoom = () => {
        makeRoomAPI(title, targetTime, maxUserNum,ruleNum)
        .then((response)=> {
            if (response !== '') {
                alert('방 만들기 성공');
                setTitle('');
                setMaxUserNum(0);
                setRuleNum(0);  
                setRoomId(response.data.room_id);
                setRoomCode(response.data.room_code);
                console.log(roomId);
                console.log(roomCode);
            }
            else 
                alert('방 만들기 실패');
        });
    }

    const titleHandler = (e) =>  {
        setTitle(e.target.value);
    };
    // const targetTimeHandler = (e) =>  {
    //     setTargetTime(e.target.value);
    //  };
    const maxUserNumHandler = (e) => {
        let people = 0; 
        people = e.target.value;
        setMaxUserNum(people);
    }
    // const ruleNumHandler = () => {
    //     if(ruleNum == 1 ){

    //     }
    //     else if(ruleNum == 2){

    //     }
    // }

    return (
        <div className="RoomPageContainer">
            <h1>MakeRoomPage입니다.</h1>
            <h2>방 규칙 정하기</h2>
            <div class="field">
            <ul id="form">
                <li>
                    <label>스터디방 이름</label>
                    <input 
                    name="title" 
                    type="text" 
                    value={title}
                    onChange={() => {titleHandler()}}
                    />
                </li>
                <li>
                    <label>스터디방 인원</label>
                    <select onChange = {maxUserNumHandler}>
                        <option value="1">1인</option>
                        <option value="2">2인</option>
                        <option value="3">3인</option>
                        <option value="4">4인</option>
                        <option value="5">5인</option>
                    </select>
                </li>
                <li>
                    <label>스터디방 마감일</label>
                    <DatePicker 
                    selected={targetTime} 
                    onChange={date => setTargetTime(date)}
                    />
                </li>
                <li>
                    <label>룰을 선택하세요</label>
                        <button 
                        onClick={setRuleNum(1)}>
                            룰1
                        </button>
                        <button 
                        onClick={setRuleNum(2)}>
                            룰2
                        </button>
                </li>
                <button>
                    계속하기
                </button>
                {/* <li>
                    <label>계획 50% 불이행시 벌금</label>
                    <select>
                        <option value="5000">오천원</option>
                        <option value="10000">만원</option>
                        <option value="15000">만오천원</option>
                    </select>
                </li>  */}
                <li>
                {/* <label>계획 100% 불이행시 벌금</label>
                <select>
                    <option value="5000">오천원</option>
                    <option value="10000">만원</option>
                    <option value="15000">만오천원</option>
                </select> */}
                </li>
            {/* <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                selected={startTime}
                onChange={(date) => startTimeHandler(date)}
                //selectsStart
                startDate={startTime}
                endDate={targetTime}
            />
            <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                selected={targetTime}
                onChange={(date) => targetTimeHandler(date)}
                //selectsStart
                startDate={targetTime}
                minDate={startTime}
            /> */}
            {/* <li>
                <label>계획 주기</label>
                <select>
                    <option value="7">1주일</option>
                    <option value="14">2주일</option>
                    <option value="21">3주일</option>
                    <option value="28">4주일</option>
                </select>
            </li>
            <li>
                <label>계획 이행 반대 퍼센트</label>
                <select>
                    <option value="0.3">30%</option>
                    <option value="0.5">50%</option>
                    <option value="0.7">70%</option>
                </select>
            </li> */}
            </ul>
                <button className="mkRoomButton" onClick={() => {
                    makeRoom();
                }}>
                    방 만들기
                </button>
            </div>
        </div>

    );
}

export default MakeRoomPage;