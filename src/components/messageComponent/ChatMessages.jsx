import React from "react";

const ChatMessages = ({ sentMessages, fileList }) => {
  return (
    <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
      {sentMessages.map((message, idx) => (
        <div key={idx} className="flex items-end justify-end space-x-2">
        <div className="relative">
          <div className="bg-blue-500 text-white p-3 rounded-lg max-w-md">
            <p className="text-sm">{message.text}</p>
          </div>
          <span className="absolute left-0 top-12 text-xs text-[#969CA6] self-end">
            {message.time}
          </span>
        </div>
      </div>
      ))}

      {fileList.length > 0 && (
        <div className="p-3 rounded-lg max-w-md bg-gray-100">
          <h4 className="font-semibold mb-2">Files:</h4>
          {fileList.map((file, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <p className="text-sm">
                {file.fileName} ({file.fileSize})
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatMessages;