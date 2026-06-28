import React, { useContext } from "react";
import { HabbitProvider } from "../context/HabbitContext";

const DayCell = ({ day }) => {
  const { totaldays, days } = useContext(HabbitProvider);

  return (
    <div className="day-cell-wrapper">
      <div className="day-cell-grid">
        {days.map((day) => (
          <div key={day} className="day-cell">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayCell;
