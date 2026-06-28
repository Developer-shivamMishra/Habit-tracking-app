import React, { useContext, useState } from "react";
import { HabbitProvider } from "../context/HabbitContext";

const AddHabitModel = ({}) => {
  const [habit, setHabit] = useState("");
  const [color, setColor] = useState("#3b82f6");
  const { habits, setHabits, currentDate } = useContext(HabbitProvider);
  const { setShowModel } = useContext(HabbitProvider);

  const handleChange = (e) => {
    setHabit(e.target.value);
    console.log(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const newHabit = {
      id: Date.now(),
      name: habit,
      color: color,
      completeDays: {},
    };
    setHabits([...habits, newHabit]);
    setHabit("");
    setShowModel(false);
  };

  const cancelBtn = () => {
    setShowModel(false);
  };

  return (
    <div className="add-habit-modal-wrapper">
      <div className="add-habit-modal-card">
        <form className="w-full" onSubmit={handleSumbit}>
          <div className="add-habit-input-group">
            <input
              onChange={(e) => setHabit(e.target.value)}
              value={habit}
              className="add-habit-input"
              type="text"
              placeholder="Habit name..."
              id="habitinput"
            />
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="add-habit-color"
              title="Choose habit color"
            />
          </div>
          <div className="add-habit-actions">
            <button type="submit" className="add-habit-submit">
              Add Habit
            </button>
            <button
              onClick={cancelBtn}
              type="button"
              className="add-habit-cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHabitModel;
