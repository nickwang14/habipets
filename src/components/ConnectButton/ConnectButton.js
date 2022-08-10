import './ConnectButton.css'

const ConnectButton = () => (
    <div className="ConnectButton">
        <button className="buttonText"
            onClick={() => {
                alert('Altura Connect wallet backend');
            }}
        >
            Connect to Play
        </button>
    </div>
)

export default ConnectButton