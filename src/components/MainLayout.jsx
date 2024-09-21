import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col font-inter h-full md:h-screen">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="flex flex-col flex-1 ml-0 lg:ml-52">
                <Navbar toggleSidebar={toggleSidebar} />

                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
