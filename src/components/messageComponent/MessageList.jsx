import React, { useState } from "react";

const MessageList = ({ messages, onUserClick }) => {
  const [readMessages, setReadMessages] = useState([]);

  const handleUserClick = (message) => {
    onUserClick({ name: message.name, initials: message.name[0] });
    setReadMessages([...readMessages, message.name]); // Mark as read
  };

  return (
    <div className="space-y-2 mt-4 h-[80vh] max-h-[80vh] bg-white overflow-y-auto scrollbar-custom">
      {messages.map((message, idx) => {
        const initials = message.name[0];
        const isRead = readMessages.includes(message.name) || message.isRead;

        return (
          <div
            key={idx}
            className="message-item flex space-x-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer border-b-2 border-[#EBECF0] justify-between transform transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
            onClick={() => handleUserClick(message)}
          >
            <div className="flex flex-row gap-1">
              <div className="initials w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
                {initials}
              </div>
              <div>
                <h3 className="font-semibold">{message.name}</h3>
                <p className="text-gray-500 text-sm">
                  Parturient amet sociis tempor...
                </p>
              </div>
            </div>

            <div className="flex items-center">
              {!isRead && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse mr-2">
                  1
                </span>
              )}
              <span
                className={`text-xs ${
                  isRead ? "text-gray-400" : "text-[#207DF7]"
                }`}
              >
                2:23
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
