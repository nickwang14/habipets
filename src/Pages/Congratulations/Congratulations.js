import { Link } from 'react-router-dom';
import './Congratulations.css';

export default function Congratulations() {
    //const { type } = useParams();
    return (
        <div>
            <h1 className="header">Congratulations on completing your HabiPet!</h1>
            <div className="imagewrapper">
                <img src={require('./GoodNft.png')} alt="Good Pet" className="image" />
            </div>
            <Link class="home" to={'/'}>
        Set New Habit
            </Link>
        </div>
    );
}
