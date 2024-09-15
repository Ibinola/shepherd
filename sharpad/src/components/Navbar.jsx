import React from "react";
import notification_bell from "../assets/svgs/notification-bell.svg";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="h-16 text-neutral-content mb-12 bg-white border-b">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        <div>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 focus:outline-none"
          >
            <IoMdMenu className="h-6 w-6" />
          </button>
        </div>

        <div className="flex items-center">
          <img
            src={notification_bell}
            alt="Notifications"
            className="h-6 w-6 mr-6 cursor-pointer"
          />

          <div className="flex items-center space-x-2 bg-[#F4F5F5] py-2 px-4 rounded-full cursor-pointer">
            <span className="bg-[#4CAF50] rounded-full text-white w-8 h-8 flex items-center justify-center">
              L
            </span>

            <span className="text-sm font-medium text-[#212224]">
              Leslie Peters
            </span>

            <span>
              <IoIosArrowDown />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
