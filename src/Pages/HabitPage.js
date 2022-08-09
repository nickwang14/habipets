import react from "react";
import { CalendarModal } from "../Exports";

export default function HabitPage() {
  const goodHabit = query.type;
  if (goodHabit === "goodhabit") {
    return (
      <div>
        <h1>Good Habit</h1>
        <CalendarModal />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Bad Habit</h1>
        <CalendarModal />
      </div>
    );
  }
}
