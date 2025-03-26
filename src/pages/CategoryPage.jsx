import React from "react";
import style from "../styles/Page.module.scss";
import { IoSearchSharp } from "react-icons/io5";

const CategoryPage = () => {
  return (
    <div className={style.main}>
      <h1 className={style.main__title}>CategoryPage</h1>
      <p className={style.main__subtitle}>
        Vezi categoriile de produse si fa modificari!
      </p>
      <div className={style.main__searchBox}>
        <input
          className={style.main__searchBox__input}
          type="text"
          name=""
          id=""
          placeholder="Cauta"
        />
        <IoSearchSharp size={20} />
      </div>
    </div>
  );
};

export default CategoryPage;
