import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/GoodNft.png'

function Header({ title }) {
    return (
        <div>
            <nav className="Header">
                <Link
                    to="/"
                    className="HeaderTitleBox"
                    style={{ textDecoration: 'none' }}
                >
                    <img src={Logo} className="HeaderIcon" />
                    <h1 className="HeaderTitle">{title}</h1>
                </Link>
            </nav>
        </div>
    );
}

export default Header;

Header.propTypes = {
    title: PropTypes.string,
};
