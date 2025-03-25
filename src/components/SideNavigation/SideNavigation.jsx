import React from "react";
import style from "/src/components/SideNavigation/SideNavigation.module.css";
import { useNavigate } from "react-router-dom";
import { removeAuthToken } from "../../helpers/_token";
import { Link } from "react-router-dom";

const SideNavigation = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    removeAuthToken();
    navigate("/auth/login");
  };

  return (
    <>
      <div className={style.container}>
        <ul className={style.list}>
          <li>
            <Link to="/dashboard/categories">Categorii</Link>
          </li>
          <li>
            <Link to="/dashboard/products">Gestiune produse</Link>
          </li>
          <li>
            <Link to="/dashboard/prices">Lista de preturi</Link>
          </li>
          <li>
            <Link to="/dashboard/blog">Blog</Link>
          </li>
        </ul>
        <button onClick={goToLogin}>Logout</button>
      </div>
    </>
  );
};

export default SideNavigation;
