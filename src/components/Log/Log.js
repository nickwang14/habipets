import PropTypes from 'prop-types'
import './Log.css'

function Log({ streak, onClick, lastLog }) {
    return (
        <div>
            <div className="buttonDiv">
                <button className="buttonLog" onClick={onClick}> Log Your Habit </button>
            </div>
            <p className="buttonDiv"> Your current streak is {streak} </p>
            <p className="buttonDiv"> You logged your last Habit on {lastLog} </p>
        </div>
    )
}

export default Log

Log.propTypes = {
    streak: PropTypes.number,
    onClick: PropTypes.func,
    lastLog: PropTypes.string,
}
