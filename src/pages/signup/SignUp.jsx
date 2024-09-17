import React, { useState, useEffect } from "react";
import MultiStepForm from "../../components/MultiStepForm";
import RoleSelection from "./RoleSelection";
import PersonalDetails from "./PersonalDetails";
import IdentificationVerification from "./IdentificationVerification";
import Password from "./Password";
import signup from "../../assets/images/signup-bg-image.png";
import logo from "../../assets/svgs/shepherd.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  const steps = [
    { component: RoleSelection },
    { component: PersonalDetails },
    { component: IdentificationVerification },
    { component: Password },
  ];

  const handleSubmit = (formData) => {
    console.log("Form submitted:", formData);
  };

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f8f8f8] px-4 overflow-hidden">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center">
        {/* Image Section */}
        <div
          className={`hidden md:block w-1/2 bg-white rounded-lg py-16 px-12 transition-all duration-1000 ease-out ${
            animate
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="font-semibold text-4xl">
            <h1 className="px-8 py-8">
              Hi there, <span className="text-[#207DF7]">Welcome!</span>
              <img
                src={signup}
                alt="sign-up"
                className={`mt-4 transition-all duration-1000 delay-500 ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              />
            </h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center py-12 px-4 md:px-12">
          <div className="mb-12">
            <img src={logo} alt="logo" className="w-32 animate-bounce" />
          </div>
          <MultiStepForm steps={steps} onSubmit={handleSubmit} />
          <div className="mt-4 text-gray-600 text-sm leading-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
