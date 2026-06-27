import React, { useContext, useState } from "react";
import AddHabitModel from "../AddHabitModel/AddHabitModel";
import { HabbitProvider } from "../context/HabbitContext";
import EmptyState from "../EmptyState/EmptyState";

const AddHabit = () => {
  const { showModel, setShowModel, habits } = useContext(HabbitProvider);
  return (
    <div className="add-habit-wrapper mt-20">
      {habits.length === 0 && !showModel && <EmptyState />}
      <button onClick={() => setShowModel(true)} className="add-habit-btn">
        + Add Habit
      </button>
      {showModel && <AddHabitModel />}
    </div>
  );
};

export default AddHabit;
