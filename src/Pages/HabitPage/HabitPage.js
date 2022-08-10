import { useState } from 'react';
import { CalendarModal, Log, Header } from '../../Exports';
import { HabitContext } from '../../HabitContext';
import './HabitPage.css';

export default function HabitPage() {
    //const [ user, setUser ] = useState()
    const [lastLog, setLastLog] = useState(' Never ');
    const [streak, setStreak] = useState(0);

    const handleLog = () => {
        setStreak(streak + 1);
        setLastLog(Date());
        console.warn(lastLog);
    };
    return (
        <HabitContext.Consumer>
            {({ habitType }) => (
                <div>
                    <Header title={'HabiPets'} />
                    <h1>{habitType} Habit</h1>
                    <CalendarModal />
                    <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
                </div>
            )}
        </HabitContext.Consumer>
    );
}
