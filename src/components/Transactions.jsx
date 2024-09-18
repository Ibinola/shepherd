import React from "react";
import recent_transactions from "../assets/svgs/recent-transactions.svg";
import transaction_receipt from "../assets/svgs/transaction_reciept.svg";

const Transactions = ({ transactions }) => (
  <div className="min-w-[60%] border rounded-lg border-[#EEEFF2] p-4 hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">
    <div className="flex justify-between items-center mb-4">
      <p className="font-semibold flex items-center gap-2 text-[#212224] text-base">
        <span>
          <img src={recent_transactions} alt="Recent transactions logo" />
        </span>
        Recent Transactions
      </p>
      <select className="bg-white border text-sm text-[#212224] rounded px-2 py-1 cursor-pointer">
        <option>Today</option>
        <option>This week</option>
        <option>This month</option>
      </select>
    </div>

    <hr />

    <div className="space-y-4 space-x-3 ml-5">
      <ol className="relative border-s border-[#EBECF0]">
        {transactions.map((transaction, index) => (
          <li
            key={index}
            className="mb-10 ms-6 transition-all duration-300 ease-in-out hover:scale-105  rounded-lg p-3 cursor-pointer"
          >
            <span className="absolute flex items-center justify-center w-11 h-11 rounded-full -start-6 bg-white z-10">
              <img
                src={transaction.image}
                alt="Transaction timeline"
                className="transition-transform duration-300 hover:scale-110"
              />
            </span>
            <div className="mt-3 space-y-1 ml-1">
              <p className="text-gray-400 text-xs font-normal">
                {transaction.date}
              </p>
              <p className="text-xs font-medium text-[#212224]">
                {transaction.description}
              </p>
              <button className="py-2 flex items-center gap-1 px-4 border text-[#73777D] border-dashed rounded-full text-[11px] mt-2 font-medium transition-colors duration-300 hover:bg-gray-100">
                <span>
                  <img src={transaction_receipt} alt="transaction receipt" />
                </span>{" "}
                Transaction receipt
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

export default Transactions;
