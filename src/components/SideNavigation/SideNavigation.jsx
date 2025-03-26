import React, { useState } from "react";
import style from "/src/components/SideNavigation/SideNavigation.module.css";
import { useNavigate } from "react-router-dom";
import { removeAuthToken } from "../../helpers/_token";
import { Link } from "react-router-dom";
import { TbFoldersFilled } from "react-icons/tb";
import { MdGridOn } from "react-icons/md";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaPager } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import dumarConstruct from "../../assets/dumarConstruct.png";

const SideNavigation = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const goToLogin = () => {
    removeAuthToken();
    navigate("/auth/login");
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className={style.sidebar}>
        <div>
          <img
            src={dumarConstruct}
            alt="Dumar Construct Image"
            className={style.sidebar__image}
          />
        </div>
        <ul className={style.list}>
          <li
            className={`${style.list__item} ${
              selectedItem === "categories" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("categories")}
          >
            <TbFoldersFilled size={20} />
            <Link to="/dashboard/categories" className={style.list__link}>
              Categorii
            </Link>
          </li>
          <li
            className={`${style.list__item} ${
              selectedItem === "products" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("products")}
          >
            <MdGridOn size={20} />
            <Link to="/dashboard/products" className={style.list__link}>
              Gestiune produse
            </Link>
          </li>
          <li
            className={`${style.list__item} ${
              selectedItem === "prices" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("prices")}
          >
            <HiMiniPencilSquare size={20} />
            <Link to="/dashboard/prices" className={style.list__link}>
              Lista de preturi
            </Link>
          </li>
          <li
            className={`${style.list__item} ${
              selectedItem === "blog" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("blog")}
          >
            <FaPager size={20} />
            <Link to="/dashboard/blog" className={style.list__link}>
              Blog
            </Link>
          </li>
        </ul>
        <div className={style.sidebar__logout}>
          <IoLogOut size={20} />
          <Link onClick={goToLogin} className={style.list__link}>
            Deconecteaza-te
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideNavigation;
