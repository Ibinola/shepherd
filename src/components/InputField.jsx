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
        className="border rounded-md border-[#E4E5E7] p-2 w-full"
        onChange={onChange}
        value={value}
        autoFocus
      />
    </>
  );
};
