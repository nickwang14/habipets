import PropTypes from 'prop-types';
import './Instructions.css';
import Header from 'components/Header/Header';
import  Context  from 'ContextProvider';
import { Link } from 'react-router-dom';
import Authenticate from 'components/Altura/AuthenticationMessage';
import BeginHabit from 'components/Altura/assignParent';

export default function Instructions() {
    return (
        <Context.Consumer>
            {({ habitType }) => (
                <div>
                    <Header title={'HabiPets'} />
                    <h1 className="Title">Select a {habitType} Habit</h1>
                    <p className="Body">Placeholder Instructions</p>
                    <div className="authenticate"><Authenticate /></div>
                    <div className="begin"><BeginHabit style={{ display: 'flex' }} /></div>
                    <div className="NextPageBox">
                        <Link to={'/Goal'}>Enter your Habit Details-&gt;</Link>
                    </div>
                </div>
            )}
        </Context.Consumer>
    );
}

Instructions.propTypes = {
    value: PropTypes.string,
};