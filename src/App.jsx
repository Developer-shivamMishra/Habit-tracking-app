import React, { useContext } from "react";
import MonthHeader from "./components/monthheader/MonthHeader";
import { Analytics } from "@vercel/analytics/react"
import StatsCard from "./components/statsCard/StatsCard";
// import CalenderHeader from "./components/CalenderHeader/CalenderHeader";
import DayCell from "./components/dayCell/DayCell";
import AddHabit from "./components/AddHabit/AddHabit";
import HabitList from "./components/habitList/HabitList";
import { HabbitProvider } from "./components/context/HabbitContext";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

const App = () => {
  const { habits, setHabits ,theme } = useContext(HabbitProvider);

  return (
    <main className="w-full h-full">
      <div className="app-layout">
        <div className="w-full flex justify-end pr-2 sm:pr-4 md:pr-6 fixed top-2 sm:top-4 z-50">
            <ThemeToggle />
        </div>
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
