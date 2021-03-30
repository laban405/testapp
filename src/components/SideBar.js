import React from "react";
import "./SideBar.css";

const adminNav = ["AdminEntry1", "AdminEntry2", "AdminEntry3"];
const mainNav = ["Entry1", "Entry2", "Entry3", "Entry4", "Entry5"];

const SideBar = ({ mode, activeItem, setActiveItem }) => {
  return (
    <div className={`sidebar ${mode === "appmode" ? "appMode" : ""}`}>
      <ul>
        {mode === "appmode"
          ? mainNav.map((item) => {
              return (
                <li
                  onClick={() => setActiveItem(mainNav.indexOf(item))}
                  key={item}
                  className={`${
                    activeItem === mainNav.indexOf(item) ? "activeItem" : ""
                  }`}
                >
                  {item}
                </li>
              );
            })
          : adminNav.map((item) => {
              return (
                <li
                  onClick={() => setActiveItem(adminNav.indexOf(item))}
                  key={item}
                  className={`${
                    activeItem === adminNav.indexOf(item) ? "activeItem" : ""
                  }`}
                >
                  {item}
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default SideBar;
