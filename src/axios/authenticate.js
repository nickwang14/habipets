import { get } from 'utilities/get'

const authenticate = (params) => {
    return get('https://api.alturanft.com/api/v2/user/verify_auth_code/', params)
        .then((response) => response.data.authenticated)
}

export default authenticate
