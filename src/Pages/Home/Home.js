import { Header, NftBox, Intro } from '../../Exports';
import './Home.css';
import { HabitType } from '../../consts';
import Authenticate from '../../Components/Altura/alturaGuard';

const Home = () => {
    return (
        <div>
            <Header title={'HabiPets'} />
            <Authenticate/>
            <Intro />
            <div className="NftFlexBox">
                <NftBox type={HabitType.GOOD} />
                <NftBox type={HabitType.BAD} />
            </div>
            <button onClick={() => console.log(process.env)}></button>
        </div>
    );
};

export default Home;
