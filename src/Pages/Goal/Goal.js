import { Link, useParams } from 'react-router-dom';

export default function Goal() {
    const { type } = useParams();
    return (
        <div>
            <h1>Goal for {type} habit</h1>
            <Link to={`/HabitPage${type}`}>next page</Link>
        </div>
    );
}
