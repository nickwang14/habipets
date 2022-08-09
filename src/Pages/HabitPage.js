import { CalendarModal } from '../Exports';
import { HabitType } from '../consts';
import PropTypes from 'prop-types';

export default function HabitPage({ query }) {
    if (query.type === HabitType) {
        return (
            <div>
                <h1>Good Habit</h1>
                <CalendarModal />
            </div>
        );
    } else {
        return (
            <div>
                <h1>Bad Habit</h1>
                <CalendarModal />
            </div>
        );
    }
}

HabitPage.propTypes = {
    query: {
        type: PropTypes.string,
    },
};
