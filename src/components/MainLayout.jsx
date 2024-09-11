// MainLayout.js
import  Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex font-inter">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1">


        <Navbar toggleSidebar={toggleSidebar} />


        <div className="p-6"><Outlet/></div>
      </div>
    </div>
  );
};

export default MainLayout;
