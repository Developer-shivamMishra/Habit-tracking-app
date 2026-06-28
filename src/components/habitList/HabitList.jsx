import React from "react";
import { useContext } from "react";
import { HabbitProvider } from "../context/HabbitContext";
import DeleteHabit from "../deleteHabit/DeleteHabit";

const HabitList = () => {
  const { habits, setHabits, days, currentDate, monthkey } =
    useContext(HabbitProvider);

  const handleClick = (habitId, day) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id !== habitId) return habit;

        const monthDays = habit.completeDays[monthkey] || [];
        const isCompleted = monthDays.includes(day);

        return {
          ...habit,
          completeDays: {
            ...habit.completeDays,
            [monthkey]: isCompleted
              ? monthDays.filter((d) => d !== day)
              : [...monthDays, day],
          },
        };
      }),
    );
  };

  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <div key={habit.id} className="habit-card">
          <div className="habit-card-header">
            <h2 style={{ color: habit.color || "#fff" }}>{habit.name}</h2>
            <DeleteHabit id={habit.id} />
          </div>

          <div className="days-grid">
            {days.map((day) => {
              const monthDays = habit.completeDays[monthkey] || [];
              const isCompleted = monthDays.includes(day);
              return (
                <button
                  key={`${habit.id}-${day}`}
                  type="button"
                  onClick={() => handleClick(habit.id, day)}
                  className={`day-btn${isCompleted ? " completed" : ""}`}
                >
                  <span>{day}</span>
                  {isCompleted && (
                    <span style={{ color: habit.color || "#60a5fa" }}>✓</span>
                  )}
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
