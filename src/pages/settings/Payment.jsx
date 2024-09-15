import React, { useState } from 'react';

const Payment = () => {
  // State to manage edit mode
  const [isEditing, setIsEditing] = useState({
    accountName: false,
    accountNumber: false,
    bankName: false
  });

  // State to manage payment information
  const [paymentInfo, setPaymentInfo] = useState({
    accountName: 'lateefkolade98@gmail.com',
    accountNumber: '0214582140',
    bankName: 'Bank of America'
  });

  // Handle change in input fields
  const handleChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value
    });
  };

  // Toggle edit mode for specific field
  const toggleEdit = (field) => {
    setIsEditing((prevState) => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  };

  return (
    <div>
      {/* <h2 className="text-2xl font-bold mb-6">Account settings</h2> */}

      {/* Payment Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Payment</h3>

        {/* Account Name Row */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <div>
            <p className="text-gray-600">Account name</p>
            {isEditing.accountName ? (
              <input
                type="text"
                name="accountName"
                value={paymentInfo.accountName}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              />
            ) : (
              <p className="text-sm">{paymentInfo.accountName}</p>
            )}
          </div>
          <button
            className="text-sm text-blue-500"
            onClick={() => toggleEdit('accountName')}
          >
            {isEditing.accountName ? 'Save' : 'Change'}
          </button>
        </div>

        {/* Account Number Row */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <div>
            <p className="text-gray-600">Account number</p>
            {isEditing.accountNumber ? (
              <input
                type="text"
                name="accountNumber"
                value={paymentInfo.accountNumber}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              />
            ) : (
              <p className="text-sm">{paymentInfo.accountNumber}</p>
            )}
          </div>
          <button
            className="text-sm text-blue-500"
            onClick={() => toggleEdit('accountNumber')}
          >
            {isEditing.accountNumber ? 'Save' : 'Change'}
          </button>
        </div>

        {/* Bank Name Row */}
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="text-gray-600">Bank name</p>
            {isEditing.bankName ? (
              <input
                type="text"
                name="bankName"
                value={paymentInfo.bankName}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              />
            ) : (
              <p className="text-sm">{paymentInfo.bankName}</p>
            )}
          </div>
          <button
            className="text-sm text-blue-500"
            onClick={() => toggleEdit('bankName')}
          >
            {isEditing.bankName ? 'Save' : 'Change'}
          </button>
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
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="text-gray-600">Contact support</p>
            <p className="text-sm">Need help? Kindly reach out to our support team via mail</p>
          </div>
          <button className="text-sm text-blue-500">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
