import React from "react";
import { useDispatch } from "react-redux";
import { auth_actions } from "../store/auth-slice";

import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(auth_actions.logIn());
  };
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
