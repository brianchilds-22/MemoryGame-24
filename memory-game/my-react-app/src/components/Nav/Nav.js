import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="header">Current Score: {props.score}</li>
      <li id="highScore">Top Score: {props.highScore}</li>
    </ul>
  </nav>
 );
    
export default Nav;