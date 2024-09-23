import { useState } from "react";
import Card from "./Card";
import { FaPen } from "react-icons/fa";


const AboutMeCard = () => {
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [aboutMe, setAboutMe] = useState("Quam eros suspendisse a pulvinar sagittis mauris. Vel dui adipiscing id faucibus consectetur amet.");
  const [tempAboutMe, setTempAboutMe] = useState(aboutMe);
  const notifyChange = (prevValue, newValue, fieldName) => {
    // Implement your own notification logic here
    console.log(`About Me changed from "${prevValue}" to "${newValue}"`);
  };

  const handleAboutBlur = () => {
    notifyChange(aboutMe, tempAboutMe, "About Me");
    setAboutMe(tempAboutMe);
    setIsEditingAbout(false);
  };

  return (
    <Card>
      <h2 className="text-md font-semibold mb-4">About Me</h2>
      {isEditingAbout ? (
        <textarea
          value={tempAboutMe}
          onChange={(e) => setTempAboutMe(e.target.value)}
          onBlur={handleAboutBlur}
          className="border rounded px-2 py-1 w-full h-24"
        />
      ) : (
        <div className="flex justify-between items-center">
          <p className="text-gray-700">{aboutMe}</p>
          <span
            className="ml-2 text-gray-500 cursor-pointer"
            onClick={() => setIsEditingAbout(true)}
          >
            <FaPen />
          </span>
        </div>
      )}
    </Card>
  );
};

export default AboutMeCard;
