import React from "react";
import Clientcard from "../assets/svgs/Clientcard.svg";

const MyDesign = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      <header className="text-[#212224] text-left p-4">
        <h1 className="text-2xl font-semibold text-[#212224]">Clients</h1>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center p-8">
        <div className="flex flex-col items-center animate-fade-in">
          {/* Refined ping animation */}
          <div className="relative">
            <img
              src={Clientcard}
              alt="Client Card"
              className="w-48 h-48 opacity-90"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-48 h-48 rounded-full animate-pulse bg-gray-200 opacity-40"></div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl mt-6 text-[#585F68] font-medium text-center whitespace-nowrap animate-fade-in-up">
            You don’t have any clients yet
          </h2>

          {/* Optional subtle subtext */}
          <p className="text-md text-gray-500 mt-2 text-center">
            Start adding clients to manage them here.
          </p>
        </div>
      </main>
    </div>
  );
};

export default MyDesign;
