import PropTypes from 'prop-types';
import './Instructions.css';
import { Header } from '../../Exports';
import { Link } from 'react-router-dom';

export default function Instructions(props) {
    return (
        <div>
            <Header title={'HabiPets'} />
            <h1 className="Title">Select a {props.value} Habit</h1>
            <p className="Body">Placeholder Instructions</p>
            <div className="NextPageBox">
                <Link to={'/Goal'}>Enter your Habit Details-&gt;</Link>
            </div>
        </div>
    );
}

Instructions.propTypes = {
    value: PropTypes.string,
};
