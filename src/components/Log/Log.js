import PropTypes from 'prop-types'

function Log({ streak, lastLog }) {
    return (
        <div>
            <p> Your current streak is {streak} </p>
            <p> You logged your last Habit on {lastLog} </p>
        </div>
    )
}

export default Log

Log.propTypes = {
    streak: PropTypes.number,
    lastLog: PropTypes.string,
}
