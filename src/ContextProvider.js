import { createContext } from 'react'

export default createContext({
    habit: '',
    walletConnected: false,
    alturaConnected: false,
    chooseType: () => { },
});