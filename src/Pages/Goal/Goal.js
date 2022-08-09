import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../../Exports';
import './Goal.css';

export default function Goal() {
    let navigate = useNavigate();

    const formValidation = (event) => {
        event.preventDefault();
        const habit = event.target.habit.value;
        const frequency = event.target.frequency.value;
        alert('Submit Form Data to Altura: ' + habit + ' : ' + frequency);
        const success = true; //success pushing to altura
        if (success) {
            navigate(`/HabitPage${type}`, { replace: true });
        } else {
            alert('Form Data submission failed please try again')
        }
        
    }
    const { type } = useParams();
    return (
        <div>
            <Header title={'HabiPets'} />
            <h1 className="Title">Goal for {type} habit</h1>
            <form className="FormContent" onSubmit={(e) => {
                formValidation(e);
            }}>
                <div>
                    <label htmlFor="habit">Habit:</label>
                    <input
                        type={'text'}
                        id="habit"
                        placeholder="Enter your Habit here..."
                    />
                </div>
                <div>
                    <label htmlFor="frequency">Frequency:</label>
                    <select id="frequency">
                        <option>1x</option>
                        <option>2x</option>
                        <option>3x</option>
                        <option>4x</option>
                        <option>5x</option>
                        <option>6x</option>
                        <option>7x</option>
                        <option>8x</option>
                        <option>9x</option>
                        <option>10x</option>
                    </select>
                </div>
                <button type="submit">Create My Habit</button>
            </form>
        </div>
    );
}
