import { Link } from 'react-router-dom';
import './Congratulations.css';

export default function Congratulations() {
    //const { type } = useParams();
    return (
        <div>
            <h1 className="header">
                &#127881; Congratulations on completing your HabiPet! &#127881;</h1>
            <div className="imagewrapper">
                <img src={require('../../assets/GoodNft.png')} alt="Good Pet" className="image" />
                <img src={require('../../assets/BadNft.png')} alt="Good Pet" className="image" />
            </div>
            <div className="home">
                <Link to={'/'}><button className="button" role="button">Go home and start/break a new habit!</button></Link>
            </div>

        </div>
    );
}
