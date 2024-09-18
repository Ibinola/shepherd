import React from "react";

export const InputField = ({
  id,
  children,
  name,
  type,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id} className="text-[#5C5F64] text-sm font-medium">
        {children}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="border rounded-md border-[#E4E5E7] p-2 w-full  focus:border-blue-600 focus:outline-none hover:border-blue-600 hover:shadow-lg active:scale-95 transform transition-all duration-300"
        onChange={onChange}
        value={value}
        autoFocus
      />
    </>
  );
};
