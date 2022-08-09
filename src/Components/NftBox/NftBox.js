import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NftBox.css';
import { HabitContext } from './HabitContext';
import { HabitType } from '../../consts';

export default function NftBox({ type }) {
    return (
        <HabitContext.Consumer>
            {({ chooseGood, chooseBad }) => (
                <Link onClick={type === HabitType.GOOD ? chooseGood : chooseBad} to={`/Instructions${type}`} className="NftBoxLink">
                    <div className={`${type}NftBox`}>
                        <img
                            src={require(`./${type}Nft.png`)}
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
            )}
        </HabitContext.Consumer>
    );
}

NftBox.propTypes = {
    type: PropTypes.string,
};
