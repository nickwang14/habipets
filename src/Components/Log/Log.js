import PropTypes from 'prop-types';

function Log({ streak, onClick, lastLog }) {
    return (
        <div>
            <button onClick={onClick}> Log Your Habit </button>
            <p> Your current streak is {streak} </p>
            <p> You logged your last Habit on {lastLog} </p>
        </div>
    );
}

export default Log;

Log.propTypes = {
    streak: PropTypes.string,
    onClick: PropTypes.function,
    lastLog: PropTypes.string,
};
