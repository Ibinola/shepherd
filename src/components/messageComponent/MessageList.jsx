import React from "react";

const MessageList = ({ messages, onUserClick }) => {
  return (
    <div className="space-y-2 mt-4 h-[80vh] max-h-[80vh] bg-white overflow-y-auto scrollbar-custom">
      {messages.map((message, idx) => {
        const initials = message.name[0];
        return (
          <div
            key={idx}
            className="flex space-x-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer border-b-2 border-[#EBECF0] justify-between"
            onClick={() => onUserClick({ name: message.name, initials })}
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
            <span
              className={`text-xs ${
                message.isRead ? "text-gray-400" : "text-[#207DF7]"
              }`}
            >
              2:23
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
