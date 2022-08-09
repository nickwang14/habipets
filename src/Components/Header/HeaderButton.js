import React from "react";
import "./Header.css";

function HeaderButton(props) {
  return (
    <div className="HeaderButton">
      <p>{props.txt}</p>
    </div>
  );
}

export default HeaderButton;
