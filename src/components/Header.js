import React from "react";
import { useDispatch } from "react-redux";
import { auth_actions } from "../store/auth-slice";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(auth_actions.logOut());
  };
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button className="logout-button" onClick={logOut}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
