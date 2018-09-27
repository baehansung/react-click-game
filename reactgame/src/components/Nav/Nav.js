import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="">
        {props.title}
      </li>
      <li id="current-score">Current Score: {props.score}</li>
      <li id="high-score">High Score: {props.highScore}</li>
      <li id="status">{props.status}</li>
    </ul>
  </nav>
);

export default Nav;