import React from "react";
import { Link } from "react-router-dom";
import "./header.component.css";

export default () => {
  return (
    <div className="header-container">
      <Link to="/add">Add Users</Link>
      <Link to="/users">Users</Link>

      <label className="header-title">SSR REDUX LAZYLOAD</label>
    </div>
  );
};
