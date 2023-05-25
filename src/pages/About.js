import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <div>
        <ul className="subtabnav">
          <li>
            <NavLink to="myinfo">My Info</NavLink>
            <NavLink to="myskills">My Skills</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}

export default About;
