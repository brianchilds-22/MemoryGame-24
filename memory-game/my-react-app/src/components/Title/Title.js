import React from "react";
import "./Title.css";

const Title = (props) => <h1 className="title">{props.children}</h1>;
// const Title = () => (
//   <div className="title">
//     <h1 className="main-title">Tipsy Memory</h1>
//     <h1 className="sub-title">
//   </div>
// );

export default Title;
