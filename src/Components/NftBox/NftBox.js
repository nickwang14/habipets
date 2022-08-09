import { BrowserRouter as Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NftBox.css';
import { HabitType } from '../../consts';

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

NftBox.propTypes = {
    type: PropTypes.string,
};
