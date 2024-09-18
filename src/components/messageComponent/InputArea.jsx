import React, { useState, useRef } from "react";
import fileSvg from "../../assets/svgs/file-icon.svg";
import imgSvg from "../../assets/svgs/img.svg";

const InputArea = ({ onSendMessage, onSendFile }) => {
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
      onSendFile(file);
      setInputMessage("");
    }
  };

  return (
    <div className="p-4 border-t flex items-center space-x-4 bg-white transition-all duration-300 ease-in-out sticky bottom-0">
      <div className="relative flex-1">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message"
          className="w-full border rounded-lg p-2 pr-14 focus:border-[#207DF7] focus:shadow-lg transition-all duration-300 outline-none bg-transparent"
        />
        <div className="absolute inset-y-0 right-2 flex items-center space-x-2">
          <img
            src={imgSvg}
            alt="image-upload"
            className="cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in-out"
            onClick={() => fileInputRef.current.click()}
          />
          <img
            src={fileSvg}
            alt="file-upload"
            className="cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in-out"
            onClick={() => fileInputRef.current.click()}
          />
        </div>
      </div>
      <button
        onClick={handleSendMessage}
        className="py-[11px] px-[24px] bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:shadow-lg active:scale-95 transform transition-all duration-300"
      >
        Send
      </button>

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
