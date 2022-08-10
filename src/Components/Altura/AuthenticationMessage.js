import authenticate from '../../axios/authenticate'
import { bool } from 'prop-types';
import { useState } from 'react';

const AuthenticationMessage = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <p> User is authenticated</p>;
    } else {
        return <p> User is not authenticated </p>;
    }
};

AuthenticationMessage.propTypes = {
    isAuthenticated: bool
}

const Authenticate = () => {
    const [address, setAddress] = useState();
    const [guard, setGuard] = useState();
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div>
            <input
                type="text"
                id="userAddress"
                name="message"
                onChange={(event) => setAddress(event.target.value)}
                value={address}
            />
            <input
                type="text"
                id="guardCode"
                name="guardCode"
                onChange={(event) => setGuard(event.target.value)}
                value={guard}
            />

            <button onClick={() => authenticate({address, guard})}> Authenticate </button>

            <p>address is: {`this is ${address}`}</p>
            <p>guard code is: {guard}</p>
            {/* <AuthenticationMessage isAuthenticated={isAuthenticated} /> */}
        </div>
    );
};

export default Authenticate;
