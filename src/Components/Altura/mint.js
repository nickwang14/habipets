import axios from 'axios';

//allows user to mint an NFT which will then be transfered to them

const handleMint = ( { item, mint } ) => {
    axios.post(`https://api.alturanft.com/api/v2/${item}/${mint}`)
}