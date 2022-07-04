import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
//import Navbar from "./Navbar";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import Menubar from "./Menubar";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};
export default Router;
