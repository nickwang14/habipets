import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Intro.css';

export default function Intro() {
    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
        let current = 1;
        const cycleReviews = () => {
            if (current === 5) {
                current = 1;
            } else {
                current += 1;
            }
            setActiveSlide(current);
        };
        const intervalId = setInterval(() => {
            cycleReviews();
        }, 6000);
        return () => clearInterval(intervalId);
    }, []);

    const reviews = [
        {
            quote:
        'The essence of Tiny Habits is this: Take a behavior you want, make it tiny, find where it fits naturally in your life, and nurture its growth.',
        },
        {
            quote:
        'In order to design successful habits and change your behaviors, you should do three things. Stop judging yourself. Take your aspirations and break them down into tiny behaviors. Embrace mistakes as discoveries and use them to move forward.',
        },
        {
            quote:
        'There are only three things we can do that will create lasting change: Have an epiphany, change our environment, or change our habits in tiny ways.',
        },
        {
            quote:
        'Chains of habit are too light to be felt until they are too heavy to be broken.',
        },
        {
            quote:
        'Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek.',
        },
    ];

    return (
        <div className="App">
            <ul className="carousel__list">
                {reviews.map((review, index) => {
                    const { quote } = review;
                    const count = index + 1;
                    return (
                        <li
                            className={`carousel__item
                  ${count === activeSlide ? ' active' : ''}
                  ${count < activeSlide ? ' left' : ''}
                  ${count > activeSlide ? ' right' : ''}
                `}
                            key={count}
                        >
                            <blockquote className="carousel__quote">
                                <p>{quote}</p>
                            </blockquote>
                        </li>
                    );
                })}
                <li className="carousel__indicator">
                    <span
                        className={`carousel__dot${activeSlide === 1 ? ' active' : ''}`}
                    />
                    <span
                        className={`carousel__dot${activeSlide === 2 ? ' active' : ''}`}
                    />
                    <span
                        className={`carousel__dot${activeSlide === 3 ? ' active' : ''}`}
                    />
                    <span
                        className={`carousel__dot${activeSlide === 4 ? ' active' : ''}`}
                    />
                    <span
                        className={`carousel__dot${activeSlide === 5 ? ' active' : ''}`}
                    />
                </li>
            </ul>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Intro />, rootElement);
