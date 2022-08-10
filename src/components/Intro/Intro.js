import { useEffect, useState } from 'react'
import './Intro.css'

const Intro = () => {
    const [activeSlide, setActiveSlide] = useState(1)

    useEffect(() => {
        let current = 1
        const cycleReviews = () => {
            if (current === 4) {
                current = 1
            } else {
                current += 1
            }
            setActiveSlide(current)
        }
        const intervalId = setInterval(() => {
            cycleReviews()
        }, 10000)
        return () => clearInterval(intervalId)
    }, [])

    const reviews = [
        {
            quote:
                'The essence of tiny habits is this take a behavior you want, make it tiny, find where it fits naturally in your life, and nurture its growth.',
        },
        {
            quote:
                'There are only three things we can do that will create lasting change; have an epiphany, change our environment, or change our habits in tiny ways.',
        },
        {
            quote:
                'Chains of habit are too light to be felt until they are too heavy to be broken.',
        },
        {
            quote:
                'Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek.',
        },
    ]

    return (
        <div className='Intro'>
            <ul className='carousel__list'>
                {reviews.map((review, index) => {
                    const { quote } = review
                    const count = index + 1
                    return (
                        <li
                            className={`carousel__item
                  ${count === activeSlide ? ' active' : ''}
                  ${count < activeSlide ? ' left' : ''}
                  ${count > activeSlide ? ' right' : ''}
                `}
                            key={count}
                        >
                            <blockquote className='carousel__quote'>
                                <p>{quote}</p>
                            </blockquote>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Intro
