import React, { useEffect, useState } from "react";
import Calender from "../../assets/svgs/Calendar.svg";

const LogoutModal = ({ showLogoutModal, setShowLogoutModal }) => {
  const [isVisible, setIsVisible] = useState(showLogoutModal);

  useEffect(() => {
    if (showLogoutModal) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [showLogoutModal]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center transition-all duration-300 ease-in-out">
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          showLogoutModal ? "opacity-50" : "opacity-0"
        }`}
        onClick={() => setShowLogoutModal(false)}
      ></div>

      <div className="bg-white max-h-full z-30 p-6 rounded-lg shadow-lg relative w-[422px] transition-all duration-300 ease-in-out fade-in-out">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={() => setShowLogoutModal(false)}
        >
          <img src={Calender} alt="Close logout modal" />
        </button>

        <div className="text-center border-b p-3">
          <h3 className="text-lg leading-6 text-[#212224] font-[500] text-[14px]">
            Are you sure you want to log out?
          </h3>
        </div>

        <div className="flex text-center justify-center items-center w-[365px] mt-2 max-w-md mx-auto p-4 text-[#212224] font-[400]">
          You will need to log in again to access your account.
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            onClick={() => {
              // Perform logout action
              setShowLogoutModal(false);
            }}
          >
            Log out
          </button>
          <button
            className="ml-4 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
            onClick={() => setShowLogoutModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
