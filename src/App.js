import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HabitContext } from './HabitContext';
import { useState } from 'react'
import {
    Home,
    HabitPage,
    NotFound,
    Instructions,
    Goal,
    Congratulations,
} from './Exports';
import './App.css';
//import EvilPet from 'https://cdn.discordapp.com/attachments/1003507609749442701/1005678437953962034/turntable_2_gif.gif';
// const { Altura } = require("@altura/altura-js");

// const altura = new Altura(process.env.ALTURA_API_KEY);

function App() {
    const [habitType, setHabitType] = useState('')
    const habitValue = { habitType, setHabitType }

    return (
        <HabitContext.Provider value={habitValue}>
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        <Home />
                    }></Route>
                    <Route exact path="/Goal" element={<Goal />}></Route>
                    <Route exact path="/HabitPage" element={<HabitPage />}></Route>
                    <Route exact path="/Instructions" element={<Instructions />}></Route>
                    <Route
                        exact
                        path="/Congratulations"
                        element={<Congratulations />}
                    ></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Router>
        </HabitContext.Provider>
    );
}

export default App;
