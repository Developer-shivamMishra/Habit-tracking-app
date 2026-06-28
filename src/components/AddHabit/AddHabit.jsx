import React, { useContext, useState } from "react";
import AddHabitModel from "../AddHabitModel/AddHabitModel";
import { HabbitProvider } from "../context/HabbitContext";
import EmptyState from "../EmptyState/EmptyState";
import { FiPlusCircle } from "react-icons/fi";

const AddHabit = () => {
  const { showModel, setShowModel, habits } = useContext(HabbitProvider);
  return (
    <div className="add-habit-wrapper  ">
      {habits.length === 0 && !showModel && <EmptyState />}
      <button
        onClick={() => setShowModel(true)}
        className="add-habit-btn text-[#fffffff6] mt-6 flex items-center gap-3 border-2 text-lgl border-[#ece6e6]"
      >
        <span className=" text-xl text-[#fff]">
          <FiPlusCircle />
        </span>
        Add Habit item
      </button>
      {showModel && <AddHabitModel />}
    </div>
  );
};

export default AddHabit;
