import React, { useContext } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import HabbitContext, { HabbitProvider } from "../context/HabbitContext";

const MonthHeader = () => {
  const { currentDate, PrevMonth, NextMonth } = useContext(HabbitProvider);
  return (
    <div className="w-full sm:w-3/4 md:w-1/2 text-white flex justify-around items-center mt-4 px-4 fixed top-0 left-0 right-0">
      <button
        onClick={PrevMonth}
        className="month-nav-btn month-nav-btn-left border-2 border-[#87858522] bg-[#87858522] p-1 sm:p-2 rounded"
        aria-label="Previous month"
      >
        <MdKeyboardArrowLeft className="text-xl sm:text-2xl" />
      </button>
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
        {currentDate.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </h1>
      <button
        onClick={NextMonth}
        className="month-nav-btn month-nav-btn-right border-2 border-[#87858522] bg-[#87858522] p-1 sm:p-2 rounded"
        aria-label="Next month"
      >
        <MdKeyboardArrowRight className="text-xl sm:text-2xl" />
      </button>
    </div>
  );
};

export default MonthHeader;
