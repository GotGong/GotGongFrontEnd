import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
//import Navbar from "./Navbar";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import Menubar from "./Menubar";
import Router from "./Router";

const App = () => {
  return (
    <div>
      <Router />
      {/* <SignUp></SignUp> */}
      {/* <Routes>
        <Route path="/" element={Menubar}>
          <Route path="/home" element={Home} />
          <Route path="/sign-up" element={SignUp} />
          <Route path="/login" element={Login} />
        </Route>
      </Routes> */}
    </div>
  );
};

export default App;
