import React from "react";
import style from "../../styles/Auth.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../../helpers/_token";

const defaultFormRegister = {
  email: "alex123@example.com",
  password: "Pass1234",
};

const Login = () => {
  const [userData, setUserData] = useState(defaultFormRegister);
  const navigate = useNavigate();

  const endpoint = "https://dumar-construct-production.up.railway.app/api";

  const handleLogin = (event) => {
    event.preventDefault();
    fetch(`${endpoint}/users/login`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAuthToken(data.token);
        toast.success("Login successfull");
        navigate("/dashboard");
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

  const advanceToRegister = () => {
    navigate("/auth/register");
  };
  return (
    <>
      <div className={style.authComponent}>
        <div className={style.background}>
          <div className={style.shape}></div>
          <div className={style.shape}></div>
        </div>
        <form className={style.form}>
          <h3>Login Here</h3>

          <div className={style.labels}>
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
            Create an account
            <span className={style.spanText} onClick={advanceToRegister}>
              here
            </span>
          </p>
          <span className={style.submitButton} onClick={handleLogin}>
            Login
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
