import React, {useState } from 'react';
import makeRoomAPI from '../API/makeRoomAPI';
//import DatePicker from "react-datepicker";
import {ko} from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css';
import MakeRoomStyle from '../css/MakeRoomStyle.css'

function MakeRoomPage() {
    const [title, setTitle] = useState('');
    const [targetTime, setTargetTime] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [planHalfFee, setPlanHalfFee] = useState('');
    const [planNoFee, setPlanNoFee] = useState('');
    const [maxUserNum, setMaxUserNum] = useState('');
    const [planPeriod, setPlanPeriod] = useState('');
    const [negativePercent,setNegativePercent] = useState('');
    
    const makeRoom = () => {
        makeRoomAPI(title, targetTime, startTime, 
            planHalfFee, planNoFee, maxUserNum, 
            planPeriod, negativePercent)
        .then((response)=> {
            if (response !== '') {
                alert('방 만들기 성공');
                setTitle('');
                setTargetTime('');
                setStartTime('');
                setPlanHalfFee('');
                setPlanNoFee('');
                setMaxUserNum('');
                setPlanPeriod('');
                setNegativePercent('');
            }
            else 
                alert('방 만들기 실패');
        });
    }

    const titleHandler = (e) =>  {
        setTitle(e.target.value);
    };
    const targetTimeHandler = (e) =>  {
        setTargetTime(e.target.value);
     };
    const startTimeHandler = (e) =>  {
        setStartTime(e.target.value);
    };
    const planHalfFeeHandler = (e) =>  {
        setPlanHalfFee(e.target.value);
    };
    const planNoFeeHandler = (e) =>  {
        setPlanNoFee(e.target.value);
    };
    const maxUserNumHandler = (e) =>  {
        setMaxUserNum(e.target.value);
    };
    const planPeriodHandler = (e) =>  {
        setPlanPeriod(e.target.value);
    };
    const negativePercentHandler = (e) =>  {
        setNegativePercent(e.target.value);
    };

    return (
        <div className="RoomPageContainer">
            <h1>MakeRoomPage입니다.</h1>
            <h2>방 규칙 정하기</h2>
            <div class="field">
            <ul id="form">
                <li>
                    <label>방 이름</label>
                    <input 
                    name="title" 
                    type="text" 
                    value={title}
                    onChange={titleHandler}
                    />
                </li>
                <li>
                    <label>계획 50% 불이행시 벌금</label>
                    <select>
                        <option value="5000">오천원</option>
                        <option value="10000">만원</option>
                        <option value="15000">만오천원</option>
                    </select>
                </li> 
                <li>
                <label>계획 100% 불이행시 벌금</label>
                <select>
                    <option value="5000">오천원</option>
                    <option value="10000">만원</option>
                    <option value="15000">만오천원</option>
                </select>
            </li>
            <li>
            <label>최대 인원 수</label>
                <input 
                name="maxUserNum" 
                type="text" 
                value={maxUserNum}
                onChange={maxUserNumHandler}
                />
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
            <li>
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
            </li>
            </ul>
                <button className="mkRoomButton" onClick={makeRoom}>
                    방 만들기
                </button>
            </div>
        </div>

    );
}

export default MakeRoomPage;