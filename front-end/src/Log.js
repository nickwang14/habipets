import React from 'react'

function Log({ hapet, streak, onClick, lastLog }) {
    return(
        <div>
            <img
                src="https://cdn.discordapp.com/attachments/1003507609749442701/1005474810811404319/unknown.png"
                alt="Evil Pet"
            />
            <button onClick={onClick}> Log Your Habit </button>
            <p> Your current streak is {streak} </p>
            <p> You logged your last Habit on {lastLog} </p>
        </div>
    )
};

export default Log