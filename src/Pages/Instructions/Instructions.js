import './Instructions.css';
import { Link, useParams } from 'react-router-dom';

export default function Instructions() {
    const { type } = useParams();

    return (
        <div>
            <h1 className="Title">Select a {type} Habit</h1>
            <Link to={`/Goal${type}`}>next page</Link>
        </div>
    );
}
