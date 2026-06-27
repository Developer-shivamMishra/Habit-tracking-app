import React from "react";

const StatCard = ({ title, value }) => {
  return (
    <div className="stat-card">
      <h1 className="stat-title">{title}</h1>
      <h1 className="stat-value">{value}</h1>
    </div>
  );
};

export default StatCard;
