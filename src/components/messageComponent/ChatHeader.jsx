import React from "react";
import ViewProfileMenu from "./ViewProfileMenu";

const ChatHeader = ({ selectedUser, messages, setFileList, setSentMessages }) => {
  // handling File Click
  const handleFileClick = () => {
    if (selectedUser) {
      const userMessages = messages.find(
        (msg) => msg.name === selectedUser.name
      );

      const files = userMessages.chatMessages
        .flatMap((msg) => msg.files)
        .filter((file) => file);

      setFileList(files); // Set the files to display in the chat section
    }
  };

  // Your logic for deleting a chat
  const handleDeleteChat = () => {
    // setSelectedUser(null); // Clear selected user
    setFileList([]); // Clear file list
    setSentMessages([]); // Clear sent messages
  };

  return (
    <div className="py-[18px] px-[14px] border-b flex items-center justify-between bg-white">
      <div className="flex items-center space-x-2">
        <div className="px-4 py-2 bg-[#4CAF50] rounded-full text-white">
          {selectedUser.initials}
        </div>
        <div>
          <h3 className="font-semibold">{selectedUser.name}</h3>
          <p className="text-sm text-gray-500">Email not available</p>
        </div>

      </div>
        {/*ViewProfileMenu */}
        <ViewProfileMenu
          handleFileClick={handleFileClick}
          handleDeleteChat={handleDeleteChat}
          userName={selectedUser.name}
        />
    </div>
  );
};

export default ChatHeader;
