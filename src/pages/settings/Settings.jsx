import React, { useState, useRef, useEffect } from "react";
import Profile from "./MyProfile";
import Security from "./Security";
import Payment from "./Payment";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.classList.add("fade-out");
      const timer = setTimeout(() => {
        contentRef.current.classList.remove("fade-out");
        contentRef.current.classList.add("fade-in");
      }, 100); // Delay the fade-in to allow the fade-out to complete

      return () => clearTimeout(timer);
    }
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />;
      case "security":
        return <Security />;
      case "payment":
        return <Payment />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex w-full h-full">
      {/* Sidebar Menu */}
      <aside className="w-1/4 bg-gray-100 p-6 border-r border-gray-300 ovr">
        <ul>
          <li
            className={`p-3 mb-2 cursor-pointer rounded transform transition-transform duration-300 ease-in-out ${
              activeSection === "profile"
                ? "bg-blue-500 text-white scale-105"
                : "hover:bg-blue-100 hover:scale-105"
            }`}
            onClick={() => setActiveSection("profile")}
          >
            My Profile
          </li>
          <li
            className={`p-3 mb-2 cursor-pointer rounded transform transition-transform duration-300 ease-in-out ${
              activeSection === "security"
                ? "bg-blue-500 text-white scale-105"
                : "hover:bg-blue-100 hover:scale-105"
            }`}
            onClick={() => setActiveSection("security")}
          >
            Security
          </li>
          <li
            className={`p-3 mb-2 cursor-pointer rounded transform transition-transform duration-300 ease-in-out ${
              activeSection === "notifications"
                ? "bg-blue-500 text-white scale-105"
                : "hover:bg-blue-100 hover:scale-105"
            }`}
            onClick={() => setActiveSection("notifications")}
          >
            Notifications
          </li>
          <li
            className={`p-3 mb-2 cursor-pointer rounded transform transition-transform duration-300 ease-in-out ${
              activeSection === "payment"
                ? "bg-blue-500 text-white scale-105"
                : "hover:bg-blue-100 hover:scale-105"
            }`}
            onClick={() => setActiveSection("payment")}
          >
            Payment
          </li>
        </ul>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div ref={contentRef} className="content-container">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Settings;
