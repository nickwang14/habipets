import { Header, NftBox, Intro } from '../../Exports';
import './Home.css';
import { HabitType } from '../../consts';
import Authenticate from '../../Components/Altura/AuthenticationMessage';
import BeginHabit from '../../Components/Altura/assignParent';

const Home = () => {
    return (
        <div>
            <Header title={'HabiPets'} />
            <Authenticate/>
            <BeginHabit style={{display:'flex'}}/>
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
