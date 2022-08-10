import PropTypes from 'prop-types'
import './Log.css'

function Log({ streak, onClick, lastLog }) {
    return (
        <div>
            <div className="buttonDiv">
                <button className="buttonLog" onClick={onClick}> Log Your Habit </button>
            </div>
            <p className="pushin-p"> Your current streak is {streak} </p>
            <p className="pushin-p"> You logged your last Habit on {lastLog} </p>
        </div>
    )
}

export default Log

Log.propTypes = {
    streak: PropTypes.number,
    onClick: PropTypes.func,
    lastLog: PropTypes.string,
}
