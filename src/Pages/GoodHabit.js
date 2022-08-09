import React from "react";
import { CalendarModal } from "../Exports";

export default function GoodHabit() {
      //const [ user, setUser ] = useState()
      const [lastLog, setLastLog] = useState(' Never ');
      const [streak, setStreak] = useState(0);
  
      const handleLog = () => {
          setStreak(streak + 1);
          setLastLog(Date());
      };
  return (
    <div>
      <h1>Good Habit</h1>
      <CalendarModal />
      <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
    </div>
  );
}
