import { useState } from 'react';
import CalendarModal from 'components/Calendar/CalendarModal';
import Log from 'components/Log/Log'
import Header from 'components/Header/Header'
import Context from 'ContextProvider';
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
        <Context.Consumer>
            {({ habitType }) => (
                <div>
                    <Header title={'HabiPets'} />
                    <h1>{habitType} Habit</h1>
                    <CalendarModal />
                    <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
                </div>
            )}
        </Context.Consumer>
    );
}
