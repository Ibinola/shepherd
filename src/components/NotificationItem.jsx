import React from "react";

export const NotificationItem = ({ imgSrc, date, message, buttonLabel }) => (
  <div>
    <div className="flex items-center space-x-3 mb-2">
      <div className="w-10 h-10 flex items-center justify-center ">
        <img src={imgSrc} alt="notification item" />
      </div>
      <div>
        <p className="text-xs text-gray-400">{date}</p>
        <p className="text-sm text-gray-600">{message}</p>
        {buttonLabel && (
          <button className="py-1 flex items-center gap-1 px-2 border text-[#73777D] border-dashed rounded-full text-[11px] mt-2 font-medium">
            <span className="w-4 h-4">
              <img src={imgSrc} alt="transaction receipt" />
            </span>{" "}
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
    <hr />
  </div>
);
