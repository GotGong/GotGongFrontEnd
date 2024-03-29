import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./Page/SignInPage";
import SignUpPage from "./Page/SignUpPage";
import SettingPage from "./Page/SettingPage";
import RoomHomePage from "./Page/RoomHomePage";
import MakeRoomPage from "./Page/MakeRoomPage";
import RoomCodeEnterModal from "./Page/RoomCodeEnterModal";
import RoomRulePage from "./Page/RoomRulePage";
import RoomMainPage from "./Page/RoomMainPage";
import Page11 from "./Page/Page11";
import Page12 from "./Page/Page12";
import Page9 from "./Page/Page9";
import Page10 from "./Page/Page10";
import RefundShow from "./Page/RefundShowPage";
import Ranking from "./Page/RankingPage";

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
      <Route path="/9" element={<Page9 token={token} setToken={setToken} />} />
      <Route path="/10" element={<Page10 token={token} setToken={setToken} />} />
      <Route path="/11" element={<Page11 token={token} setToken={setToken} />} />
      <Route path="/12" element={<Page12 token={token} setToken={setToken} />} />
      <Route path="/refund" element={<RefundShow token={token} setToken={setToken} />} />
      <Route path="/rank" element={<Ranking token={token} setToken={setToken} />} />
    </Routes>
  );
};

export default Router;
