import PropTypes from 'prop-types'
import './Log.css'

function Log({ streak, onClick, lastLog }) {
    return (
        <div>
            <button className="buttonLog" onClick={onClick}> Log Your Habit </button>
            <p> Your current streak is {streak} </p>
            <p> You logged your last Habit on {lastLog} </p>
        </div>
    )
}

export default Log

Log.propTypes = {
    streak: PropTypes.number,
    onClick: PropTypes.func,
    lastLog: PropTypes.string,
}
