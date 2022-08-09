/*import { useState } from 'react';
import axios from 'axios';

*/
const collectionAddress = '0x6c2af8e5419e4c348406e7a34a128f0dac6085e5'  //bscscan contract address


const { Altura } = require('@altura/altura-js')
const altura = new Altura(process.env.ALTURA_API_KEY);


const handleBegin = async () => {
    const response = await altura.getItems(
        {}, // default options
        {
            collectionAddress: collectionAddress
        } // fetching items with the specified collection address only
    )
    console.log(response)
};

const BeginHabit = ( ) => <div style={{display: 'flex'}}>
    <button onClick = {handleBegin}>
        Begin!
    </button>
</div>


export default BeginHabit;