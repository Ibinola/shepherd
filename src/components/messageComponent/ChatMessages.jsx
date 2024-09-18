import React from "react";

const ChatMessages = ({ sentMessages, fileList }) => {
  // Dummy sent messages
  const dummySentMessages = [
    { text: "Hey, how's it going?", time: "10:30 AM", type: "sent" },
    {
      text: "I wanted to ask about the project deadline.",
      time: "10:32 AM",
      type: "sent",
    },
    { text: "Can you send me the files?", time: "10:35 AM", type: "sent" },
    {
      text: "Also, have you checked the latest report?",
      time: "10:40 AM",
      type: "sent",
    },
    {
      text: "Let me know if there's anything else needed.",
      time: "10:45 AM",
      type: "sent",
    },
    {
      text: "I will send you the updated version shortly.",
      time: "10:50 AM",
      type: "sent",
    },
    {
      text: "Do you need any help with the tasks?",
      time: "10:55 AM",
      type: "sent",
    },
    {
      text: "Don't forget about the meeting at 2 PM.",
      time: "11:00 AM",
      type: "sent",
    },
    {
      text: "The design draft is almost complete.",
      time: "11:05 AM",
      type: "sent",
    },
    {
      text: "Looking forward to your feedback.",
      time: "11:10 AM",
      type: "sent",
    },
  ];

  // Dummy received messages
  const dummyReceivedMessages = [
    { text: "I'm doing well, thanks!", time: "10:31 AM", type: "received" },
    {
      text: "The deadline is tomorrow at noon.",
      time: "10:33 AM",
      type: "received",
    },
    {
      text: "Sure, I will send them right away.",
      time: "10:37 AM",
      type: "received",
    },
    { text: "Do you need anything else?", time: "10:38 AM", type: "received" },
    {
      text: "Let me know if you need help.",
      time: "10:40 AM",
      type: "received",
    },
    {
      text: "I’m almost done with my part.",
      time: "10:42 AM",
      type: "received",
    },
    {
      text: "Can we schedule a quick call?",
      time: "10:43 AM",
      type: "received",
    },
    {
      text: "I’ll follow up with you later.",
      time: "10:45 AM",
      type: "received",
    },
    {
      text: "Here are the files you asked for.",
      time: "10:46 AM",
      type: "received",
    },
    { text: "Thanks, talk to you soon!", time: "10:47 AM", type: "received" },
  ];

  // Combine sentMessages, dummySentMessages, and dummyReceivedMessages
  const allDummyMessages = [...dummySentMessages, ...dummyReceivedMessages];

  // Shuffle all messages based on timestamps to mix sent and received
  const allMessages = [...allDummyMessages, ...sentMessages].sort((a, b) => {
    const timeA = new Date(`1970-01-01T${a.time.split(" ")[0]}:00`).getTime();
    const timeB = new Date(`1970-01-01T${b.time.split(" ")[0]}:00`).getTime();
    return timeA - timeB;
  });

  return (
    <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50 min-h-[82%] md:max-h-full scrollbar-custom">
      {allMessages.map((message, idx) => (
        <div
          key={idx}
          className={`flex items-end ${
            message.type === "received" ? "justify-start" : "justify-end"
          } space-x-2`}
        >
          <div className="relative">
            <div
              className={`p-3 rounded-lg max-w-md mb-2 ${
                message.type === "received"
                  ? "bg-gray-100 text-black"
                  : "bg-blue-500 text-white"
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
            <span className="absolute left-0 top-12 text-xs text-[#969CA6] self-end mt-1">
              {message.time}
            </span>
          </div>
        </div>
      ))}

      {fileList.length > 0 && (
        <div className="p-3 rounded-lg max-w-md bg-blue-500 text-white flex float-end">
          <h4 className="font-semibold mb-2">Files:</h4>
          {fileList.map(() => (
            <div className="relative">
              <div className="p-3">
                <p className="text-sm">
                  {/* {file.fileName} ({file.fileSize}) */} $CATI
                </p>
              </div>
              <span className="absolute left-0 bottom-0 text-xs text-[#969CA6] mt-1">
                2:00
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
