import React from 'react';

const Profile = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">My Profile</h2>
      <div className="bg-white shadow p-4 rounded-md">
        <p className="text-lg">Leslie Peters</p>
        <p className="text-sm text-gray-500">lesliepeters@gmail.com</p>
        <p className="text-md font-medium mt-2">Hourly Rate: <span className="text-green-600">$20.00/hr</span></p>
        {/* Add other profile details */}
      </div>
    </div>
  );
};

export default Profile;
