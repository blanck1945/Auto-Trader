import React from "react";
import Navigation from "./Navigation";

const Nav = (props) => {
  return (
    <>
      <div className="navbar">
        <h1>Auto Trader</h1>
        <Navigation />
      </div>
      {props.children}
    </>
  );
};

export default Nav;
