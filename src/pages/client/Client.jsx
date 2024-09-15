import React, { useState, useEffect } from "react";
import ClientTabs from "../../components/ClientTabs";
import { data } from "../../components/clientdata/data.js";
import Sort from "../../assets/svgs/Sort.svg";
import MyDesign from "../../components/MyDesign";

function Client() {
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showMyDesign, setShowMyDesign] = useState(true);
  const [sortedData, setSortedData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMyDesign(false);
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);

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
    <div className="container mx-auto mt-8">
      {showMyDesign ? (
        <MyDesign />
      ) : (
        <>
          <div className="flex justify-between items-center mb-4 relative">
            <h1 className="text-2xl font text-[#212224] animate-bounce">
              Clients{" "}
              <span className="text-[#6E7682] bg-[#F4F5F6] text-lg font-[500] p-2 rounded ">
                {filteredData.length}{" "}
                {/* Display the length of filtered data */}
              </span>
            </h1>
            <div
              onClick={() => setShowSortOptions(!showSortOptions)}
              className="px-4 py-2 flex gap-2 border border-[#E8EAED] text-[#585F68] font-[400] cursor-pointer rounded-md hover:bg-gray-100"
            >
              <img src={Sort} alt="Sort" />
              Sort by
            </div>
            {showSortOptions && (
              <div className="absolute top-full mt2 right-0 bg-white shadow-lg rounded-lg border border-[#E8EAED] z-10 w-[180px] animation transition-all duration-100 ease-in-out ">
                <h1 className="p-1 mt-1 font-[400] text-[#969CA6] text-[12px]">
                  By date
                </h1>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer text-[14px] text-[#212224] font-[500]"
                  onClick={() => handleSort("startDate")}
                >
                  Start date
                </div>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer text-[14px] text-[#212224] font-[500]"
                  onClick={() => handleSort("endDate")}
                >
                  End date
                </div>
                <h1 className="p-1 font-[400] text-[#96CA6] text-[12px]">
                  By name
                </h1>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer text-[14px] text-[#212224 font-[500]"
                  onClick={() => handleSort("clientName")}
                >
                  A &#10140; Z
                </div>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer text-[14px] text-[#212224] font-[500]"
                  onClick={() => handleSort("clientName")}
                >
                  Z &#10140; A
                </div>
              </div>
            )}
          </div>
          <ClientTabs data={sortedData} setFilteredData={setFilteredData} />{" "}
          {/* Pass setFilteredData to ClientTabs */}
        </>
      )}
    </div>
  );
}

export default Client;
