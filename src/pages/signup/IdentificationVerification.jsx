import React from "react";
import OnboardingHeader from "../../components/Onboarding";
import { SelectField } from "../../components/SelectField";

function IdentificationVerification({
  formData,
  handleChange,
  handleFileChange,
}) {
  return (
    <div>
      {" "}
      <div className="text-center">
        <OnboardingHeader text="Upload a proof of your identity (drivers license, passport, national ID)" />
        <div className="space-y-6 flex flex-col text-left mx-auto justify-center mt-8">
          {/* Country Selectors */}
          <div className="space-y-4">
            <SelectField
              label="Your country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              options={["USA", "Canada", "UK"]}
            />
          </div>

          {/* File Upload Section */}
          <div className="space-y-2">
            <label className="text-sm">Upload a valid ID</label>
            <div className="border-dashed border-2 border-gray-300 p-14 w-full text-center rounded-md">
              <p className="text-sm text-[#212224]">
                Drag file here to upload or{" "}
                <span className="text-[#207DF7] cursor-pointer">
                  choose file
                </span>
              </p>
              <p className="text-xs text-[#6E7682]">
                Supports PNG, JPG & JPEG doc formats
              </p>
              <input
                type="file"
                name="idFile"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Checkbox Confirmation */}
          <div className="space-x-2 flex items-start">
            <input
              type="checkbox"
              id="confirm"
              className="mt-1"
              // checked={formData.confirm}
              // onChange={handleCheckboxChange}
            />
            <label htmlFor="confirm" className="text-xs text-[#585F68]">
              I confirm that I uploaded a valid government-issued photo ID. Rest
              assured, your ID upload is secure and your information will not be
              saved.
            </label>
          </div>

        </div>
      </div>
    </div>
  );
}

export default IdentificationVerification;
