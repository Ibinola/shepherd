import React from "react";
import Star from "../assets/svgs/Star.svg";

const ReviewContent = () => {
  return (
    <div className="flex items-center justify-center gap-8 mt-2 p-3 cursor-pointer">
      <span className="flex justify-center border rounded w-[54px]  text-[#212224] font-[500] text-[14px] animate-bounce">
        1 <img src={Star} alt="" />
      </span>
      <span className="flex justify-center border rounded w-[54px] text-[#212224] font-[500] text-[14px] animate-bounce">
        2 <img src={Star} alt="" />
      </span>
      <span className="flex justify-center border rounded w-[54px] text-[#212224] font-[500] text-[14px] animate-bounce">
        3 <img src={Star} alt="" />
      </span>
      <span className="flex justify-center border rounded w-[54px] text-[#212224] font-[500] text-[14px] animate-bounce">
        4 <img src={Star} alt="" />
      </span>
      <span className="flex justify-center border rounded w-[54px] text-[#212224] font-[500] text-[14px] animate-bounce">
        5 <img src={Star} alt="" />
      </span>
    </div>
  );
};

export default ReviewContent;
