import React, { useState } from "react";
import "./App.css"
import Router from "./Router";


const App = () => {
  const [token, setToken] = useState('');

  return (
    <div>
      <div className="AppContainer">
        {/* <NavBar token={token} setToken={setToken}/> */}
        {/* <Header token={token} setToken={setToken}/> */}
        <Router token={token} setToken={setToken}/>
      </div>
    </div>
  );
};

export default App;
