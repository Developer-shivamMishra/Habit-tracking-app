import React, { useState } from "react";
import { useContext } from "react";
import { HabbitProvider } from "../context/HabbitContext";
import DeleteHabit from "../deleteHabit/DeleteHabit";
// import { MdOutlineEdit } from "react-icons/md";

const HabitList = () => {
  const { habits, setHabits, days, currentDate, monthkey } =
    useContext(HabbitProvider);

  // const [isEditingId, setIsEditingId] = useState(null);
  // const [editName, setEditName] = useState("");

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
            <div style={{ color: habit.color || "#fff" }}>
              <h1 className="font-[3rem]">{habit.name}</h1>
              {/* {isEditingId === habit.id ? (
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
               
              
              ) : (
                <h2>{habit.name}</h2>
              )} */}
            </div>
            {/* <button className="cursor-pointer"
              onClick={() => {
                setIsEditingId(habit.id)
                setEditName(habit.name);
              }}
            >
              <MdOutlineEdit  />
            </button> */}
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
