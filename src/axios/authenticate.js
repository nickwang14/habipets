import { get } from './utilities/get'

const authenticate = ({ address, guard }) => {
    return get('https://api.alturanft.com/api/v2/user/verify_auth_code/', { address, guard })
        .then((response) => response.data.authenticated)
}

export default authenticate
