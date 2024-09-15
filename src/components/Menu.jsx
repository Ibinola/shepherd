import React, { useReducer } from "react";
import Contract from "../assets/svgs/Contract.svg";
import Delete from "../assets/svgs/Delete.svg";
import Review from "../assets/svgs/Review.svg";
import Modal from "../components/Modal";
import ReviewModal from "../components/ReviewModal";
import DeleteModal from "../components/DeleteModal"; // Import DeleteModal

// Define action types
const actionTypes = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

// Initial state
const initialState = {
  showModal: false,
  showReviewModl: false,
  showDeleteModal: false,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return { ...state, [action.modal]: true };
    case actionTypes.CLOSE_MODAL:
      return { ...state, [action.modal]: false };
    default:
      return state;
  }
};

const Menu = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (modal) => {
    dispatch({ type: actionTypes.OPEN_MODAL, modal });
  };

  const closeModal = (modal) => {
    dispatch({ type: actionTypes.CLOSE_MODAL, modal });
  };

  return (
    <div className="relative">
      <div className="absolute top-8 right-0 bg-white shadow-md border rounded-lg z-10 w-[190px] h-[210px] py-2 px-1 duration-100 ease-in-out">
        <ul className="list p-2">
          <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer font-semibold">
            <span className="flex items-center">
              <img src={Contract} alt="" />
              Contract
            </span>
          </li>
          <li
            className="py-1 px-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap font-semibold"
            onClick={() => openModal("showModal")}
          >
            <span className="flex items-center">
              <img src={Contract} alt="" />
              Monthly report
            </span>
          </li>
          <li
            className="py-1 px-2  hover:bg-gray-100 cursor-pointer whitespace-nowrap font-semibold"
            onClick={() => openModal("showReviewModal")}
          >
            <span className="flex items-center">
              <img src={Review} alt="" />
              Client review
            </span>
          </li>
          <li
            className="py-1 px-2 hover:bg-gray-100 cursor-pointer text-[#F53535] font-semibold"
            onClick={() => openModal("showDeleteModal")}
          >
            <span className="flex items-center">
              <img src={Delete} alt="" />
              Delete
            </span>
          </li>
        </ul>
        <Modal
          showModal={state.showModal}
          setShowModal={() => closeModal("showModal")}
        />
        <ReviewModal
          showReviewModal={state.showReviewModal}
          setShowReviewModal={() => closeModal("showReviewModal")}
        />
        <DeleteModal
          showDeleteModal={state.showDeleteModal} // Corrected state key
          setShowDeleteModal={() => closeModal("showDeleteModal")}
        />
      </div>
    </div>
  );
};

export default Menu;
