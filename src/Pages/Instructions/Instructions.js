import './Instructions.css';
import { Header } from '../../Exports';
import { Link, useParams } from 'react-router-dom';
import Authenticate from '../../Components/Altura/AuthenticationMessage';
import BeginHabit from '../../Components/Altura/assignParent';

export default function Instructions() {
    const { type } = useParams();
    return (
        <div>
            <Header title={'HabiPets'} />
            <h1 className="Title">Select a {type} Habit</h1>
            <p className="Body">Placeholder Instructions</p>
            <Authenticate/>
            <BeginHabit style={{display:'flex'}}/>
            <div className="NextPageBox">
                <Link to={`/Goal${type}`}>Enter your Habit Details-&gt;</Link>
            </div>
        </div>
    );
}
