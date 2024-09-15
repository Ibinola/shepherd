import React, { useReducer } from 'react';

// Initial state for reducer
const initialState = {
  isEditing: {
    email: false,
    password: false,
  },
  accountInfo: {
    email: 'lesliepeters123@gmail.com',
    password: '************',
  },
  showModal: {
    logout: false,
    deleteAccount: false,
  },
};

// Reducer function to handle state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_EDIT':
      return {
        ...state,
        isEditing: {
          ...state.isEditing,
          [action.field]: !state.isEditing[action.field],
        },
      };
    case 'UPDATE_ACCOUNT_INFO':
      return {
        ...state,
        accountInfo: {
          ...state.accountInfo,
          [action.field]: action.value,
        },
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        showModal: {
          ...state.showModal,
          [action.modal]: !state.showModal[action.modal],
        },
      };
    case 'RESET_ACCOUNT':
      return initialState; // Reset state on account deletion
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
      type: 'UPDATE_ACCOUNT_INFO',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const toggleEdit = (field) => {
    dispatch({
      type: 'TOGGLE_EDIT',
      field,
    });
  };

  const toggleModal = (modal) => {
    dispatch({
      type: 'TOGGLE_MODAL',
      modal,
    });
  };

  const handleLogoutConfirm = () => {
    // Logic for logging out of all devices
    console.log('Logged out of all devices');
    toggleModal('logout');
  };

  const handleDeleteAccountConfirm = () => {
    // Logic for deleting the account
    console.log('Account deleted');
    toggleModal('deleteAccount');
    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <div>
      {/* <h2 className="text-2xl font-bold mb-6">Account settings</h2> */}

      {/* Account Security Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Account Security</h3>

        {/* Email Row */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <div>
            <p className="text-gray-600">Email</p>
            {state.isEditing.email ? (
              <input
                type="email"
                name="email"
                value={state.accountInfo.email}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              />
            ) : (
              <p className="text-sm">{state.accountInfo.email}</p>
            )}
          </div>
          <button
            className="text-sm text-blue-500"
            onClick={() => toggleEdit('email')}
          >
            {state.isEditing.email ? 'Save' : 'Change'}
          </button>
        </div>

        {/* Password Row */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <div>
            <p className="text-gray-600">Password</p>
            {state.isEditing.password ? (
              <input
                type="password"
                name="password"
                value={state.accountInfo.password}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              />
            ) : (
              <p className="text-sm">{state.accountInfo.password}</p>
            )}
          </div>
          <button
            className="text-sm text-blue-500"
            onClick={() => toggleEdit('password')}
          >
            {state.isEditing.password ? 'Save' : 'Change'}
          </button>
        </div>

        {/* Logout All Devices */}
        <div className="py-4">
          <button
            className="text-sm text-red-500 font-medium"
            onClick={() => toggleModal('logout')}
          >
            Log out of all devices
          </button>
          <p className="text-xs text-gray-500">
            Log out of all other active sessions on other devices besides this one.
          </p>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Support</h3>

        {/* Terms and Conditions Row */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <div>
            <p className="text-gray-600">Terms and conditions</p>
            <p className="text-sm">Read Shepherd's terms & conditions</p>
          </div>
          <button className="text-sm text-blue-500">&gt;</button>
        </div>

        {/* Contact Support Row */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <div>
            <p className="text-gray-600">Contact support</p>
            <p className="text-sm">Need help? Kindly reach out to our support team via mail</p>
          </div>
          <button className="text-sm text-blue-500">&gt;</button>
        </div>

        {/* Delete Account */}
        <div className="py-4">
          <button
            className="text-sm text-red-500 font-medium"
            onClick={() => toggleModal('deleteAccount')}
          >
            Delete my account
          </button>
          <p className="text-xs text-gray-500">Permanently delete your Shepherd account</p>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {state.showModal.logout && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-96">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => toggleModal('logout')}
            >
              &times;
            </button>
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-4xl mb-4">🚪</span>
              <p className="mb-4 text-center">Are you sure you want to log out of all devices?</p>
              <div className="flex justify-end space-x-2">
                <button
                  className="bg-gray-300 px-4 py-2 rounded"
                  onClick={() => toggleModal('logout')}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={handleLogoutConfirm}
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Confirmation Modal */}
      {state.showModal.deleteAccount && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-96">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => toggleModal('deleteAccount')}
            >
              &times;
            </button>
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-4xl mb-4">🗑️</span>
              <p className="mb-4 text-center">Are you sure you want to delete your account?</p>
              <div className="flex justify-end space-x-2">
                <button
                  className="bg-gray-300 px-4 py-2 rounded"
                  onClick={() => toggleModal('deleteAccount')}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={handleDeleteAccountConfirm}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Security;
