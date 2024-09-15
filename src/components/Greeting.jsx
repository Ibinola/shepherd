import React from "react";

export const Greeting = ({ userName, time, weather }) => (
  <div className="space-y-1">
    <p className="text-base lg:text-2xl font-semibold">
      Hi {userName}, {time}
    </p>
    <div className="flex items-center">
      <img src={weather.icon} alt="" className="mr-2" />
      <p className="text-xs md:text-sm text-gray-500">
        &#x2022; {weather.day}, {weather.date} &#x2022; {weather.time}
      </p>
    </div>
  </div>
);
