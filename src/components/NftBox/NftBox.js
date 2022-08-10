import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NftBox.css';
import { AppContext } from 'ContextProvider';
import { HabitType } from 'consts';
import GoodPet from 'assets/GoodNft.png'
import BadPet from 'assets/BadNft.png'

export default function NftBox({ type }) {
    return (
        <AppContext.Consumer>
            {({ pickHabitType }) => (
                <div className="NftBoxContainer">
                    <Link
                        to={'/Instructions'}
                        onClick={() => pickHabitType(type)}
                        className="NftBoxLink"
                    >
                        <div className='NftBox'>
                            <img
                                src={type === HabitType.GOOD ? GoodPet : BadPet}
                                alt={`${type} Pet`}
                                className="NftImage"
                            />
                            <div className="NftBoxTextDiv">
                                <span className="NftBoxText">
                                    {type === HabitType.GOOD
                                        ? 'Embrace a good habit'
                                        : 'Kick a bad habit'}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </AppContext.Consumer>
    );
}

NftBox.propTypes = {
    type: PropTypes.string,
};