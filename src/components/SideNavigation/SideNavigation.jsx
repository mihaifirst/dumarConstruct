import React from "react";
import style from "/src/components/SideNavigation/SideNavigation.module.css";
import { useNavigate } from "react-router-dom";
import { removeAuthToken } from "../../helpers/_token";

const SideNavigation = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    removeAuthToken();
    navigate("/auth/login");
  };

  return (
    <>
      <div className={style.container}>
        <button onClick={goToLogin}>Logout</button>
      </div>
    </>
  );
};

export default SideNavigation;
