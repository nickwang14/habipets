import { Header, NftBox, Intro } from '../../Exports';
import './Home.css';
import { HabitType } from '../../consts';

const Home = () => {
    return (
        <div>
            <Header title={'HabiPets'} />
            <Intro />
            <div className="NftFlexBox">
                <NftBox type={HabitType.GOOD} />
                <NftBox type={HabitType.BAD} />
            </div>

            <button onClick={() => console.log(process.env)}>Log Env</button>
        </div>
    );
};

export default Home;
