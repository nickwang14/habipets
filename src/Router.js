import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import HabitPage from './pages/HabitPage/HabitPage'
import NotFound from './pages/NotFound'
import Instructions from './pages/Instructions/Instructions'
import Goal from './pages/Goal/Goal'
import Congratulations from './pages/Congratulations/Congratulations'

const AppRoutes = () => (<Router>
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
)
export default AppRoutes