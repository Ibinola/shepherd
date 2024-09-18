import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";

const ClientTabs = ({ data, setFilteredData }) => {
  const [activeTab, setActiveTab] = useState("All clients");
  const [fadeKey, setFadeKey] = useState(0); // Key to force re-render for fade effect
  const [isFading, setIsFading] = useState(false);
  const tabs = ["All clients", "Active", "Pending", "Ended"];

  useEffect(() => {
    setIsFading(true);
    const timeout = setTimeout(() => {
      const filteredData = data.filter((item) => {
        if (activeTab === "All clients") return true;
        return item.status.toLowerCase() === activeTab.toLowerCase();
      });
      setFilteredData(filteredData);
      setFadeKey((prevKey) => prevKey + 1); // Increment key to force re-render
      setIsFading(false);
    }, 300); // Delay for transition (300ms)

    return () => clearTimeout(timeout); // Clear timeout on component unmount
  }, [activeTab, data, setFilteredData]);

  return (
    <div className="container mx-auto mt-4">
      {/* Tab buttons */}
      <div className="flex border-b border-gray-200 mt-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:text-blue-500 focus:outline-none ${
              activeTab === tab
                ? "text-blue-500 border-b-2 border-blue-500"
                : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content with fade transition */}
      <div
        key={fadeKey} // Use fadeKey to force re-render
        className={`transition-opacity duration-300 ease-in-out ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <DataTable
          data={data.filter((item) => {
            if (activeTab === "All clients") return true;
            return item.status.toLowerCase() === activeTab.toLowerCase();
          })}
        />
      </div>
    </div>
  );
};

export default ClientTabs;
