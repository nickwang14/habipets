import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Header, Log } from './Exports';
import "./App.css";
//import EvilPet from 'https://cdn.discordapp.com/attachments/1003507609749442701/1005678437953962034/turntable_2_gif.gif';
const { Altura } = require("@altura/altura-js");

const altura = new Altura(process.env.ALTURA_API_KEY);

function App() {
  //const [ user, setUser ] = useState()
  const [lastLog, setLastLog] = useState(" Never ");
  const [streak, setStreak] = useState(0);

  const handleLog = () => {
    setStreak(streak + 1);
    setLastLog(Date());
  };

  return (
    <Router>
      <div className="App">
        <Header title={"HabiPets"}/>
        <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
        <button onClick={() => console.log(process.env)}></button>
      </div>
    </Router>
  );
}

export default App;
