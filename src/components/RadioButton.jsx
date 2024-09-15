// RadioButton.js
import React from "react";

function RadioButton({ label, value, selectedValue, onChange, icon }) {
  const isSelected = value === selectedValue;

  return (
    <label
      className={`ml-0 flex items-center border p-4 rounded-lg cursor-pointer transition-colors ${
        isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"
      }`}
    >
      <input
        type="radio"
        value={value}
        checked={isSelected}
        onChange={onChange}
        className="hidden"
      />
      <div className="flex flex-col justify-start space-x-4">
        {/* Display the icon */}
        <div className="">
          <img src={icon} alt={label} />
        </div>
        <span className="text-sm text-gray-700 w-[159px] mt-4 font-[500] text-[16px] leading-[23px]">
          {label}
        </span>
      </div>
    </label>
  );
}

export default RadioButton;
