import React, { useReducer } from "react";
import DeleteModal from "../../components/DeleteModal";
import LogoutModal from "../../components/LogoutModal";

const initialState = {
  isEditing: {
    email: false,
    password: false,
  },
  accountInfo: {
    email: "lesliepeters123@gmail.com",
    password: "************",
  },
  showModal: {
    logout: false,
    deleteAccount: false,
  },
};

// Reducer function to handle state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_EDIT":
      return {
        ...state,
        isEditing: {
          ...state.isEditing,
          [action.field]: !state.isEditing[action.field],
        },
      };
    case "UPDATE_ACCOUNT_INFO":
      return {
        ...state,
        accountInfo: {
          ...state.accountInfo,
          [action.field]: action.value,
        },
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        showModal: {
          ...state.showModal,
          [action.modal]: !state.showModal[action.modal],
        },
      };
    case "SHOW_MODAL":
      return {
        ...state,
        showModal: {
          ...state.showModal,
          [action.modal]: true,
        },
      };
    case "HIDE_MODAL":
      return {
        ...state,
        showModal: {
          ...state.showModal,
          [action.modal]: false,
        },
      };
    default:
      return state;
  }
};

const Security = () => {
  // Use reducer to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Handlers for different actions
  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_ACCOUNT_INFO",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const toggleEdit = (field) => {
    dispatch({
      type: "TOGGLE_EDIT",
      field,
    });
  };

  const showModal = (modal) => {
    dispatch({
      type: "SHOW_MODAL",
      modal,
    });
  };

  const hideModal = (modal) => {
    dispatch({
      type: "HIDE_MODAL",
      modal,
    });
  };

  const handleLogout = () => {
    showModal("logout");
  };

  const handleDeleteAccount = () => {
    showModal("deleteAccount");
  };

  // const handleLogoutConfirm = () => {
  //   // Perform logout action
  //   console.log("Logged out from all devices");
  //   hideModal("logout");
  // };

  // const handleDeleteAccountConfirm = () => {
  //   // Perform delete account action
  //   console.log("Account deleted");
  //   hideModal("deleteAccount");
  // };

  return (
    <div className="transition-opacity duration-500 ease-in-out">
      {state.showModal.logout && (
        <LogoutModal
          showLogoutModal={state.showModal.logout}
          setShowLogoutModal={() => hideModal("logout")}
        />
      )}
      {state.showModal.deleteAccount && (
        <DeleteModal
          showDeleteModal={state.showModal.deleteAccount}
          setShowDeleteModal={() => hideModal("deleteAccount")}
        />
      )}
      {/* Account Security Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-transform transform hover:scale-105 duration-300">
        <h3 className="text-lg font-semibold mb-4">Account Security</h3>

        {/* Email Row */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200 transition-colors duration-300 hover:bg-gray-100">
          <div>
            <p className="text-gray-600">Email</p>
            {state.isEditing.email ? (
              <input
                type="email"
                name="email"
                value={state.accountInfo.email}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:border-[#207df7] focus:outline-none transition-all duration-300"
              />
            ) : (
              <p className="text-sm">{state.accountInfo.email}</p>
            )}
          </div>
          <button
            className="text-sm text-[#207df7] hover:text-blue-600 transition-all duration-300"
            onClick={() => toggleEdit("email")}
          >
            {state.isEditing.email ? "Save" : "Change"}
          </button>
        </div>

        {/* Password Row */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200 transition-colors duration-300 hover:bg-gray-100">
          <div>
            <p className="text-gray-600">Password</p>
            {state.isEditing.password ? (
              <input
                type="password"
                name="password"
                value={state.accountInfo.password}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:border-[#207df7] focus:outline-none transition-all duration-300"
              />
            ) : (
              <p className="text-sm">{state.accountInfo.password}</p>
            )}
          </div>
          <button
            className="text-sm text-[#207df7] hover:text-blue-600 transition-all duration-300"
            onClick={() => toggleEdit("password")}
          >
            {state.isEditing.password ? "Save" : "Change"}
          </button>
        </div>

        {/* Logout All Devices */}
        <div className="py-4">
          <button
            className="text-sm text-red-500 font-medium hover:underline transition-transform transform hover:scale-105 duration-300"
            onClick={handleLogout}
          >
            Log out of all devices
          </button>
          <p className="text-xs text-gray-500">
            Log out of all other active sessions on other devices besides this
            one.
          </p>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 duration-300">
        <h3 className="text-lg font-semibold mb-4">Support</h3>

        {/* Terms and Conditions Row */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200 transition-colors duration-300 hover:bg-gray-100">
          <div>
            <p className="text-gray-600">Terms and conditions</p>
            <p className="text-sm">Read Shepherd's terms & conditions</p>
          </div>
          <button className="text-sm text-[#207df7] hover:text-blue-600 transition-all duration-300 hover:scale-105">
            &#8250;
          </button>
        </div>

        {/* Contact Support Row */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200 transition-colors duration-300 hover:bg-gray-100">
          <div>
            <p className="text-gray-600">Contact support</p>
            <p className="text-sm">
              Need help? Kindly reach out to our support team via mail
            </p>
          </div>
          <button className="text-sm text-[#207df7] hover:text-blue-600 transition-all duration-300 hover:scale-105">
            &#8250;
          </button>
        </div>

        {/* Delete Account */}
        <div className="py-4">
          <button
            className="text-sm text-red-500 font-medium hover:underline transition-transform transform hover:scale-105 duration-300"
            onClick={handleDeleteAccount}
          >
            Delete my account
          </button>
          <p className="text-xs text-gray-500">
            Permanently delete your Shepherd account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Security;
