import React from "react";

const TotalsDisplay = () => {
  const totals = {
    hours: "20 hrs",
    amountReceived: "$212.00",
    totalAmount: "$412.00",
  };

  return (
    <div className=" bg-[#F7F7F8] text-[#212224] p-4  max-w-md mx-auto flex justify-between items-center ">
      <div className="text-left ">
        <div className="text-[12px] font-medium text-gray-400">Total Hours</div>
        <div className="text-[12px] text-[#212224]">{totals.hours}</div>
      </div>
      <div className="text-left">
        <div className="text-[12px] font-medium text-gray-400">
          Amount Received
        </div>
        <div className="text-[12px] text-[#212224]">
          {totals.amountReceived}
        </div>
      </div>
      <div className="text-left">
        <div className="text-[12px] font-medium text-gray-400">
          Total Amount
        </div>
        <div className="text-[12px] text-[#212224]">{totals.totalAmount}</div>
      </div>
    </div>
  );
};

export default TotalsDisplay;
