import React from "react";
import { NavLink } from "react-router-dom";
import shepherd_logo from "../assets/svgs/shepherd.svg";
import { MdDashboard } from "react-icons/md";
import { RiGroupLine, RiMessage2Line } from "react-icons/ri";
import { LiaScrollSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-52 min-h-screen bg-white shadow-md transform transition-transform duration-300 lg:static lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-50 lg:z-auto`}
    >
      <div className="p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-10 ml-3 mt-1">
          <img
            src={shepherd_logo} // Replace with your logo
            alt="Logo"
            className="h-10 w-30"
          />
        </div>

        {/* Sidebar Links */}
        <nav className="space-y-4">
          <NavLink
            to="/"
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
            {/* <FaEnvelope /> */}
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
