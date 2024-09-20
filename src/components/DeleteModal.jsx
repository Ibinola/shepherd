import React, { useEffect, useState } from "react";
import Calender from "../assets/svgs/Calendar.svg";

function DeleteModal({ showDeleteModal, setShowDeleteModal }) {
  const [isVisible, setIsVisible] = useState(showDeleteModal);

  useEffect(() => {
    if (showDeleteModal) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [showDeleteModal]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center transition-all duration-300 ease-in-out">
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          showDeleteModal ? "opacity-50" : "opacity-0"
        }`}
        onClick={() => setShowDeleteModal(false)}
      ></div>

      <div className="bg-white max-h-full z-30 p-6 rounded-lg shadow-lg relative w-[422px]  transition-all duration-300 ease-in-out fade-in-out">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={() => setShowDeleteModal(false)}
        >
          <img src={Calender} alt="Close delete modal" />
        </button>

        <div className="text-center border-b p-3">
          <h3 className="text-lg leading-6 text-[#212224] font-[500] text-[14px]">
            Are you sure you want to delete?
          </h3>
        </div>

        <div className="flex text-center justify-center items-center w-[365px] mt-2 max-w-md mx-auto p-4 text-[#212224] font-[400]">
          This action cannot be undone. Once you delete this item, it will be
          permanently removed.
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            onClick={() => {
              // Perform delete action
              setShowDeleteModal(false);
            }}
          >
            Delete
          </button>
          <button
            className="ml-4 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
