import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    Home,
    HabitPage,
    NotFound,
    Instructions,
    Goal,
    Congratulations,
} from './Exports';
import { HabitContext } from './Components/NftBox/HabitContext';
import './App.css';
//import EvilPet from 'https://cdn.discordapp.com/attachments/1003507609749442701/1005678437953962034/turntable_2_gif.gif';
// const { Altura } = require("@altura/altura-js");

// const altura = new Altura(process.env.ALTURA_API_KEY);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            habit: 'good',
        };

        this.chooseGood = () => {
            // eslint-disable-next-line no-unused-vars
            this.setState(state => ({
                habit: 'good',
            }));
        };

        this.chooseBad = () => {
            // eslint-disable-next-line no-unused-vars
            this.setState(state => ({
                habit: 'bad',
            }));
        };

        // State also contains the updater function so it will
        // be passed down into the context provider
        this.state = {
            habit: 'good',
            chooseGood: this.chooseGood,
            chooseBad: this.chooseBad
        };
    }

    render() {
        // The entire state is passed to the provider
        return (
            <HabitContext.Provider value={this.state.habit}>
                <Content />
            </HabitContext.Provider>
        );
    }
}

function Content() {
    const habit = React.useContext(HabitContext);
    return (
        <Router>
            <Routes>
                <Suspense>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route
                        exact
                        path="/Instructions"
                        element={
                            <HabitContext.Provider value={habit}>
                                <Instructions />
                            </HabitContext.Provider>
                        }
                    ></Route>
                    <Route exact path="/Goal:type" element={<Goal />}></Route>
                    <Route exact path="/HabitPage:type" element={<HabitPage />}></Route>
                    <Route
                        exact
                        path="/Congratulations"
                        element={<Congratulations />}
                    ></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Suspense>
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(<App />);
