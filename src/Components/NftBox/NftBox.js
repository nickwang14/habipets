import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NftBox.css';
import { HabitContext } from '../../HabitContext';
import { HabitType } from '../../consts';
import GoodPet from '../../assets/GoodNft.png'
import BadPet from '../../assets/BadNft.png'

export default function NftBox({ type }) {
    return (
        <HabitContext.Consumer>
            {({ setHabitType }) => (
                <div>
                    <Link
                        to={'/Instructions'}
                        onClick={() => setHabitType(type)}
                        className="NftBoxLink"
                    >
                        <div className='NftBox'>
                            <img
                                src={type === HabitType.GOOD ? GoodPet : BadPet}
                                alt={`${type} Pet`}
                                className="NftImage"
                            />
                            <span className="NftBoxText">
                                {type === HabitType.GOOD
                                    ? 'Embrace a good habit'
                                    : 'Kick a bad habit'}
                            </span>
                        </div>
                    </Link>
                </div>
            )}
        </HabitContext.Consumer>
    );
}

NftBox.propTypes = {
    type: PropTypes.string,
};