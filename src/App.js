import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, HabitPage, NotFound } from './Exports';
import './App.css';
//import EvilPet from 'https://cdn.discordapp.com/attachments/1003507609749442701/1005678437953962034/turntable_2_gif.gif';
// const { Altura } = require("@altura/altura-js");

// const altura = new Altura(process.env.ALTURA_API_KEY);

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/GoodHabit" element={<GoodHabit />}></Route>
        <Route exact path="/BadHabit" element={<BadHabit />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
