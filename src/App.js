import {Provider} from './ContextProvider'
import AppRoutes from './Router'
import './App.css'
//import EvilPet from 'https://cdn.discordapp.com/attachments/1003507609749442701/1005678437953962034/turntable_2_gif.gif'
// const { Altura } = require('@altura/altura-js')

// const altura = new Altura(process.env.ALTURA_API_KEY)

import '@rainbow-me/rainbowkit/styles.css'
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import {
    chain,
    configureChains,
    createClient,
    WagmiConfig,
} from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider } = configureChains(
    [chain.ropsten],
    [
        alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
        publicProvider()
    ]
)
  
const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
})
  
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})


function App() {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <Provider>
                    <AppRoutes/>
                </Provider>
            </RainbowKitProvider>
        </WagmiConfig>
    )
}

export default App
