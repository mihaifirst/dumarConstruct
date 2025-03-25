import React from "react";
import style from "/src/components/SideNavigation/SideNavigation.module.css";
import { useNavigate } from "react-router-dom";
import { removeAuthToken } from "../../helpers/_token";
import { Link } from "react-router-dom";
import { TbFoldersFilled } from "react-icons/tb";

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
            <TbFoldersFilled />
            <Link to="/dashboard/categories" className={style.listItem}>
              Categorii
            </Link>
          </li>
          <li>
            <TbFoldersFilled />
            <Link to="/dashboard/products" className={style.listItem}>
              Gestiune produse
            </Link>
          </li>
          <li>
            <TbFoldersFilled />
            <Link to="/dashboard/prices" className={style.listItem}>
              Lista de preturi
            </Link>
          </li>
          <li>
            <TbFoldersFilled />
            <Link to="/dashboard/blog" className={style.listItem}>
              Blog
            </Link>
          </li>
        </ul>
        <button onClick={goToLogin}>Logout</button>
      </div>
    </>
  );
};

export default SideNavigation;
