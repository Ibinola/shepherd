// Button.js
import React from "react";

const Button = ({ label, onClick, type = "button", className = "", ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-[201px] md:w-[401px]  mx-auto block py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
