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
        </div>
    );
};

export default Home;