import { useState } from 'react';
import { Header, Log, NftBox, Intro } from '../../Exports';
import './Home.css';
import { HabitType } from '../../consts';

const Home = () => {
    //const [ user, setUser ] = useState()
    const [lastLog, setLastLog] = useState(' Never ');
    const [streak, setStreak] = useState(0);

    const handleLog = () => {
        setStreak(streak + 1);
        setLastLog(Date());
    };

    return (
        <div>
            <Header title={'HabiPets'} />
            <Intro />
            <div className="NftFlexBox">
                <NftBox type={HabitType.GOOD} />
                <NftBox type={HabitType.BAD} />
            </div>
            <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
            <button onClick={() => console.log(process.env)}></button>
        </div>
    );
};

export default Home;
