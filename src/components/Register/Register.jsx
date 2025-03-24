import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../../styles/Auth.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const defaultFormRegister = {
  username: "alex1",
  email: "alex1@example.com",
  password: "Pass1234",
  fullName: "Alex Va",
};

const Register = () => {
  const [userData, setUserData] = useState(defaultFormRegister);
  const navigate = useNavigate();
  const endpoint = "https://dumar-construct-production.up.railway.app/api";

  const handleRegister = (event) => {
    event.preventDefault();
    fetch(`${endpoint}/users/register`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast(data.message);
        navigate("/auth/login");
      })
      .catch((error) => {
        console.error("Eroare la înregistrare:", error);
        toast(error);
      });
  };

  const onFormFieldValueChange = (event) => {
    const { value, name } = event.target;
    setUserData((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  const advanceToLogin = () => {
    navigate("/auth/login");
  };

  return (
    <>
      <div className={style.authComponent}>
        <div className={style.background}>
          <div className={style.shape}></div>
          <div className={style.shape}></div>
        </div>
        <form className={style.form}>
          <h3>Register Here</h3>

          <div className={style.labels}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              onChange={onFormFieldValueChange}
              name="username"
              value={userData.username}
              className={style.input}
            ></input>

            <label htmlFor="fullName">FullName</label>
            <input
              type="text"
              placeholder="fullName"
              onChange={onFormFieldValueChange}
              name="fullName"
              value={userData.fullName}
              className={style.input}
            ></input>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="email"
              autoComplete="email"
              onChange={onFormFieldValueChange}
              name="email"
              value={userData.email}
              className={style.input}
            ></input>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              autoComplete="current-password"
              onChange={onFormFieldValueChange}
              name="password"
              value={userData.password}
              className={style.input}
            ></input>
          </div>
          <p className={style.text}>
            Already have an account?
            <span className={style.spanText} onClick={advanceToLogin}>
              Go to Login
            </span>
          </p>
          <span className={style.submitButton} onClick={handleRegister}>
            Register
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
