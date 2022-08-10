import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NftBox.css';
import  Context  from 'ContextProvider';
import { HabitType } from 'consts';
import GoodPet from 'assets/GoodNft.gif'
import BadPet from 'assets/BadNft.gif'

export default function NftBox({ type }) {
    return (
        <Context.Consumer>
            {({ setHabitType }) => (
                <div className="NftBoxContainer">
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
        </Context.Consumer>
    );
}

NftBox.propTypes = {
    type: PropTypes.string,
};