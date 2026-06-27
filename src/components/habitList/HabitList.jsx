import React from "react";
import { useContext } from "react";
import { HabbitProvider } from "../context/HabbitContext";
import DeleteHabit from "../deleteHabit/DeleteHabit";

const HabitList = () => {
  const { habits, setHabits, days } = useContext(HabbitProvider);

  const handleClick = (habitId, day) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id !== habitId) return habit;

        const isCompleted = habit.completeDays.includes(day);

        return {
          ...habit,
          completeDays: isCompleted
            ? habit.completeDays.filter((d) => d !== day)
            : [...habit.completeDays, day],
        };
      })
    );
  };

  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <div key={habit.id} className="habit-card">
          <div className="habit-card-header">
            <h2>{habit.name}</h2>
            <DeleteHabit id={habit.id} />
          </div>

          <div className="days-grid">
            {days.map((day) => {
              const isCompleted = habit.completeDays.includes(day);
              return (
                <button
                  key={`${habit.id}-${day}`}
                  type="button"
                  onClick={() => handleClick(habit.id, day)}
                  className={`day-btn${isCompleted ? " completed" : ""}`}
                >
                  <span>{day}</span>
                  {isCompleted && <span style={{ color: "#60a5fa" }}>✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
