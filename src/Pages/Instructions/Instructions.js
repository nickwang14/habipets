import PropTypes from 'prop-types';
import './Instructions.css';
import { Header } from '../../Exports';
import { HabitContext } from '../../HabitContext';
import { Link } from 'react-router-dom';

export default function Instructions() {
    return (
        <HabitContext.Consumer>
            {({ habitType }) => (
                <div>
                    <Header title={'HabiPets'} />
                    <h1 className="Title">Select a {habitType} Habit</h1>
                    <p className="Body">Placeholder Instructions</p>
                    <div className="NextPageBox">
                        <Link to={'/Goal'}>Enter your Habit Details-&gt;</Link>
                    </div>
                </div>
            )}
        </HabitContext.Consumer>
    );
}

Instructions.propTypes = {
    value: PropTypes.string,
};