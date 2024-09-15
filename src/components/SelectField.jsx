import React from "react";

export const SelectField = ({ label, name, value, onChange, options }) => {
  return (
    <div className="w-full">
      <label className="text-sm">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border border-[#E4E5E7] p-2 w-full rounded-md"
      >
        <option value="" className="text-[#9A9DA2] text-sm">
          Select your country
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
