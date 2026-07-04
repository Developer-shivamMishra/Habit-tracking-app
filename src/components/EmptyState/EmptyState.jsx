import React from "react";

const EmptyState = () => {
  return (
    <div>
      <h3 className="text-[rgb(255,255,255)] text-center flex flex-col gap-2">
        No habits yet{" "}
        <p className="text-[rgba(36,35,35,0.29)] text-center leading-[1.6]">
          Start building your routine. Add your first <br />
          habit and track it daily.
        </p>
      </h3>
    </div>
  );
};

export default EmptyState;
