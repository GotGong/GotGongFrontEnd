import React from "react";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./Page/SignInPage";
import SignUpPage from "./Page/SignUpPage";
import SettingPage from "./Page/SettingPage";
import RoomHomePage from "./Page/RoomHomePage";
import MakeRoomPage from "./Page/MakeRoomPage";
import RoomCodeEnterPage from "./Page/RoomCodeEnterPage";
import RoomRulePage from "./Page/RoomRulePage";
import RoomMainPage from "./Page/RoomMainPage";
import ShowPlanPage from './Page/ShowPlanPage';

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
        element={<RoomCodeEnterPage token={token} setToken={setToken} />}
      />
      <Route
        path="/rule"
        element={<RoomRulePage token={token} setToken={setToken} />}
      />
      <Route
        path="/myrooms"
        element={<RoomMainPage token={token} setToken={setToken} />}
      />
      <Route
        path="/myplan"
        element={<ShowPlanPage token={token} setToken={setToken} />}
        />
    </Routes>
  );
};

export default Router;
