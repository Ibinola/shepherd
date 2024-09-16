import React, { useState } from "react";
import Profile from "./MyProfile";
import Security from "./Security";
// import Notifications from './Notifications';
import Payment from "./Payment";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />;
      case "security":
        return <Security />;
      // case 'notifications':
      //   return <Notifications />;
      case "payment":
        return <Payment />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex w-full h-screen">
      {/* Sidebar Menu */}
      <aside className="w-1/4 bg-gray-100 p-6 border-r border-gray-300">
        <ul>
          <li
            className={`p-3 mb-2 cursor-pointer rounded ${
              activeSection === "profile"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-100"
            }`}
            onClick={() => setActiveSection("profile")}
          >
            My Profile
          </li>
          <li
            className={`p-3 mb-2 cursor-pointer rounded ${
              activeSection === "security"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-100"
            }`}
            onClick={() => setActiveSection("security")}
          >
            Security
          </li>
          <li
            className={`p-3 mb-2 cursor-pointer rounded ${
              activeSection === "notifications"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-100"
            }`}
            onClick={() => setActiveSection("notifications")}
          >
            Notifications
          </li>
          <li
            className={`p-3 mb-2 cursor-pointer rounded ${
              activeSection === "payment"
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-100"
            }`}
            onClick={() => setActiveSection("payment")}
          >
            Payment
          </li>
        </ul>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 overflow-y-auto">{renderSection()}</main>
    </div>
  );
};

export default Settings;
