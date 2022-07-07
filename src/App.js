import React, { useState } from "react";
import "./App.css"
import NavBar from "./NavBar";
import Router from "./Router";

const App = () => {
  const [token, setToken] = useState('');

  return (
    <div className="AppContainer">
      <NavBar token={token} setToken={setToken}/>
      <Router token={token} setToken={setToken}/>
    </div>
  );
};

export default App;
