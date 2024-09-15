// import React from "react";
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import Notification from "../assets/svgs/Notification.svg";
// import { Link, useLocation } from "react-router-dom";
// import { IoMdMenu } from "react-icons/io";
// import { IoMdClose } from "react-icons/io";

// const Navbar = ({ toggleSidebar }) => {
//   const location = useLocation();

//   // Toggle the sidebar and update the state
//   // const handleToggleSidebar = () => {
//   //   setIsSidebarOpen(!isSidebarOpen);
//   //   setIsSidebarOpen(!isSidebarOpen);
//   // };
//   const hideOnPaths = ["/", "/offers", "/messages", "/settings"];

//   return (
//     <nav className="top-0 left-0  z-10 bg-white shadow-md h-[72px] flex items-center">
//       <div className="container-auto px-4 py-2 flex justify-between items-center w-full">
//         {/* Hamburger menu button */}

//         <button
//           onClick={toggleSidebar}
//           className="lg:hidden p-2 focus:outline-none"
//         >
//           <IoMdMenu className="h-6 w-6" />
//         </button>

//         {/* Search input */}
//         {!hideOnPaths.includes(location.pathname) && (
//           <div className="relative max-w-md hidden md:flex ">
//             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//               <FontAwesomeIcon
//                 icon={faSearch}
//                 className="text-gray-400 focus:text-[#207df7]"
//               />
//             </span>
//             <input
//               type="text"
//               placeholder="Search by name"
//               className="block pl-10 p-2 border border-[#E2E4E9] shadow-sm focus:border-[#207df7] focus:outline-0 h-[38px] rounded-md"
//             />
//           </div>
//         )}

//         {/* Right side items (fixed position) */}
//         <div className="fixed right-0 flex items-center space-x-4 mr-4">
//           {!hideOnPaths.includes(location.pathname) && (
//             <div className="hidden md:flex w-[165px] items-start border-r-2 border-[#E8E9ED]">
//               <button
//                 className={`bg-[#207DF7] text-white py-2 px-4 rounded-xl`}
//               >
//                 + Create New
//               </button>
//             </div>
//           )}
//           <div className="flex items-center gap-4">
//             <img src={Notification} alt="Notification" />
//             <div className="bg-[#F4F5F5] w-[149px] h-[40px] flex justify items-center rounded-2xl ">
//               <span className="flex w-[28px] h-[28px] rounded-xl bg-[#4caf50] text-gray-100 justify-center items-center">
//                 L
//               </span>
//               <select className=" focus:outline-0 w-full max-w-xs bg-[#F4F5F5] cursor-pointer font-[500] text-black ">
//                 <option disabled selected>
//                   Liam Kelly
//                 </option>
//                 <option className="flex items-center justify-center text-black bg-white cursor-pointer">
//                   Settings &#9881;
//                 </option>

//                 <option className="flex items-center justify-center text-black bg-white cursor-pointer">
//                   Log-out &#9873;
//                 </option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Notification from "../assets/svgs/Notification.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const hideOnPaths = ["/dashboard", "/offers", "/messages", "/settings"];

  // Handle the select change event to navigate on "Log-out" option
  const handleSelectChange = (e) => {
    if (e.target.value === "logout") {
      navigate("/"); // Redirect to home or logout route
    }
  };

  return (
    <nav className="top-0 left-0 z-10 bg-white shadow-md h-[72px] flex items-center">
      <div className="container-auto px-4 py-2 flex justify-between items-center w-full">
        {/* Hamburger menu button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 focus:outline-none"
        >
          {isSidebarOpen ? (
            <IoMdClose className="h-6 w-6" />
          ) : (
            <IoMdMenu className="h-6 w-6" />
          )}
        </button>

        {/* Search input */}
        {!hideOnPaths.includes(location.pathname) && (
          <div className="relative max-w-md hidden md:flex">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-gray-400 focus:text-[#207df7]"
              />
            </span>
            <input
              type="text"
              placeholder="Search by name"
              className="block pl-10 p-2 border border-[#E2E4E9] shadow-sm focus:border-[#207df7] focus:outline-0 h-[38px] rounded-md"
            />
          </div>
        )}

        {/* Right side items */}
        <div className="fixed right-0 flex items-center space-x-4 mr-4">
          {!hideOnPaths.includes(location.pathname) && (
            <div className="hidden md:flex w-[165px] items-start border-r-2 border-[#E8E9ED]">
              <button className="bg-[#207DF7] text-white py-2 px-4 rounded-xl hover:bg-blue-600">
                + Create New
              </button>
            </div>
          )}

          <div className="flex items-center gap-4">
            <img src={Notification} alt="Notification" />
            <div className="bg-[#F4F5F5] w-[149px] h-[40px] flex justify items-center rounded-2xl  hover:bg-gray-200">
              <span className="flex w-[28px] h-[28px] rounded-xl bg-[#4caf50] text-gray-100 justify-center items-center">
                L
              </span>
              <select
                className="focus:outline-0 w-full max-w-xs bg-[#F4F5F5] cursor-pointer font-[500] text-black  hover:bg-gray-200 "
                onChange={handleSelectChange}
              >
                <option className="hover:bg-gray-200">Liam Kelly</option>
                <option className="flex items-center justify-center text-black bg-white cursor-pointer hover:bg-gray-200">
                  Settings &#9881;
                </option>
                <option
                  value="logout"
                  className="flex items-center justify-center text-black bg-white cursor-pointer hover:bg-gray-200"
                >
                  Log-out &#9873;
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
