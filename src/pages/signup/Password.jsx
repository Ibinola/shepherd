import React from "react";
import OnboardingHeader from "../../components/Onboarding";
import { InputField } from "../../components/InputField";

function Password({ formData, handleChange }) {
  return (
    <div className="text-center">
      <OnboardingHeader text="Hi there, before you proceed, let us know who is signing up" />
      <div className="space-y-2 w-96 flex flex-col text-left mx-auto justify-center mt-4">
        <InputField
          id="password"
          name="password"
          type="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
        >
          Password
        </InputField>
        <InputField
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Re-enter password"
          value={formData.confirmPassword}
          onChange={handleChange}
        >
          Confirm Password
        </InputField>
      </div>
    </div>
  );
}

export default Password;
