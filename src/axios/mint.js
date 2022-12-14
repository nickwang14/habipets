import { post } from './utilities'

//allows user to mint an NFT which will then be transfered to them

export const handleMint = async ( { item, mint } ) => {
    return await post('https://api.alturanft.com/api/v2/', { item, mint })
        .then((response) => response.data)
}