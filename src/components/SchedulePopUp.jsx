import React from "react";

const SchedulePopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 animate-fade-in-up"
      onClick={onClose}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 animate-scale-in">
        <h3 className="text-2xl font-semibold mb-4">Schedule</h3>
        {/* Your schedule content here */}
      </div>
    </div>
  );
};

export default SchedulePopUp;
