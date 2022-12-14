import { COLLECTION_ADDRESS } from 'consts'
import { Altura } from '@altura/altura-js'
import './altura.css';

const altura = new Altura(process.env.ALTURA_API_KEY)

const BeginHabit = () => {
    const handleBegin = async () => {
        const response = await altura.getItems(
            {}, // default options
            {
                collectionAddress: COLLECTION_ADDRESS
            } // fetching items with the specified collection address only
        )
        console.log(response)
        return
    }

    return (
        <div style={{ display: 'flex' }}>
            <button className="alturaButton" onClick={handleBegin}>
                Begin!
            </button>
        </div>
    )
}


export default BeginHabit