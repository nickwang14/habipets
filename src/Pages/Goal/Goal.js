import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Header } from '../../Exports';
import { HabitContext } from '../../HabitContext';
import './Goal.css';

export default function Goal() {
    let navigate = useNavigate();

    const formValidation = (event) => {
        event.preventDefault();
        const habit = document.getElementById('habit').innerHTML;
        console.log(habit)
        const frequency = event.target.frequency.value;
        alert('Submit Form Data to Altura: ' + habit + ' : ' + frequency);
        const success = true; //success pushing to altura
        if (success) {
            navigate('/HabitPage', { replace: true });
        } else {
            alert('Form Data submission failed please try again')
        }

    }

    const [frequency, setFrequency] = useState(1);

    return (
        <HabitContext.Consumer>
            {({ habitType }) => (
                <div>
                    <Header title={'HabiPets'} />
                    <h1 className="Title">Goal for {habitType} habit</h1>
                    <form id='HabitForm' 
                        onSubmit={(e) => {
                            formValidation(e);
                        }}> <div className="FormContent" >
                            <div className='OuterBox'>
                                <div className='InnerBox'>
                                    <label htmlFor="habit">Habit:</label>
                                    <span
                                        id="habit"
                                        className='HabitInput'
                                        role="textbox"
                                        contentEditable>
                                    </span>
                                </div>
                                <div className='InnerBox'>
                                    <label htmlFor="frequency">Frequency (per week):</label>
                                    <input id='frequency' type='range' min='1' max='7' onChange={(e) => { setFrequency(e.target.value) }} value={frequency}></input>
                                    <span>{frequency}</span>
                                </div>
                            </div>
                        </div>
                        <div className='InnerBox'>
                            <button type="submit" form='HabitForm' value='submit'>Create My Habit</button>
                        </div>
                    </form>
                </div>
            )}
        </HabitContext.Consumer>
    );
}
