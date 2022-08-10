import { useState, useContext } from 'react'
import CalendarModal from 'components/Calendar/CalendarModal'
import Log from 'components/Log/Log'
import Header from 'components/Header/Header'
import { AppContext } from 'ContextProvider'
import './HabitPage.css'

export default function HabitPage() {
    //const [ user, setUser ] = useState()
    const [lastLog, setLastLog] = useState(' Never ')
    const [streak, setStreak] = useState(0)
    const value = useContext(AppContext)

    const handleLog = () => {
        setStreak(streak + 1)
        setLastLog(Date())
        console.warn(lastLog)
    }

    return (
        <div>
            <Header title={'HabiPets'} />
            <h1>{value.habitType} Habit</h1>
            <CalendarModal />
            <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
        </div>
    )
}
