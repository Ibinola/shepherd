import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";

const ClientTabs = ({ data, setFilteredData }) => {
  const [activeTab, setActiveTab] = useState("All clients");
  const tabs = ["All clients", "Active", "Pending", "Ended"];

  useEffect(() => {
    const filteredData = data.filter((item) => {
      if (activeTab === "All clients") return true;
      return item.status.toLowerCase() === activeTab.toLowerCase();
    });
    setFilteredData(filteredData);
  }, [activeTab, data, setFilteredData]);

  return (
    <div className="container mx-auto mt-4">
      <div className="flex border-b border-gray-200 mt-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-gray-700 hover:text-blue-500 focus:outline-none ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <DataTable
        data={data.filter((item) => {
          if (activeTab === "All clients") return true;
          return item.status.toLowerCase() === activeTab.toLowerCase();
        })}
      />
    </div>
  );
};

export default ClientTabs;
