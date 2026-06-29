import React, { useContext } from "react";
import StatCard from "../statcard/StatCard";
import { HabbitProvider } from "../context/HabbitContext";

const StatsCard = () => {
  const {habits,totaldays ,currentDate,monthkey} = useContext(HabbitProvider);
  
 

  const completedDays = habits.reduce((total,habit)=>{
return total + (habit.completeDays[monthkey] ?.length || 0)

  },0)

  const totalPossibledays = habits.length * totaldays;
  const avg = totalPossibledays === 0 ? 0 : Math.round((completedDays / totalPossibledays)  * 100)

  return (
    <div className="stats-row">
      <StatCard title="Habits" value={habits.length} />
      <StatCard title="Days Done" value={completedDays} />
      <StatCard title="Month Avg" value={`${avg}%`} />
    </div>
  );
};

export default StatsCard;
