import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Page1, Page2, Page3, HabitPage, NotFound } from './Exports';
import './App.css';
//import EvilPet from 'https://cdn.discordapp.com/attachments/1003507609749442701/1005678437953962034/turntable_2_gif.gif';
// const { Altura } = require("@altura/altura-js");

// const altura = new Altura(process.env.ALTURA_API_KEY);

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/p1" element={<Page1 />}></Route>
                <Route exact path="/p2" element={<Page2 />}></Route>
                <Route exact path="/p3" element={<Page3 />}></Route>
                <Route exact path="/HabitPage" element={<HabitPage />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
