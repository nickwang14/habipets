import './ConnectButton.css'

const ConnectButton = () => (
    <div className="ConnectButton">
        <button className="buttonConnect"
            onClick={() => {
                alert('Altura Connect wallet backend')
            }}
        >
            Connect to Play
        </button>
    </div>
)

export default ConnectButton