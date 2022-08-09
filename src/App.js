import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, HabitPage, NotFound, Instructions, Goal } from './Exports';
import './App.css';
//import EvilPet from 'https://cdn.discordapp.com/attachments/1003507609749442701/1005678437953962034/turntable_2_gif.gif';
// const { Altura } = require("@altura/altura-js");

// const altura = new Altura(process.env.ALTURA_API_KEY);

export const HabitTypeContext = React.createContext();

function App() {
    return (
        <HabitTypeContext.Provider value={'good'}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route
                        exact
                        path="/Instructions:type"
                        element={<Instructions />}
                    ></Route>
                    <Route exact path="/Goal:type" element={<Goal />}></Route>
                    <Route exact path="/HabitPage:type" element={<HabitPage />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Router>
        </HabitTypeContext.Provider>
    );
}

export default App;
