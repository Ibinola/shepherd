import React from "react";
import Clientcard from "../assets/svgs/Clientcard.svg";

const MyDesign = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className=" text-[#212224]  text-left p-4">
        <h1 className="text-2xl font text-[#212224]">Clients</h1>
      </header>

      <main className="flex-grow flex justify-center items-center bg-gray-100 p-8">
        <div>
          <img src={Clientcard} alt="" className="animate-ping" />
          <h2 className="text-2xl mb-4 text-[#585F68] font-[500] whitespace-nowrap">
            You don’t have any clients yet
          </h2>
        </div>
      </main>
    </div>
  );
};

export default MyDesign;
