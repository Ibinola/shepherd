import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import Star from "../assets/svgs/Star.svg";
import ThreeDotMenu from "../assets/svgs/ThreeDotMenu.svg";
import Menu from "../components/Menu";

const DataTable = ({ data = [], handleSort, searchQuery = "" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);
  const [menuIndex, setMenuIndex] = useState(null); // Track which menu is open
  const itemsPerPage = 9;

  useEffect(() => {
    const filteredData = data.filter((item) => {
      if (searchQuery) {
        return (
          item.clientName &&
          item.clientName.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      return true;
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(filteredData.slice(startIndex, endIndex));
  }, [currentPage, data, searchQuery]);

  const totalPages = Math.ceil(
    data.filter((item) => {
      if (searchQuery) {
        return (
          item.clientName &&
          item.clientName.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      return true;
    }).length / itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleMenuToggle = (index) => {
    setMenuIndex(menuIndex === index ? null : index);
  };

  // Reset current page to  when search query changes
  useEffect(() => {
    if (searchQuery) {
      setCurrentPage(1);
    }
  }, [searchQuery]);

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white border border-[] border-l-0 border-r-0 text-[#6E7682] font-[400] ">
        <thead>
          <tr className="whitespace-nowrap text-left bg-[#F7F8FA]  mt-4">
            <th className="py-2 px-4 border-b">Select</th>
            <th
              className="py-2 px-4 border-b cursor-pointer"
              onClick={() => handleSort("clientName")}
            >
              Client Name
            </th>
            <th className="py-2 px-4 border-b">Subject</th>
            <th
              className="py-2 px-4 border-b cursor-pointer"
              onClick={() => handleSort("startDate")}
            >
              Start Date
            </th>
            <th
              className="py-2 px-4 border-b cursor-pointer"
              onClick={() => handleSort("endDate")}
            >
              End Date
            </th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Amount Earned</th>
            <th className="py-2 px-4 border-b">Classes</th>
            <th className="py-2 px-4 border-b">Rating</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 text-left relative">
              <td className="py-3 px-3 border-b whitespace-nowrap ">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-4 border-b whitespace-nowrap font-bold text-[#212224]">
                {item.clientName}
              </td>
              <td className="py-2 px-4 border-b whitespace-nowrap text-[#585F68] font-[400]">
                {item.subject}
              </td>
              <td className="py-2 px-4 border-b whitespace-nowrap text-[#585F68] font-[400]">
                {item.startDate}
              </td>
              <td className="py-2 px-4 border-b whitespace-nowrap text-[#585F68] font-[400]">
                {item.endDate}
              </td>
              <td
                className={`py-2 px-4 border-b border-l-0 border-r-0 font-[400] ${
                  item.status === "Active"
                    ? "text-[#207DF7]"
                    : item.status === "Pending"
                    ? "text-[#FB8441]"
                    : "text-[#585F68]"
                }`}
              >
                {item.status}
              </td>
              <td className="py-2 px-4 border-b text-[#585F68] font-[400]">
                ${item.amountEarned.toFixed(2)}
              </td>
              <td className="py-2 px-4 border-b text-[#585F68] font-[400]  whitespace-nowrap">
                <span className="flex bg-[#F4F5F6] h-10 justify-center items-center rounded-xl ml-[-30px]">
                  Lesson {item.classes}
                </span>
              </td>
              <td className="py-2 px-4 border-b text-[#585F68] font-[400]">
                <div className="flex items-center relative">
                  {item.rating} <img src={Star} alt="" />
                  <span>
                    <img
                      src={ThreeDotMenu}
                      alt="Menu"
                      className="ml-4 cursor-pointer   hover:bg-gray-100"
                      onClick={() => handleMenuToggle(index)}
                    />
                    {menuIndex === index && <Menu />}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DataTable;
