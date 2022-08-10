import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    Home,
    HabitPage,
    NotFound,
    Instructions,
    Goal,
    Congratulations,
} from './Exports';
import './App.css';
//import EvilPet from 'https://cdn.discordapp.com/attachments/1003507609749442701/1005678437953962034/turntable_2_gif.gif';
// const { Altura } = require("@altura/altura-js");

// const altura = new Altura(process.env.ALTURA_API_KEY);

import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
    chain,
    configureChains,
    createClient,
    WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon],
    [
        alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
        publicProvider()
    ]
);
  
const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
});
  
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})


function App() {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route
                            exact
                            path="/Instructions:type"
                            element={<Instructions />}
                        ></Route>
                        <Route exact path="/Goal:type" element={<Goal />}></Route>
                        <Route exact path="/HabitPage:type" element={<HabitPage />}></Route>
                        <Route
                            exact
                            path="/Congratulations"
                            element={<Congratulations />}
                        ></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </Router>
            </RainbowKitProvider>
        </WagmiConfig>
            
    );
}

export default App;
