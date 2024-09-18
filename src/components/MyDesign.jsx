import React from "react";
import Clientcard from "../assets/svgs/Clientcard.svg";

const MyDesign = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      <header className="text-[#212224] text-left p-4">
        <h1 className="text-2xl font-semibold text-[#212224] animate-fade-in">
          Clients
        </h1>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center p-8">
        <div className="flex flex-col items-center">
          {/* Refined ping animation with scale effect */}
          <div className="relative animate-fade-in">
            <img
              src={Clientcard}
              alt="Client Card"
              className="w-48 h-48 opacity-90 transition-transform duration-700 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-48 h-48 rounded-full animate-ping-slow bg-gray-200 opacity-40"></div>
            </div>
          </div>

          {/* Heading with staggered animation */}
          <h2 className="text-2xl mt-6 text-[#585F68] font-medium text-center whitespace-nowrap animate-fade-in-up animation-delay-300">
            You don't have any clients yet
          </h2>

          {/* Optional subtle subtext with staggered animation */}
          <p className="text-md text-gray-500 mt-2 text-center animate-fade-in-up animation-delay-600">
            Start adding clients to manage them here.
          </p>
        </div>
      </main>
    </div>
  );
};

export default MyDesign;
