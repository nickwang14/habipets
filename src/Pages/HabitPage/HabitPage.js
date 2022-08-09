import { useState } from 'react';
import { CalendarModal, Log } from '../../Exports';
import { HabitType } from '../../consts';
import PropTypes from 'prop-types';
import './HabitPage.css';

export default function HabitPage({ type }) {
    //const [ user, setUser ] = useState()
    const [lastLog, setLastLog] = useState(' Never ');
    const [streak, setStreak] = useState(0);

    const handleLog = () => {
        setStreak(streak + 1);
        setLastLog(Date());
        console.warn(lastLog);
    };

    if (type === HabitType.GOOD) {
        return (
            <div>
                <h1>Good Habit</h1>
                <CalendarModal />
                <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
            </div>
        );
    } else {
        return (
            <div>
                <h1>Bad Habit</h1>
                <CalendarModal />
                <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
            </div>
        );
    }
}

HabitPage.propTypes = {
    type: PropTypes.string,
};
