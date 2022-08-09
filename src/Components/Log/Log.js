import React from "react";

function Log({ hapet, streak, onClick, lastLog }) {
  return (
    <div>
      <button onClick={onClick}> Log Your Habit </button>
      <p> Your current streak is {streak} </p>
      <p> You logged your last Habit on {lastLog} </p>
    </div>
  );
}

export default Log;
