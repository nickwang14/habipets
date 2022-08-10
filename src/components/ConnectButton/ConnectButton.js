import './ConnectButton.css'

const ConnectButton = () => (
    <div className='ConnectButton'>
        <button
            onClick={() => {
                alert('Altura Connect wallet backend')
            }}
        >
        Connect to play
        </button>
    </div>
)

export default ConnectButton