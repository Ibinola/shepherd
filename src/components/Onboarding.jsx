import React from "react";

const OnboardingHeader = ({ text }) => {
  return (
    <div>
      <h2 className="font-[600] text-[1.5rem] leading-[1.875rem] mb-2">
        Create your Shepherd Account
      </h2>
      <p className="font-[400] px-8 text-center text-[.875rem] text-[#6E7682]">
        {text}
      </p>
    </div>
  );
};

export default OnboardingHeader;
