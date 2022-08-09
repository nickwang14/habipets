import { React, Image } from "react";
import "./NftBox.css";

export default function NftBox(props) {
  const goodHabit = props.type;
  if (goodHabit) {
    return (
      <div className="GoodNftBox">
        <img
          src={require("./GoodNft.png")}
          alt="Evil Pet"
          className="NftImage"
        />
        <span className="NftBoxText">Embrace a good habit</span>
      </div>
    );
  } else {
    return (
      <div className="BadNftBox">
        <img src={require("./BadNft.png")} />
        <span className="NftBoxText">Fly away from a bad habit</span>
      </div>
    );
  }
}
