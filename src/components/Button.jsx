import React from "react";

const Button = ({
  label,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-[100px] md:w-[401px] mx-auto block py-3 px-4 rounded-lg transition duration-300 ${
        className.includes("bg-") ? "" : "bg-blue-500"
      } ${className.includes("text-") ? "" : "text-white"}  ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
