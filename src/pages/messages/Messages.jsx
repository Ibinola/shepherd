import React, { useState } from "react";
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

  // eslint-disable-next-line no-unused-vars
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
    .filter(
      (message) => (showUnread ? !message.isRead : true) // Filter unread if showUnread is true
    )
    .filter(
      (message) => message.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by search term
    );

  return (
    <div
      className="flex p-4"
      style={{
        position: "sticky",
        top: "0",
        display: "block",
        boxSizing: "border-box",
        height: "100vh",
      }}
    >
      <div
        className="left-div w-full md:w-1/3 md:border-r-2 border-[#EEEFF2] pl-2 fixed"
        style={{
          height: "fit-content",
          width: "600px",
          float: "left",
        }}
      >
        <h2 className="text-xl font-bold pb-2 mb-2">Messages</h2>
        <SearchIcon handleSearch={setSearchTerm} />
        <div className="w-full text-[#969CA6] rounded-lg overflow-hidden flex mt-5 ">
          <button
            onClick={handleShowAll}
            className="w-1/2 px-6 py-3 text-sm font-semibold transform hover:scale-100 focus:scale-95 hover:bg-[#F8F9FD] focus:bg-blue-200 active:bg-blue-300 transition-colors duration-300 ease-in-out"
          >
            All
          </button>
          <button
            onClick={handleShowUnread}
            className="w-1/2 px-6 py-3 text-sm font-semibold  transform hover:scale-100 focus:scale-95 hover:bg-[#F8F9FD] focus:bg-blue-200 active:bg-blue-300 transition-colors duration-300 ease-in-out"
          >
            Unread
          </button>
        </div>
        <MessageList
          messages={filteredMessages}
          onUserClick={handleUserClick}
        />
      </div>

      <div
        className="right-div w-3/4 md:flex flex-col hidden"
        style={{
          float: "right",
          width: "calc(100% - 600px)",
          height: "100vh",
        }}
      >
        {selectedUser ? (
          <>
            <ChatHeader
              selectedUser={selectedUser}
              messages={messages}
              setFileList={setFileList}
              setSentMessages={setSentMessages}
            />
            <ChatMessages sentMessages={sentMessages} fileList={fileList} />

            <InputArea
              onSendMessage={handleSendMessage}
              onSendFile={handleSendFile}
            />
          </>
        ) : (
          <div className="flex-1 p-4 text-center transition-opacity duration-500 transform opacity-0 scale-95 animate-fadeInScale">
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
