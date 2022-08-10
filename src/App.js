import React, { useState } from "react";
import "./App.css"
import NavBar from "./NavBar";
import Router from "./Router";
import Header from  "./Header";

const App = () => {
  const [token, setToken] = useState('');

  return (
    <div>
      <div className="AppContainer">
        {/* <NavBar token={token} setToken={setToken}/> */}
        <Header token={token} setToken={setToken}/>
        <Router token={token} setToken={setToken}/>
      </div>
    </div>
  );
};

export default App;
