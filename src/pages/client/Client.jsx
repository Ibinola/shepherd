import React, { useState, useEffect } from "react";
import ClientTabs from "../../components/ClientTabs";
import { client_data } from "../../utils/client_data";
import Sort from "../../assets/svgs/Sort.svg";
import MyDesign from "../../components/MyDesign";

function Client() {
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showMyDesign, setShowMyDesign] = useState(true);
  const [sortedData, setSortedData] = useState(client_data);
  const [filteredData, setFilteredData] = useState(client_data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Simulate loading screen for 1.2 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMyDesign(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Handle sorting logic
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sorted = [...sortedData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setSortedData(sorted);
  };

  return (
    <div className="container mx-auto p-5">
      {showMyDesign ? (
        <div className="transition-opacity duration-500 ease-in-out opacity-100">
          <MyDesign />
        </div>
      ) : (
        <div className="transition-opacity duration-500 ease-in-out opacity-100">
          <div className="flex justify-between items-center mb-4 relative">
            {/* Page Heading */}
            <h1 className="text-2xl font-semibold text-[#212224] ">
              Clients{" "}
              <span className="text-[#6E7682] bg-[#F4F5F6] text-lg font-[500] p-2 rounded animate-pulse">
                {filteredData.length} {/* Display filtered data count */}
              </span>
            </h1>

            {/* Sort Dropdown Button */}
            <div
              onClick={() => setShowSortOptions(!showSortOptions)}
              className="px-4 py-2 flex gap-2 border border-[#E8EAED] text-[#585F68] font-[400] cursor-pointer rounded-md hover:bg-gray-100 transition-all duration-200 ease-in-out"
            >
              <img src={Sort} alt="Sort" />
              Sort by
            </div>

            {/* Sort Options */}
            {showSortOptions && (
              <div className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-lg border border-[#E8EAED] z-10 w-[180px] transition-all duration-300 ease-in-out transform opacity-100 scale-100">
                <h1 className="p-1 mt-1 font-[400] text-[#969CA6] text-[12px]">
                  By date
                </h1>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer text-[14px] text-[#212224] font-[500] transition-all duration-150"
                  onClick={() => handleSort("startDate")}
                >
                  Start date
                </div>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer text-[14px] text-[#212224] font-[500] transition-all duration-150"
                  onClick={() => handleSort("endDate")}
                >
                  End date
                </div>
                <h1 className="p-1 font-[400] text-[#969CA6] text-[12px]">
                  By name
                </h1>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer text-[14px] text-[#212224] font-[500] transition-all duration-150"
                  onClick={() => handleSort("clientName")}
                >
                  A &#10140; Z
                </div>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer text-[14px] text-[#212224] font-[500] transition-all duration-150"
                  onClick={() => handleSort("clientName")}
                >
                  Z &#10140; A
                </div>
              </div>
            )}
          </div>
          {/* ClientTabs Component */}
          <ClientTabs
            data={sortedData}
            setFilteredData={setFilteredData}
          />{" "}
          {/* Pass setFilteredData to ClientTabs */}
        </div>
      )}
    </div>
  );
}

export default Client;
