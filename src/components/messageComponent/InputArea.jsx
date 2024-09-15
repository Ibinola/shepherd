import React, { useState, useRef } from "react";
import fileSvg from "../../assets/svgs/file-icon.svg";
import imgSvg from "../../assets/svgs/img.svg";

const InputArea = ({ onSendMessage, onSendFile }) => {
  // Add onSendFile prop
  const [inputMessage, setInputMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      onSendMessage(inputMessage);
      setInputMessage("");
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      onSendFile(file); // Send selected file back to parent component
      setInputMessage("");
    }
  };

  return (
    <div className="p-4 border-t flex items-center space-x-4 bg-white">
      <div className="relative flex-1">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message"
          className="w-full border rounded-lg p-2 pr-14 active:border-[#207DF7] outline-none bg-transparent"
        />
        <div className="absolute inset-y-0 right-2 flex items-center space-x-2">
          <img
            src={imgSvg}
            alt="input-area"
            className="cursor-pointer"
            onClick={() => fileInputRef.current.click()} // Trigger file input
          />
          <img
            src={fileSvg}
            alt="file"
            className="cursor-pointer"
            onClick={() => fileInputRef.current.click()} // Trigger file input
          />
        </div>
      </div>
      <button
        onClick={handleSendMessage}
        className="py-[11px] px-[24px] bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Send
      </button>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileSelect}
      />
    </div>
  );
};

export default InputArea;
