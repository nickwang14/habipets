import React from 'react'

export const HabitContext = React.createContext({
    habit: 'good',
    chooseGood: () => { },
    chooseBad: () => { }
});