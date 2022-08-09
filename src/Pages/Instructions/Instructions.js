import './Instructions.css';
import { Header } from '../../Exports';
import { Link, useParams } from 'react-router-dom';

export default function Instructions() {
    const { type } = useParams();

    return (
        <div>
            <Header title={'HabiPets'} />
            <h1 className="Title">Select a {type} Habit</h1>
            <p>Placeholder Instructions</p>
            <Link to={`/Goal${type}`}>next page</Link>
        </div>
    );
}
