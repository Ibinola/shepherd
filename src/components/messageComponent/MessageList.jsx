import React from "react";
import { motion } from "framer-motion";

const MessageList = ({ messages, onUserClick }) => {
  return (
    <div className="space-y-2 mt-4 h-[80vh] max-h-[80vh] bg-white overflow-y-auto scrollbar-custom">
      {messages.map((message, idx) => {
        const initials = message.initials; // Use generated initials
        return (
          <motion.div
            key={idx}
            className="message-item flex space-x-2 p-2 rounded-lg cursor-pointer border-b-2 border-[#EBECF0] justify-between"
            onClick={() => onUserClick({ name: message.name, initials })}
            whileHover={{ scale: 1.02, backgroundColor: "#f0f0f0" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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

            {/* Right Section with Badge and Time */}
            <div className="flex items-center space-x-2">
              {/* Unread Notification Badge */}
              {!message.isRead && (
                <div className="bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  1
                </div>
              )}
              <span
                className={`text-xs ${
                  message.isRead ? "text-gray-400" : "text-[#207DF7]"
                }`}
              >
                2:23
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MessageList;
