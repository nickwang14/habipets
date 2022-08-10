import Header from 'components/Header/Header'
import NftBox from 'components/NftBox/NftBox'
import Intro from 'components/Intro/Intro'
import './Home.css'
import { HabitType } from 'consts'

const Home = () => {
    return (
        <div>
            <Header title={'HabiPets'} />
            <h1 className='Title'>Welcome &#128075;</h1>
            <Intro />
            <div className='NftFlexBox'>
                <NftBox type={HabitType.GOOD} />
                <NftBox type={HabitType.BAD} />
            </div>
        </div>
    )
}

export default Home