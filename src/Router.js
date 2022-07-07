import React from "react";
import { Route, Routes } from "react-router-dom";
//import Navbar from "./Navbar";
import HomePage from "./Page/HomePage";
import SignInPage from "./Page/SignInPage";
import SignUpPage from "./Page/SignUpPage";
import SettingPage from "./Page/SettingPage";

const Router = ({token, setToken}) => {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<SignUpPage setToken={setToken}/>}/>
      <Route path="/signin" element={<SignInPage setToken={setToken}/>}/>
      <Route path="/setting" element={<SettingPage token={token} setToken={setToken}/>}/>
    </Routes>
  );
};

export default Router;
