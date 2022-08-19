import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./Page/SignInPage";
import SignUpPage from "./Page/SignUpPage";
import SettingPage from "./Page/SettingPage";
import RoomHomePage from "./Page/RoomHomePage";
import MakeRoomPage from "./Page/MakeRoomPage";
import RoomCodeEnterModal from "./Page/RoomCodeEnterModal";
import RoomRulePage from "./Page/RoomRulePage";
import RoomMainPage from "./Page/RoomMainPage";
import ShowPlanPage from './Page/ShowPlanPage';
import Page12 from "./Page/Page12";
import Page9 from "./Page/Page9";
import RefundShow from "./Page/RefundShowPage";


const Router = ({ token, setToken }) => {


  return (
    <Routes>
      <Route
        path="/"
        element={<SignInPage token={token} setToken={setToken} />}
      />
      <Route path="/signup" element={<SignUpPage setToken={setToken} />} />
      <Route
        path="/setting"
        element={<SettingPage token={token} setToken={setToken} />}
      />
      <Route path="/room" element={<RoomHomePage token={token} />} />
      <Route path="/mkroom" element={<MakeRoomPage token={token} />} />
      <Route
        path="/enterbycode"
        element={<RoomCodeEnterModal token={token} setToken={setToken} />}
      />
      <Route
        path="/rule"
        element={<RoomRulePage token={token} setToken={setToken} />}
      />
      <Route
        path="/myrooms/:room_id"
        element={<RoomMainPage token={token} setToken={setToken} />}
      />
      <Route
        path="/plans"
        element={<ShowPlanPage token={token} setToken={setToken} />}
        />
    
      <Route
        path="/12"
        element={<Page12/>}
      />
      <Route
        path="/9"
        element={<Page9/>}
      />
      <Route
        path="/refund"
        element={<RefundShow/>}
      />
    </Routes>
  );
};

export default Router;
