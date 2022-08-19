import React, { useState, UseNavigate } from "react";
import { Link } from "react-router-dom";
// import makeRoomAPI from '../API/makeRoomAPI';
import "react-datepicker/dist/react-datepicker.css";
import MakeRoomStyle from "../css/MakeRoomStyle.css";
import DatePicker from "react-datepicker";
import axios from "axios";
//import $ from 'jquery';
import { useNavigate } from "react-router-dom";
import NavBar1 from "../NavBar1.js";

function leftPad(value) {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
}

function format(source, delimiter = "-") {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());

  return [year, month, day].join(delimiter);
}

function MakeRoomPage({ token }) {
  const [title, setTitle] = useState("");
  let [targetTime, setTargetTime] = useState(new Date());
  const [maxUserNum, setMaxUserNum] = useState(0);
  let [ruleNum, setRuleNum] = useState(9);

  let [roomId, setRoomId] = useState(0);
  let [roomCode, setRoomCode] = useState("");
  let [entryfee, setEntryfee] = useState(0);

  const makeRoom = () => {
    targetTime = format(targetTime);

    console.log("makeroom 함수 실행됐음");
    console.log(title);
    console.log(targetTime);
    console.log(maxUserNum);
    console.log(ruleNum);
    console.log(entryfee);

    axios
      .post(
        "http://localhost:8000/room/",
        {
          title: title,
          target_date: targetTime,
          max_user_num: maxUserNum,
          rule_num: ruleNum,
          entry_fee: entryfee,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log("makeroom res ok");
        if (response !== "") {
          alert("방 만들기 성공");
          setTitle("");
          setMaxUserNum(0);
          setRuleNum(0);
          setEntryfee(0);
          setRoomId((roomId = response.data.room_id));
          setRoomCode((roomCode = response.data.room_code));
          console.log(roomId);
          console.log(roomCode);
        } else alert("방 만들기 실패");
      })
      .catch(function (error) {
        console.log(error);
        console.log("makeroom에러?");
      });
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const maxUserNumHandler = (e) => {
    let people = 0;
    people = e.target.value;
    setMaxUserNum(people);
  };

  const step0 = document.querySelector("#step0");
  const step1 = document.querySelector("#step1");
  const step2 = document.querySelector("#step2");
  const step3 = document.querySelector("#step3");

  let [step, setStep] = useState(0);

  function goStep1() {
    setStep((step = 1));
    setEntryfee((entryfee = 20000));
    step0.style.display = "none";
    step1.style.display = "block";
  }

  function goStep2() {
    setStep((step = 2));
    step1.style.display = "none";
    step2.style.display = "block";
  }

  function goStep3() {
    setStep((step = 3));
    step2.style.display = "none";
    step3.style.display = "block";
  }

  // let endpoint = 4;

  // function goNext(step) {
  //     if (step == 2) {
  //         step1.style.WebkitAnimation = "fadeOut 1s";
  //         step1.style.animation = "fadeOut 1s";

  //         step2.style.WebkitAnimation = "fadeIn 1s";
  //         step2.style.animation = "fadeIn 1s";

  //         step1.style.display = "none";
  //         step2.style.display = "block";
  //     }
  //     else if (step ==3) {
  //         step2.style.WebkitAnimation = "fadeOut 1s";
  //         step2.style.animation = "fadeOut 1s";

  //         step3.style.WebkitAnimation = "fadeIn 1s";
  //         step3.style.animation = "fadeIn 1s";

  //         step2.style.display = "none";
  //         step3.style.display = "block";
  //     }
  //     else if(step == endpoint){
  //         // 계속하기 -> 방만들기
  //         return;
  //     }

  // }

  return (
    <>
      <NavBar1 />
      <div className="MakeRoomPageContainer">
        <div className="field">
          <div id="step0">
            <p>이 스터디방의 참가비는 20000원입니다.</p>
            <p>방장의 계좌로 20000원을 송금해주세요.</p>

            <button onClick={goStep1}>알겠습니다</button>
          </div>
          <div id="step1">
            <div className="options">
              <h2>새로운 스터디방 만들기</h2>
              <label>스터디방 이름</label>
              <input
                id="input-box"
                name="title"
                type="text"
                // placeholder = "방 이름"
                value={title}
                onChange={titleHandler}
              />
            </div>
            <div className="options">
              <label>스터디방 인원</label>
              <select id="select-box" onChange={maxUserNumHandler}>
                <option value="3">3인</option>
                <option value="4">4인</option>
                <option value="5">5인</option>
                <option value="6">6인</option>
              </select>
            </div>
            <button className="cntinuBtn" onClick={goStep2}>
              계속하기
            </button>
          </div>
          <div id="step2">
            <label>스터디방 일정을 설정하세요</label>
            <div className="options">
              <DatePicker
                id="select-box"
                selected={targetTime}
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                onChange={(date) => (setTargetTime(date), setStep((step = 3)))}
              />
            </div>
            <button className="cntinuBtn" onClick={goStep3}>
              계속하기
            </button>
          </div>
          <div id="step3">
            <label>룰을 선택하세요</label>
            <div className="choice-rule">
              <button
                className="rule"
                onClick={() => {
                  setRuleNum((ruleNum = 0));
                }}
              >
                1등 200%, 2~5등 100%, 6등 0% 환급
              </button>
              <button
                className="rule"
                onClick={() => {
                  setRuleNum((ruleNum = 1));
                }}
              >
                1등 180%, 2~5등 90%, 6등 60% 환급
              </button>
            </div>
            <button className="mkRoomBtn" onClick={makeRoom}>
              방 만들기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MakeRoomPage;
