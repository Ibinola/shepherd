import React, { useState } from 'react';
import Profile from './MyProfile';
import Security from './Security';

// import Notifications from './Notifications';
import Payment from './Payment';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <Profile />;
      case 'security':
        return <Security />;
      // case 'notifications':
      //   return <Notifications />;
      case 'payment':
        return <Payment />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex flex-col min-w-full  md:flex-row w-full h-screen overflow-auto">
      {/* Sidebar Menu */}
      <aside className="w-min-full md:w-1/4 m-6 p-6 border rounded-lg border-gray-300 overflow-none">
        <ul className='flex flex-wrap justify-between md:flex-col '>
          <li
            className={`p-3 mb-2 cursor-pointer rounded ${
              activeSection === 'profile' ? "flex items-center space-x-3 text-[#207DF7] bg-[#F0F6FE] p-2 rounded-md"
                : "flex items-center space-x-3 text-[#6E7682] p-2 hover:bg-[#F0F6FE] rounded-md"
            }`}
            onClick={() => setActiveSection('profile')}
          >
            My Profile
          </li>
          <li
            className={`p-3 mb-2 cursor-pointer rounded ${
              activeSection === 'security' ? "flex items-center space-x-3 text-[#207DF7] bg-[#F0F6FE] p-2 rounded-md"
                : "flex items-center space-x-3 text-[#6E7682] p-2 hover:bg-[#F0F6FE] rounded-md"
            }`}
            onClick={() => setActiveSection('security')}
          >
            Security
          </li>
          <li
           className={`p-3 mb-2 cursor-pointer rounded ${
            activeSection === 'notifications' ? "flex items-center space-x-3 text-[#207DF7] bg-[#F0F6FE] p-2 rounded-md"
                : "flex items-center space-x-3 text-[#6E7682] p-2 hover:bg-[#F0F6FE] rounded-md"
          }`}
          
            onClick={() => setActiveSection('notifications')}
          >
            Notifications
          </li>
          <li
            className={`p-3 mb-2 cursor-pointer rounded ${
              activeSection === 'payment' ? "flex items-center space-x-3 text-[#207DF7] bg-[#F0F6FE] p-2 rounded-md"
                : "flex items-center space-x-3 text-[#6E7682] p-2 hover:bg-[#F0F6FE] rounded-md"
            }`}
            onClick={() => setActiveSection('payment')}
          >
            Payment
          </li>
        </ul>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 overflow-y-auto ">
        {renderSection()}
      </main>
    </div>
  );
};

export default Settings;
