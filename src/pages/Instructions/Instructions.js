import PropTypes from 'prop-types'
import { useContext } from 'react'
import './Instructions.css'
import Header from 'components/Header/Header'
import { AppContext } from 'ContextProvider'
import { Link } from 'react-router-dom'
import { useAccount } from 'wagmi'

export default function Instructions() {
    const { habitType } = useContext(AppContext)
    const walletAddress = useAccount();
    if (!walletAddress)
        return (
            <div>
                <Header title={'HabiPets'} />
                <h1 className='Title'>Select a {habitType} Habit</h1>
                <div className='NextPageBox'>
                    <Link to={'/Goal'}><button className="buttonHabit">Enter your Habit Details</button></Link>
                </div>
            </div>
        )
}

Instructions.propTypes = {
    value: PropTypes.string,
}