import React from "react";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./Page/SignInPage";
import SignUpPage from "./Page/SignUpPage";
import SettingPage from "./Page/SettingPage";
import RoomHomePage from "./Page/RoomHomePage";
import MakeRoomPage from  "./Page/MakeRoomPage";
import RoomCodeEnterPage from "./Page/RoomCodeEnterPage";
import RoomEnterPage from "./Page/RoomEnterPage";

const Router = ({token, setToken}) => {

  return (
    <Routes>
      <Route path="/" element={<SignInPage token={token} setToken={setToken}/>}/>
      <Route path="/signup" element={<SignUpPage setToken={setToken}/>}/>
      <Route path="/setting" element={<SettingPage token={token} setToken={setToken}/>}/>
      <Route path="/room" element={<RoomHomePage setToken={setToken}/>}/>
      <Route path="/mkroom" element={<MakeRoomPage setToken={setToken}/>}/>
      <Route path="/enterbycode" element={<RoomCodeEnterPage token={token} setToken={setToken}/>}/>
      <Route path="/enter" element={<RoomEnterPage token={token} setToken={setToken}/>}/>
    </Routes>
  );
};

export default Router;
