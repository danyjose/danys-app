import React, { useState } from "react";
import { useNavigate, Link } from "@reach/router";

import Input from "../Input/Input";
import Button from "../Button/Button";
import "./loginview.scss";

const Login = ({ setLoggedin }) => {
  const [formState, setFormState] = useState({
    userName: "",
    password: "",
    isRemembered: false
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, checked } = e.target;
    setFormState({
      ...formState,
      [name]: checked ? checked : value
    });
  };
  const onLogin = event => {
    event.preventDefault();
    if (formState.userName !== "danyjose" || formState.password !== "1234") {
      setError("Username or password is incorrect!");
      setTimeout(function () {
        setError("");
      }, 3000);
    } else {
      setFormState({});
      setLoggedin(true);
      navigate("/");
    }
  };
  return (
    <div className="login-panel">
      <h1 className="login-header">Login</h1>
      <p>TEST1</p>
      <p>
        Don't have an account?
        <Link className="link-style" to="/login/createAccount">
          {" "}
          Create an account
        </Link>
        , it takes less than a minute.
      </p>
      <form onSubmit={onLogin}>
        <p className="login-error">{error}</p>
        <Input
          className="login-input"
          type="text"
          placeholder="Username"
          value={formState.userName}
          name="userName"
          onChange={handleChange}
          validateField={false}
        />
        <Input
          className="login-input"
          type="Password"
          placeholder="Password"
          value={formState.password}
          name="password"
          onChange={handleChange}
          validateField={false}
        />
        <div>
          <div className="login-remember-me">
            <input
              name="isRemembered"
              type="checkbox"
              value={formState.isRemembered}
              onChange={handleChange}
            />
            Remember me
          </div>
          <div>
            <Link to="/login/resetPassword" className="login-forgot-pass">
              Forgot Password?
            </Link>
          </div>
        </div>
        <Button className="login-button" text="Login" />
      </form>
    </div>
  );
};
export default Login;
