import React from "react";
import { NavLink } from "react-router-dom";
import shepherd_logo from "../assets/svgs/shepherd.svg";
import { MdDashboard } from "react-icons/md";
import { RiGroupLine, RiMessage2Line } from "react-icons/ri";
import { LiaScrollSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-52 bg-white shadow-md transform transition-transform duration-300 lg:translate-x-0 flex flex-col ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-50`}
    >
      <div className="p-4 flex-grow">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 focus:outline-none absolute top-4 right-4"
        >
          <IoMdClose className="h-6 w-6" />
        </button>

        {/* Logo */}
        <div className="flex items-center space-x-2 mb-10 ml-3 mt-1">
          <img src={shepherd_logo} alt="Logo" className="h-10 w-30" />
        </div>

        {/* Sidebar Links */}
        <nav className="space-y-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 text-[#207DF7] bg-[#F0F6FE] p-2 rounded-md"
                : "flex items-center space-x-3 text-[#6E7682] p-2 hover:bg-[#F0F6FE] rounded-md"
            }
          >
            <MdDashboard />
            <span className="font-medium text-sm">Dashboard</span>
          </NavLink>

          <NavLink
            to="/clients"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 text-[#207DF7] bg-[#F0F6FE] p-2 rounded-md"
                : "flex items-center space-x-3 text-[#6E7682] p-2 hover:bg-[#F0F6FE] rounded-md"
            }
          >
            <RiGroupLine />
            <span className="font-medium text-sm">Clients</span>
          </NavLink>

          <NavLink
            to="/offers"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 text-[#207DF7] bg-[#F0F6FE] p-2 rounded-md"
                : "flex items-center space-x-3 text-[#6E7682] p-2 hover:bg-[#F0F6FE] rounded-md"
            }
          >
            <LiaScrollSolid />
            <span className="font-medium text-sm">Offers</span>
          </NavLink>

          <NavLink
            to="/messages"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 text-[#207DF7] bg-[#F0F6FE] p-2 rounded-md"
                : "flex items-center space-x-3 text-[#6E7682] p-2 hover:bg-[#F0F6FE] rounded-md"
            }
          >
            <RiMessage2Line />
            <span className="font-medium text-sm">Messages</span>
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-3 text-[#207DF7] bg-[#F0F6FE] p-2 rounded-md"
                : "flex items-center space-x-3 text-[#6E7682] p-2 hover:bg-[#F0F6FE] rounded-md"
            }
          >
            <CiSettings />
            <span className="font-medium text-sm">Settings</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
