import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div id="wrapper">
      <div id="info">
        <h1>404 Error Page</h1>
        <p>Sorry , This Page Doesn't Exist</p>
        <NavLink to="/" id="us">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
