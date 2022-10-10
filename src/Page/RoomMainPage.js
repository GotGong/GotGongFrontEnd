import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
 import axios from "axios";
 import "../css/RoomMainStyle.css";
 import NavBar2 from "../NavBar2.js";
 import { BiBookmark, BiCheckbox} from "react-icons/bi";


 function RoomMainPage() {
   const params = useParams();
  //클릭된 room_id 변수 여기 저장됨
  var num = params.room_id;
  const colorList = ["#FF8D8D", "#90FF8D", "#FF8DF4", "#FCFF64", "#95CCFF"];
  const randomIndex = Math.floor(Math.random() * colorList.length);

   const token = localStorage.getItem("token");

   const [roomList, setRoomList] = useState([]);
   const [usersList, setUsersList] = useState([]);
   const [roomCount, setRoomCount] = useState(0);
   const [usersCount, setUsersCount] = useState(0);
   const [contents, setContents] = useState([]);
   const [detailPlans, setDetailPlans] = useState([]);
   const [plandDay, setPlandDay] = useState(0);
   const [roomdDay, setRoomdDay] = useState(0);
   const [isActive, setIsActive] = useState(true);

   var randomColor = [];
   for (let i = 0; i < 5; i++) {
     var col = colorList.splice(Math.floor(Math.random() * 5), 1)[0];
     if (col != undefined) randomColor.push(col);
     else i -= 1;
   }

   const handleClick = event => {
     setIsActive(current => !current);
   };

   const rooms = [];
   for (let i = 0; i < roomCount; i++) {
     rooms.push(
       <div key={roomList[i].id}>
         <Link to={`/myrooms/${roomList[i].id}`}>
           <button
             className="Title-box"
             style={{ backgroundColor: randomColor[i] }}
           >
             {roomList[i].title}
           </button>
         </Link>
       </div>
     );
   }

   const users = [];
   for (let i = 0; i < usersCount; i++) {
     users.push(
       <div>
         <Link to="/9">
           <button
             className="Title-box"
             style={{backgroundColor:'#EDEDED', color:'black',}}
           >
             {usersList[i].username}
           </button>
         </Link>
       </div>
     );
   }


   useEffect(() => {

     axios
       .get(`http://localhost:8000/room/myroomlist/`, {
         headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setRoomList([]);
        // for (let i = 0; i < response.data.room_count; i++) {
         //   roomList.push(response.data.my_room_list[i].title);
         // }
         setRoomList(response.data.my_room_list);
         setRoomCount(
           response.data.my_room_list.length < 5
             ? response.data.my_room_list.length
             : 5
         );
         console.log(response.data.my_room_list);
       })
       .catch(function (error) {
         console.log(token);
         console.error(error.response);
       });

     axios
       .get(`http://localhost:8000/room/users/${num}/`, {
         headers: {
           Authorization: `Token ${token}`,
         },
       })
       .then((response) => {
         setUsersList([]);
         setUsersList(response.data.room_users_list);
         setUsersCount(response.data.room_user_count);
         console.log(response.data.room_users_list);
       })
       .catch(function (error) {
         console.log(token);
         console.error(error.response);
       });

       axios
       .get(`http://localhost:8000/plan/user_plans/${num}/`, {
         headers: {
           Authorization: `Token ${token}`,
         },
       })
       .then((response) => {
         console.log(response.data);
         var temp = response.data.plan_info;
         for(let i=0; i<temp.length;i++) {
           if (temp[i].plan_status === true) {
             setContents(temp[i].content)
             const dp=[];
             for(let j=0; j<temp[i].detail_plans.length;j++) {
               dp.push(temp[i].detail_plans[j].content)
             }
             console.log(dp)
             setDetailPlans(dp)
           }
         }

       })
       .catch(function (error) {
         console.error(error.response);
       });

       axios
       .get(`http://localhost:8000/plan/content/${num}/`, {
         headers: {
           Authorization: `Token ${token}`,
         },
       })
       .then((response) => {
         console.log(response.data);
         setPlandDay(response.data.plan_dday);
         setRoomdDay(Math.floor(response.data.study_dday/7));

       })
       .catch(function (error) {
         console.error(error.response);
       });
   }, []);



   return (
     <>
      <NavBar2 />
      <div
        className="All"
        style={{
          position: "fixed",
          backgroundColor: "#F5F5F5",
          top: "19%",
          left: "0%",
          width: "100%",
          height: "81%",
        }}
      >
         <div
           className="RoomMainContainer"
           style={{
             display: "grid",
             gridTemplateColumns: "10fr 10fr 30fr 50fr",
             gridTemplateRows: "65fr 35fr",
             height: "100%",
           }}
         >
           <div
            className="RoomList"
            style={{
              backgroundColor: "#D9D9D9",
               height: "100%",
               display: "grid",
               gridRow: "1/3",
               alignContent: "start",
             }}
           >
             {rooms}
           </div>
           <div
             className="UsersList"
             style={{
               backgroundColor: "#BFBFBF",
               display: "grid",
               gridRow: "1/3",
               alignContent: "start",
             }}
           >
             {usersList.map((r) => {
               return (
                 <div key={r.id}>
                   <button
                     className="Title-box"
                     style={{ backgroundColor: "#EDEDED" }}
                   >
                     {r.username}
                   </button>
                 </div>
               );
             })}
          </div>
          <div
            className="ThisWeekPlan"
            style={{
               backgroundColor: "#FFFFFF",
               display: "grid",
               borderRadius: "22px",
               margin: "20px",
             }}
           >
             <div
               style={{
                 backgroundColor: "#D9D9D9",
                 height: "70px",
                 borderRadius: "22px 22px 0px 0px",
                 display: "grid",
                 alignItems: "center",
                 justifyContent: "center",
               }}
             >
               <text>나의 이번주 계획</text>
             </div>

               <text>{<BiBookmark size='30px'/>}{contents}</text>
               <div style={{display:'grid',gridTemplateRows:'repeat(4,1fr)', margin:'30px'}}>
               {detailPlans.map((r) => {
                 return (
                   <div style={{textAlign:'start'}}>
                       {<BiCheckbox size='20px' />}{r}
                   </div>
                 );
               })}
               </div>
           </div>

           <div
             className="OurPlan"
             style={{
               backgroundColor: "#FFFFFF",
               display: "grid",
               borderRadius: "22px 22px 22px 22px",
               margin: "20px",
             }}
           >
             <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', }}>
               <button id='mainbutton'
                 style={{
                   backgroundColor: "#D9D9D9",
                   height: "70px",
                   borderRadius: "22px 0px 0px 0px",
                   display: "grid",
                   alignItems: "center",
                   justifyContent: "center",
                   fontSize:"20px",
                   color:"black",
                 }}
                 className={isActive ? 'activeStyle' : ''}
                 onClick={handleClick}
               >
                 <text>친구들과 나의 계획</text>
               </button>
               <button id='mainbutton'
                 style={{
                   backgroundColor: "#D9D9D9",
                   height: "70px",
                   borderRadius: "0px 22px 0px 0px",
                   display: "grid",
                   alignItems: "center",
                   justifyContent: "center",
                   fontSize:"20px",
                   color:"black",
                 }}
                 className={isActive ? 'activeStyle' : ''}
                 onClick={handleClick}
               >
                 <text>친구들과 나의 수행</text>
               </button>
             </div>
             <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', 
                 }}>
               {users}
             </div>

             <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', justifyItems:'center', alignItems:'center'}}>
               <Link to="/12">
               <button style={{borderRadius:'22px',backgroundColor:'black',color:'white', fontSize:'18px', height:'70px', width: '280px'}}>
                 새 계획 작성하기
               </button>
               </Link>
               <Link to="/11">
               <button style={{borderRadius:'22px',backgroundColor:'black',color:'white', fontSize:'18px', height:'70px', width: '280px'}}>
                 새 수행 작성하기
               </button>
               </Link>
             </div>
           </div>

           <div
             className="dDay"
             style={{
               backgroundColor: "#000000",
               color: "#FFFFFF",
               display: "grid",
               margin: "20px",
               gridTemplateRows: "1fr 1fr",
               borderRadius: "22px",
               alignItems: "center",
               justifyContent: "center",
               border: "thick solid #D9D9D9",
             }}
           >
             <div style={{ borderRadius: "22px 22px 0px 0px", display: "grid" }}>
               <text>이번주 D - {plandDay} 일</text>
             </div>

             <div style={{ borderRadius: "0px 0px 22px 22px", display: "grid" }}>
               <text>스터디 D - {roomdDay} 주</text>
             </div>
           </div>
           <div
             className="QnA"
             style={{
               backgroundColor: "#FFFFFF",
               display: "grid",
               borderRadius: "22px",
               margin: "20px",
             }}
           >
             <div
               style={{
                 backgroundColor: "#D9D9D9",
                 width: "100px",
                 height: "70px",
                 borderRadius: "22px 0px 22px 0px",
                 display: "grid",
                 alignItems: "center",
                 justifyContent: "center",
               }}
             >
               <text>Q&A</text>
             </div>
           </div>
         </div>
       </div>
     </>
   );
 }

 export default RoomMainPage;