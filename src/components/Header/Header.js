import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from 'assets/GoodNft.png'
import ConnectButton from 'components/ConnectButton/ConnectButton'
// import { ConnectButton } from '@rainbow-me/rainbowkit'

function Header({ title }) {
    return (
        <div>
            <nav className='Header'>
                <Link
                    to='/'
                    className='HeaderTitleBox'
                    style={{ textDecoration: 'none' }}
                >
                    <img src={Logo} className='HeaderIcon' />
                    <h1 className='HeaderTitle'>{title}</h1>
                </Link>
                <ConnectButton />
            </nav>
        </div>
    )
}

export default Header

Header.propTypes = {
    title: PropTypes.string,
}
