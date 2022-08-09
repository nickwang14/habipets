import axios from "axios"
import {useState} from 'react';

const AuthenticationMessage = ( {isAuthenticated} ) => {
    if(isAuthenticated){
        return(<p> User is authenticated</p>)
    } else {
        return(<p> User is not authenticated </p>)
    }
}

const Authenticate = () => {
    const [address, setAddress] = useState();
    const [guard, setGuard] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleAuthentication = () => {
        axios.get(
            `https://api.alturanft.com/api/v2/user/verify_auth_code/${address}/${guard}`
            ).then( response => setIsAuthenticated(response.data))
        console.log(isAuthenticated)
    }
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

        <button onClick = {handleAuthentication
        }> Authenticate </button>

        <p>address is: {`this is ${address}`}</p>
        <p>guard code is: {guard}</p>
        <AuthenticationMessage isAuthenticated={isAuthenticated} />
    </div>
);
};

export default Authenticate;