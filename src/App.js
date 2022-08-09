import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header, Log, Home, Page1, Page2, Page3, NotFound } from "./Exports";
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
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              Header={<Header title={"HabiPets"} />}
              Log={
                <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
              }
              BottomButton={
                <button onClick={() => console.log(process.env)}></button>
              }
            />
          }
        ></Route>
        <Route exact path="/p1" element={<Page1 />}></Route>
        <Route exact path="/p2" element={<Page2 />}></Route>
        <Route exact path="/p3" element={<Page3 />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
