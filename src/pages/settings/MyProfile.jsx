import React, { useState} from "react";
import { FaPen } from "react-icons/fa";
import AboutMe from './AboutMe'


// Profile Card Component
const ProfileCard = () => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingRate, setIsEditingRate] = useState(false);
  const [name, setName] = useState("Leslie Peters");
  const [rate, setRate] = useState(20);
  const [email] = useState("lesliepeters@gmail.com");

  return (
    <>
    <h2 className="text-2xl font-semibold">My Profile</h2>
    <div className="border rounded-lg p-4 mb-4 shadow-md bg-white transition-opacity duration-500 ease-in-out" >
      <div className="flex items-center">
        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl">
          {name.charAt(0)}
        </div>
        <div className="ml-4 flex-grow">
          {isEditingName ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setIsEditingName(false)}
              className="border rounded px-2 py-1 w-full"
            />
          ) : (
            <h3 className="flex justify-between text-lg font-semibold">
              {name}
              <span
                className="ml-2 text-blue-500 cursor-pointer"
                onClick={() => setIsEditingName(true)}
              >
                <FaPen />
              </span>
            </h3>
          )}
          <p className="text-sm text-gray-600">{email}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center">
          {isEditingRate ? (
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              onBlur={() => setIsEditingRate(false)}
              className="border rounded px-2 py-1 w-24"
            />
          ) : (
            <p className="flex justify-between text-md">
              <strong>Hourly Rate: </strong> ${rate}/hr
              <span
                className="ml-2 text-gray-500 cursor-pointer"
                onClick={() => setIsEditingRate(true)}
              >
                <FaPen />
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

// Video Card Component
const VideoCard = () => {
  const [isEditingVideo, setIsEditingVideo] = useState(false);
  const [videoCover, setVideoCover] = useState("https://via.placeholder.com/150");
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes("video")) {
      const videoDuration = document.createElement("video");
      videoDuration.src = URL.createObjectURL(file);
      videoDuration.onloadedmetadata = () => {
        if (videoDuration.duration <= 120) {
          setVideoFile(file);
          setVideoCover(URL.createObjectURL(file));
        } else {
          alert("Video should not be longer than 2 minutes.");
        }
      };
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <div className="flex flex-col items-center">
        <img
          src={videoCover}
          alt="Video Cover"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        {isEditingVideo ? (
          <div className="flex flex-col items-center">
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="mb-2"
            />
            <a
              href="#"
              onClick={() => setIsEditingVideo(false)}
              className="text-blue-500 underline"
            >
              Save Video
            </a>
          </div>
        ) : (
          <a
            href="#"
            onClick={() => setIsEditingVideo(true)}
            className="text-blue-500 underline mt-2"
          >
            Update Intro Video
          </a>
        )}
      </div>
    </div>
  );
};

 {/* About Me Section */}


// Qualifications Component
const Qualifications = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [qualifications, setQualifications] = useState([
    {
      institution: "Indian Institute of Management (IIM), Bangalore",
      degree: "Master of Business Administration (MBA), Information System",
      years: "2008 - 2010",
    },
    {
      institution: "Indian Institute of Management (IIM), Bangalore",
      degree: "Master of Business Administration (MBA), Information System",
      years: "2008 - 2010",
    },
  ]);

  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md bg-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Qualifications</h3>
        <span
          className="text-gray-500 cursor-pointer"
          onClick={() => setIsEditing(!isEditing)}
        >
          <FaPen />
        </span>
      </div>
      {qualifications.map((qualification, index) => (
        <div key={index} className="flex items-start mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
            🎓
          </div>
          {isEditing ? (
            <div className="flex-grow">
              <input
                type="text"
                defaultValue={qualification.institution}
                className="border rounded w-full px-2 py-1 mb-2"
              />
              <input
                type="text"
                defaultValue={qualification.degree}
                className="border rounded w-full px-2 py-1 mb-2"
              />
              <input
                type="text"
                defaultValue={qualification.years}
                className="border rounded w-full px-2 py-1 mb-2"
              />
            </div>
          ) : (
            <div>
              <p className="font-semibold">{qualification.institution}</p>
              <p className="text-sm text-gray-600">{qualification.degree}</p>
              <p className="text-sm text-gray-600">{qualification.years}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Availability Component
const Availability = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [availability, setAvailability] = useState({
    "8 AM - 12 PM": ["", "✔", "✔", "", "", "✔", "✔"],
    "12 PM - 5 PM": ["", "✔", "✔", "", "", "✔", ""],
    "5 PM - 9 PM": ["", "✔", "", "", "", "", ""],
  });

  const timeSlots = Object.keys(availability);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Availability</h3>
        <span
          className="text-gray-500 cursor-pointer"
          onClick={() => setIsEditing(!isEditing)}
        >
          <FaPen />
        </span>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b py-2">Time</th>
            {days.map((day) => (
              <th key={day} className="border-b py-2 text-center">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot, index) => (
            <tr key={index}>
              <td className="border-b py-2">{slot}</td>
              {availability[slot].map((available, i) => (
                <td key={i} className="border-b text-center">
                  {isEditing ? (
                    <input
                      type="checkbox"
                      defaultChecked={available === "✔"}
                      className="w-4 h-4"
                      onChange={(e) => {
                        const newAvailability = { ...availability };
                        newAvailability[slot][i] = e.target.checked ? "✔" : "";
                        setAvailability(newAvailability);
                      }}
                    />
                  ) : (
                    available || <span className="text-gray-400">-</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Merged Profile Settings Page Component
const ProfileSettingsPage = () => {
  return (
    <div className="p-4 space-y-6">
      <ProfileCard />
      <VideoCard />
      <AboutMe />
      <Qualifications />
      <Availability />
    </div>
  );
};

export default ProfileSettingsPage
