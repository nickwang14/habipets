import { useState } from "react";
import "./App.css";
//import EvilPet from 'https://cdn.discordapp.com/attachments/1003507609749442701/1005678437953962034/turntable_2_gif.gif';
const { Altura } = require("@altura/altura-js");

const altura = new Altura(process.env.ALTURA_API_KEY);

const Log = ({ hapet, streak, onClick, lastLog }) => (
  <div>
    <img
      src="https://cdn.discordapp.com/attachments/1003507609749442701/1005474810811404319/unknown.png"
      alt="Evil Pet"
    />
    <button onClick={onClick}> Log Your Habit </button>
    <p> Your current streak is {streak} </p>
    <p> You logged your last Habbit on {lastLog} </p>
  </div>
);

function App() {
  //const [ user, setUser ] = useState()
  const [lastLog, setLastLog] = useState(" Never ");
  const [streak, setStreak] = useState(0);

  const handleLog = () => {
    setStreak(streak + 1);
    setLastLog(Date());
  };

  return (
    <div className="App">
      <h1> HaPets </h1>
      <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
      <button onClick={() => console.log(process.env)}></button>
    </div>
  );
}

export default App;
