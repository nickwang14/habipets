import './Instructions.css';
import PropTypes from 'prop-types';

export default function Instructions({ type }) {
    console.log(type);
    return (
        <div>
            <h1 className="Title">Instructions</h1>
        </div>
    );
}

Instructions.propTypes = {
    type: PropTypes.string,
};
