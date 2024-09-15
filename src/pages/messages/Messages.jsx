import React, { useState, useEffect, useRef } from "react";
import MessageList from "../../components/messageComponent/MessageList";
import ChatHeader from "../../components/messageComponent/ChatHeader";
import ChatMessages from "../../components/messageComponent/ChatMessages";
import InputArea from "../../components/messageComponent/InputArea";
import SearchIcon from "../../components/messageComponent/SearchIcon";

const Messages = () => {
  const users = [
    "Leslie Peters Mapu",
    "John Doe",
    "Jane Smith",
    "Bernad Bahago",
    "Peter Moses",
    "Fatima Aminu",
    "Big Cedar",
  ];

  const [messages, setMessages] = useState(
    users.map((user) => ({
      name: user,
      isRead: Math.random() > 0.5,
      chatMessages: [
        {
          content: "Nulla ut ut ipsum praesent nulla sem eget...",
          isSent: true,
          timestamp: "12:52 PM",
          files: [],
        },
        {
          content: "Here's the document you requested",
          isSent: false,
          timestamp: "12:55 PM",
          files: [{ fileName: "Document.pdf", fileSize: "1.2 MB" }], // Example file
        },
      ],
    }))
  );

  const [showUnread, setShowUnread] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [sentMessages, setSentMessages] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  const handleShowUnread = () => setShowUnread(true);
  const handleShowAll = () => setShowUnread(false);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setFileList([]);
  };

  const handleSendMessage = (inputMessage) => {
    if (inputMessage.trim()) {
      setSentMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, time: new Date().toLocaleTimeString() },
      ]);
    }
  };

  const handleSendFile = (file) => {
    setFileList([...fileList, file]); // Append the selected file to the fileList array
  };

  const filteredMessages = messages
  .filter((message) => 
    showUnread ? !message.isRead : true // Filter unread if showUnread is true
  )
  .filter((message) => 
    message.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by search term
  );

  return (
    <div className="flex">
      <div className="w-full md:w-1/3 md:border-r-2 border-[#EEEFF2] pl-2">
        <h2 className="text-xl font-bold pb-2">Messages</h2>
        <SearchIcon handleSearch={setSearchTerm} />
        <div className="w-full text-[#969CA6] rounded-lg overflow-hidden flex mt-4">
          <button
            onClick={handleShowAll}
            className="w-1/2 px-6 py-3 text-sm font-semibold hover:bg-[#F8F9FD]"
          >
            All
          </button>
          <button
            onClick={handleShowUnread}
            className="w-1/2 px-6 py-3 text-sm font-semibold hover:bg-[#F8F9FD]"
          >
            Unread
          </button>
        </div>
        <MessageList
          messages={filteredMessages}
          onUserClick={handleUserClick}
        />
      </div>

      <div className="w-3/4 md:flex flex-col hidden">
        {selectedUser ? (
          <>
            <ChatHeader selectedUser={selectedUser} messages={messages} setFileList={setFileList} setSentMessages={setSentMessages} />
            <ChatMessages
              sentMessages={sentMessages}
              fileList={fileList}
            />
            <InputArea onSendMessage={handleSendMessage} onSendFile={handleSendFile} />
          </>
        ) : (
          <div className="flex-1 p-4 text-center">
            <p className="text-gray-500 text-[12px]">
              Select a message to start chatting
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;