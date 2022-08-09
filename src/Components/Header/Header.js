import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ title }) {
    return (
        <div>
            <nav className="Header">
                <Link to="/Home" className="HeaderTitleBox">
                    <img src={require('../NftBox/GoodNft.png')} className="HeaderIcon" />
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
