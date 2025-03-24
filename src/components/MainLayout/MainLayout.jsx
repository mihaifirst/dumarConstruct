import React from "react";
import style from "/src/components/MainLayout/MainLayout.module.css";

const MainLayout = ({ title, children }) => {
  return (
    <div className={style.mainContainer}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default MainLayout;
