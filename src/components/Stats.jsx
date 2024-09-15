import React from "react";

const Stats = ({ stats }) => (
  <div className="grid gap-4 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {stats.map((stat, index) => (
      <div
        key={index}
        style={{ backgroundColor: stat.bgColor, color: stat.textColor }}
        className="p-4 rounded-lg relative overflow-hidden"
      >
        <div
          className="absolute bottom-0 right-0 opacity-200"
          style={{ height: "80px" }}
        >
          <img
            src={stat.icon}
            alt="icon"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm mb-1 mt-2">{stat.label}</p>
        <p style={{ color: stat.valueColor }} className="text-4xl font-bold">
          {stat.value}
        </p>
        <p style={{ color: stat.descColor }} className="text-xs mt-1">
          {stat.description}
        </p>
      </div>
    ))}
  </div>
);

export default Stats;
