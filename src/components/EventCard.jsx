import React from "react";
import Ellipse from "../assets/svgs/Ellipse.svg";

const EventCard = () => {
  const event = {
    date: "8th May",
    startTime: "03:30 pm",
    endTime: "04:30 pm",
    duration: "1 hr",
  };

  return (
    <div className="  p-4 rounded-lg max-w-sm mx-auto">
      <div className="text-[#585F68] text-[10px] font-[400]">{event.date}</div>
      <div className="flex justify-between items-center border rounded p-2 max-w-full">
        <div className="text-[#585F68] flex items-center">
          <span className="mr-2">
            <img src={Ellipse} alt="" />
          </span>
          <span>{event.startTime}</span>
          <span className="mx-2">→</span>
          <span>{event.endTime}</span>
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-[#F0F6FE] rounded-xl">
          <span className="text-[#207DF7] text-sm">{event.duration}</span>
        </div>
      </div>

      <div className="text-[#585F68] text-[10px] font-[400]">{event.date}</div>
      <div className="flex justify-between items-center border rounded p-2 max-w-full mt-1">
        <div className="text-[#585F68] flex items-center">
          <span className="mr-2">
            <img src={Ellipse} alt="" />
          </span>
          <span>{event.startTime}</span>
          <span className="mx-2">→</span>
          <span>{event.endTime}</span>
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-[#F0F6FE] rounded-xl">
          <span className="text-[#207DF7] text-sm">{event.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
