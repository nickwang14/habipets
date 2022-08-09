import PropTypes from 'prop-types';
import './Header.css';

function Header({ title }) {
    return (
        <div>
            <nav className="Header">
                <div className="HeaderTitleBox">
                    <img src={require('../NftBox/GoodNft.png')} className="HeaderIcon" />
                    <h1 className="HeaderTitle">{title}</h1>
                </div>
            </nav>
        </div>
    );
}

export default Header;

Header.propTypes = {
    title: PropTypes.string,
};
