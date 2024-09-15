import React from "react";
import stacked_image_1 from "../assets/svgs/stacked_image_1.svg";
import stacked_image_2 from "../assets/svgs/stacked_img_2.svg";
import stacked_image_3 from "../assets/svgs/stacked_img_3.svg";

function Events() {
  return (
    <div>
      {" "}
      <div className="border-l-4 border-orange-500 p-6 bg-[#FFF5F0] mb-4">
        <p className="text-sm text-[#212224] font-normal">
          Upcoming chemistry session with Liam Kelly
        </p>
        <p className="text-xs text-[#6E7682]">03:30pm - 04:30pm (1hr)</p>
        <div className="flex items-center mt-2">
          <div className="relative">
            <img
              src={stacked_image_1}
              alt="Profile 1"
              className="h-8 w-8 rounded-full border-2 border-white z-30"
            />
          </div>
          <div className="relative -ml-2">
            <img
              src={stacked_image_2}
              alt="Profile 2"
              className="h-8 w-8 rounded-full border-2 border-white z-20"
            />
          </div>
          <div className="relative -ml-2">
            <img
              src={stacked_image_3}
              alt="Extra Icon"
              className="h-8 w-8 rounded-full border-2 border-white bg-blue-500 p-1 z-10"
            />
          </div>
        </div>
      </div>
      <div className="border-l-4 border-green-500 p-6 bg-[#F4FAF5]">
        <p className="text-sm text-[#212224] font-normal">
          Chemistry Lesson with Leslie Peters
        </p>
        <p className="text-xs text-[#6E7682]">05:00pm - 06:00pm (1hr)</p>
        <div className="flex items-center mt-2">
          <div className="relative">
            <img
              src={stacked_image_1}
              alt="Profile 1"
              className="h-8 w-8 rounded-full border-2 border-white z-30"
            />
          </div>
          <div className="relative -ml-2">
            <img
              src={stacked_image_2}
              alt="Profile 2"
              className="h-8 w-8 rounded-full border-2 border-white z-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
