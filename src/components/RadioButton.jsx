import React from "react";

function RadioButton({ label, name, value, selectedValue, onChange, icon }) {
  const isSelected = value === selectedValue;

  return (
    <label
      className={`ml-0 flex border p-4 rounded-lg cursor-pointer transition-colors duration-300 ${
        isSelected ? "border-blue-500 " : "border-gray-200"
      }`}
    >
      <input
        type="radio"
        value={value}
        name={name}
        checked={isSelected}
        onChange={onChange}
        className="hidden"
      />
      <div className="flex flex-col text-left space-x-4">
        {/* Display the icon */}
        <div className="ml-2">
          <img src={icon} alt={label} />
        </div>
        <span className="text-base text-[#212224] w-[159px] mt-4 font-[500] text-[16px] leading-[23px]">
          {label}
        </span>
      </div>
    </label>
  );
}

export default RadioButton;
