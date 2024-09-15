import MultiStepForm from "../../components/MultiStepForm";
import RoleSelection from "./RoleSelection";
import PersonalDetails from "./PersonalDetails";
import IdentificationVerification from "./IdentificationVerification";
import Password from "./Password";
import Frame from "../../assets/images/Frame 10251.png";
import logo from "../../assets/svgs/shepherd.svg";
import { Link } from "react-router-dom";
import React from "react";
// import { UserContext } from "../../context/UserContext";

const SignUp = () => {
  const steps = [
    { component: RoleSelection },
    { component: PersonalDetails },
    { component: IdentificationVerification },
    { component: Password },
  ];

  // const { setUser } = React.useContext(UserContext);

  // console.log(user, "from user");
  const handleSubmit = (formData) => {
    // setUser(formData);
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center font-inter">
      {/* Image Section */}
      <div className="hidden w-[548px] rounded-lg md:block bg-[#f8f8f8] py-16">
        <div className="font-[600] text-[42px]">
          <h1 className="px-8 py-8">
            Hi there, <span className="text-[#207DF7]">Welcome!</span>
            <img src={Frame} alt="sign-up" />
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-[648px] font-inter flex flex-col items-center py-20">
        <div className="mb-12">
          <img src={logo} alt="logo" />
        </div>
        <MultiStepForm steps={steps} onSubmit={handleSubmit} />
        <div className="mt-4">
          <p className="text-gray-600 font-[500] text-[12px] leading-[20px] pt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
