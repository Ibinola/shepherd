import React, { useEffect, useState } from "react";
import alertSvg from "../../assets/svgs/dangerAlertIcon.svg";
import Calender from "../../assets/svgs/Calendar.svg";

const MessageConfirmDelete = ({ isOpen, onClose, onConfirm, userName }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center transition-all duration-300 ease-in-out">
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative z-30 transition-all duration-300 ease-in-out fade-in-out">
        {/* Close Button */}
        <span
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <img src={Calender} alt="" />
        </span>

        {/* Alert Icon */}
        <div className="flex justify-center mb-4">
          <img src={alertSvg} alt="Alert" className="w-12 h-12 text-red-500" />
        </div>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold mb-4">
          Delete Chat with {userName}?
        </h2>
        <p className="text-gray-600 text-center mb-6">
          This will clear all conversations and remove {userName} from your
          message list. This action cannot be undone.
        </p>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded w-1/2 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-1/2 ml-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageConfirmDelete;
