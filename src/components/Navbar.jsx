import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { ProfileDropdown } from "./ProfileDropdown";
import notification_bell from "../assets/svgs/notification-bell.svg";
import { NotificationDropdown } from "./NotificationDropdown";

function Navbar({ toggleSidebar }) {
  const location = useLocation();
  const isClientsPage = location.pathname === "/clients";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-white border-b">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 focus:outline-none "
        >
          <IoMdMenu className="h-6 w-6" />
        </button>

        {isClientsPage && (
          <input
            type="text"
            placeholder="Search Clients"
            className="hidden sm:block border rounded-md px-4 py-2 w-48 md:w-64 lg:w-80 focus:border-[#207df7] focus:outline-0"
          />
        )}
      </div>

      <div className="flex items-center space-x-4 ">
        {isClientsPage && (
          <button className="hidden sm:block bg-[#207DF7]  hover:bg-blue-600 text-sm text-white px-5 py-2 rounded-lg">
            + Create New
          </button>
        )}

        <img
          src={notification_bell}
          alt="Notifications"
          className="h-6 w-6 mr-6 cursor-pointer"
        />

        <div className="relative ">
          <ProfileDropdown
            isOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
          />
          <NotificationDropdown isOpen={isDropdownOpen} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
