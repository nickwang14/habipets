import { Header, NftBox, Intro } from '../../Exports';
import './Home.css';
import { HabitType } from '../../consts';

const Home = () => {
    return (
        <div>
            <Header title={'HabiPets'} />
            <h1 className='Title'>Welcome</h1>
            <Intro />
            <div className="NftFlexBox">
                <NftBox type={HabitType.GOOD} />
                <NftBox type={HabitType.BAD} />
            </div>
            <button
                className="ConnectButton"
                onClick={() => {
                    alert('Altura Connect wallet backend');
                }}
            >
        Connect
            </button>
        </div>
    );
};

export default Home;
