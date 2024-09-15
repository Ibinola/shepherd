import React from "react";
import alertSvg from "../../assets/svgs/dangerAlertIcon.svg";

const MessageConfirmDelete = ({ isOpen, onClose, onConfirm, userName }) => {
  if (!isOpen) return null; // Don't render if modal is not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          Close x
        </button>

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
            onClick={onConfirm} // Corrected to match the prop name in ViewProfileMenu
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