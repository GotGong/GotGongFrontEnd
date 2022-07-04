import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Menubar = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Menubar;
