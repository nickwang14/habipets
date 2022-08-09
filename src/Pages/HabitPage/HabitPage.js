import { useState } from 'react';
import { CalendarModal, Log, Header } from '../../Exports';
import { useParams } from 'react-router-dom';
import './HabitPage.css';

export default function HabitPage() {
    const { type } = useParams();
    //const [ user, setUser ] = useState()
    const [lastLog, setLastLog] = useState(' Never ');
    const [streak, setStreak] = useState(0);

    const handleLog = () => {
        setStreak(streak + 1);
        setLastLog(Date());
        console.warn(lastLog);
    };
    return (
        <div>
            <Header title={'HabiPets'} />
            <h1>{type} Habit</h1>
            <CalendarModal />
            <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
        </div>
    );
}
