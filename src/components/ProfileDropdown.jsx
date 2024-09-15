// import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
// import { UserContext } from "../context/UserContext";

export const ProfileDropdown = ({ isOpen, toggleDropdown }) => {
  // const { user } = useContext(UserContext);
  return (
    <div
      className="flex items-center space-x-2 bg-[#F4F5F5] py-2 px-4 rounded-full cursor-pointer"
      onClick={toggleDropdown}
    >
      <span className="bg-[#4CAF50] rounded-full text-white w-8 h-8 flex items-center justify-center">
        L
      </span>

      <span className="hidden md:block text-sm font-medium text-[#212224]">
        {/* {user?.firstName} {user?.lastName} */}
        Leslie Peters
      </span>

      <span
        className={`transform transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <IoIosArrowDown />
      </span>
    </div>
  );
};
