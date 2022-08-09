import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NftBox.css';
import { HabitType } from '../../consts';
import GoodPet from '../../assets/GoodNft.png'
import BadPet from '../../assets/GoodNft.png'

export default function NftBox({ type }) {
    return (
        <Link to={`/Instructions${type}`} className="NftBoxLink">
            <div className={`${type}NftBox`}>
                <img
                    src={type==='Good' ? GoodPet : BadPet}
                    alt="Evil Pet"
                    className="NftImage"
                />
                <span className="NftBoxText">
                    {type === HabitType.GOOD
                        ? 'Embrace a good habit'
                        : 'Kick a bad habit'}
                </span>
            </div>
        </Link>
    );
}

NftBox.propTypes = {
    type: PropTypes.string,
};
