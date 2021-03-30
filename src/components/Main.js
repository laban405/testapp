import React from "react";
import "./Main.css";
import Logo from "./Logo";

const Main = ({ setMode, setActiveItem }) => {
  const handleClick = (click) => {
    setMode(click.target.value);
    setActiveItem("");
  };
  return (
    <div className="main">
      <Logo />
      <div className="radioDiv">
        <div>
          <input
            type="radio"
            id="appmode"
            name="app"
            value="appmode"
            onClick={(e) => handleClick(e)}
            defaultChecked
          />
          <label htmlFor="appmode">App Mode</label>{" "}
        </div>
        <div>
          <input
            type="radio"
            id="adminmode"
            name="app"
            value="adminmode"
            onClick={(e) => handleClick(e)}
          />
          <label htmlFor="adminmode">Admin Mode</label>{" "}
        </div>
      </div>
    </div>
  );
};

export default Main;
