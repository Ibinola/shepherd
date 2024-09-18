import React, { useState, useRef, useEffect } from "react";
import fileSvg from "../../assets/svgs/file-icon.svg";
import deleteIcon from "../../assets/svgs/delete-icon.svg";
import fowardArrow from "../../assets/svgs/foward-arrow.svg";
import MessageConfirmDelete from "./MessageConfirmDelete";

const ViewProfileMenu = ({ handleFileClick, handleDeleteChat, userName }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedUser, setSelectedUser] = useState(null); // To hold the clicked user's name
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  // Close the menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside both the menu and the toggle button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Open confirmation modal before delete
  const confirmDeleteChat = (userName) => {
    setSelectedUser(userName); // Set the selected user's name
    setIsModalOpen(true); // Open the modal
  };

  const handleDeleteConfirm = () => {
    handleDeleteChat(); // Call the delete logic here after confirmation
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative flex gap-4">
      <button
        className="py-[5px] px-4 text-gray-700 bg-[#E7E8E9] rounded-[6px] border-2 border-[#E7E8E9] 
                   transition-transform transform hover:scale-105 hover:bg-gray-100 hover:border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
      >
        View Profile
      </button>
      <svg
        ref={toggleButtonRef} // toggleMenu ref
        onClick={toggleMenu}
        enableBackground="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="w-[25px] h-[35px]"
      >
        <path
          fill="#969CA6"
          d="M13,16c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,14.346,13,16z"
          id="XMLID_294_"
        />
        <path
          fill="#969CA6"
          d="M13,26c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,24.346,13,26z"
          id="XMLID_295_"
        />
        <path
          fill="#969CA6"
          d="M13,6c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,4.346,13,6z"
          id="XMLID_297_"
        />
      </svg>
      {showMenu && (
        <div
          ref={menuRef}
          className="showMenu absolute right-0 top-10 mt-2 bg-white border rounded-lg shadow-lg p-2 z-10"
        >
          <ul>
            <li className="hover:bg-gray-100 cursor-pointer p-2 flex gap-1 justify-between items-center">
              <div className="flex items-center" onClick={handleFileClick}>
                <img src={fileSvg} alt="file-icon" />
                <span>File</span>
              </div>
              <img src={fowardArrow} alt="Foward Arrow" />
            </li>
            <li
              className="hover:bg-gray-100 cursor-pointer p-2 text-[#F53535] flex gap-1 items-center"
              onClick={() => confirmDeleteChat(userName)} // Pass the user's name
            >
              <img src={deleteIcon} alt="delete-icon" />
              <span className="text-nowrap">Delete Chat</span>
            </li>
          </ul>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <MessageConfirmDelete
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleDeleteConfirm} // Corrected prop name to `onConfirm`
        userName={selectedUser} // Dynamically passing the selected user's name
      />
    </div>
  );
};

export default ViewProfileMenu;
