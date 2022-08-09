import { Link } from 'react-router-dom';
import './Congratulations.css';

export default function Congratulations() {
    //const { type } = useParams();
    return (
        <div>
            <h1 className="header">Congratulations on completing your HabiPet!</h1>
            <Link class="home" to={'/'}>
        Set New Habit
            </Link>
        </div>
    );
}
