import React, { useContext } from "react";
import MonthHeader from "./components/monthheader/MonthHeader";

import StatsCard from "./components/statscard/StatsCard";
// import CalenderHeader from "./components/CalenderHeader/CalenderHeader";
import DayCell from "./components/dayCell/DayCell";
import AddHabit from "./components/AddHabit/AddHabit";
import HabitList from "./components/habitList/HabitList";
import { HabbitProvider } from "./components/context/HabbitContext";

const App = () => {
  const { habits, setHabits } = useContext(HabbitProvider);
  return (
    <main className="w-full h-full text-white">
      <div className="app-layout">
        <div className="flex justify-center w-full">
          <MonthHeader />
        </div>
        <StatsCard />
        {habits.length > 0 && <HabitList />}
        <AddHabit />
      </div>
    </main>
  );
};

export default App;
