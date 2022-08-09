import { useState } from "react";
import { Header, Log, NftBox } from "./Exports";
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
    <div className="App">
      <Header title={"HabiPets"} />
      <NftBox type={true} />
      <NftBox type={false} />
      <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
      <button onClick={() => console.log(process.env)}></button>
    </div>
  );
}

export default App;
