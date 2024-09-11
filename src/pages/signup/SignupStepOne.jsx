import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Frame from "../../assets/Images/Frame 10251.png";
import logo from "../../assets/svgs/shepherd.svg";
import RadioButton from "../../components/RadioButton";
import tutorIcon from "../../assets/svgs/tutor.svg"; // Replace with the actual path to your tutor icon
import studentIcon from "../../assets/svgs/student.svg"; // Replace with the actual path to your student icon
import Button from "../../components/Button";

function SignupStepOne() {
  const [selectedRole, setSelectedRole] = useState(""); // State to track selected option

  const handleSelection = (e) => {
    setSelectedRole(e.target.value); // Update the state with selected value
  };

  let navigate = useNavigate();

  const handleNext = () => {
    // Navigate to the next page based on the selected role
    if (selectedRole === "tutor") {
      navigate("/tutor"); // Navigate to the tutor signup page
    } else if (selectedRole === "student") {
      navigate("/tutor"); // Navigate to the student signup page
    } else {
      alert("Please select an option before proceeding.");
    }
  };
  return (
    <>
      <div className="flex justify-center font-inter">
        {/*Parent div */}
        {/* image div */}
        <div className="hidden w-[548px] rounded-lg md:block bg-[#f8f8f8]  py-16 ">
          <div className="font-[600] text-[42px]">
            <h1 className="px-8 py-8">
              Hi there, <span className="text-[#207DF7]">Welcome!</span>
            </h1>
            <img src={Frame} alt="sign-up" className="" />
          </div>
        </div>
        {/* form div */}
        <div className=" w-[648px] font-inter flex flex-col items-center py-20 ">
          <div className="mb-12">
            <img src={logo} alt="logo" />
          </div>

          <div className="details text-center">
            <h2 className="font-[600] text-[1.5rem] leading-[1.875rem] mb-2">
              Create your Shepherd Account
            </h2>
            <p className="font-[400] px-8 text-center text-[.875rem] text-[#6E7682] ">
              Hi there, before you proceed, How do you plan to use Shepherd
            </p>
          </div>

          {/* Radio buttons */}
          <div className="flex flex-col md:flex md:flex-row gap-4  mt-8">
            <RadioButton
              label="Become a tutor and unlock your earning potential"
              value="tutor"
              selectedValue={selectedRole}
              onChange={handleSelection}
              icon={tutorIcon}
              className="pb-10"
            />

            <RadioButton
              label="Enroll as a student and unlock limitless learning"
              value="student"
              selectedValue={selectedRole}
              onChange={handleSelection}
              icon={studentIcon} // Pass the tutor icon
            />
          </div>

          {/* Next button */}
          <div className="mt-6 w-full">
            <Button label="Next" onClick={handleNext} />
            {/* Using the reusable Button component */}
          </div>

          {/* Link for login */}
          <div className="mt-4">
            <p className="text-gray-600  font-[500] text-[12px] leading-[20px] font-[#6E7682] pt-2 ">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupStepOne;
