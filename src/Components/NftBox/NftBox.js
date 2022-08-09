import { React } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NftBox.css";

export default function NftBox(props) {
  const goodHabit = props.type;
  if (goodHabit) {
    return (
      <Link to="/GoodHabit" className="NftBoxLink">
        <div className="GoodNftBox">
          <img
            src={require("./GoodNft.png")}
            alt="Evil Pet"
            className="NftImage"
          />
          <span className="NftBoxText">Embrace a good habit</span>
        </div>
      </Link>
    );
  } else {
    return (
      <Link to="/BadHabit" className="NftBoxLink">
        <div className="BadNftBox">
          <img src={require("./BadNft.png")} />
          <span className="NftBoxText">Fly away from a bad habit</span>
        </div>
      </Link>
    );
  }
}
