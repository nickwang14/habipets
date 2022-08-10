import PropTypes from 'prop-types'
import './Log.css'

function Log({ streak, onClick, lastLog }) {
    return (
        <div>
            <div className="buttonDiv">
                <button className="buttonLog" onClick={onClick}> Log Your Habit </button>
            </div>
            <p className="pushin-p"> <b>Your current streak is <span className="underline">{streak}</span></b></p>
            <p className="pushin-p"> <b>You logged your last Habit on <span className="underline">{lastLog}</span></b></p>
        </div>
    )
}

export default Log

Log.propTypes = {
    streak: PropTypes.number,
    onClick: PropTypes.func,
    lastLog: PropTypes.string,
}
