import { InputField } from "../../components/InputField";
import OnboardingHeader from "../../components/Onboarding";

const PersonalDetails = ({ formData, handleChange }) => {
  return (
    <div className="text-center">
      <OnboardingHeader text="Hi there, before you proceed, let us know who is signing up" />
      <div className="space-y-2 w-96 flex flex-col text-left mx-auto justify-center mt-4">
        <InputField
          id="firstName"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        >
          First Name
        </InputField>
        <InputField
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        >
          Last Name
        </InputField>

        <InputField
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        >
          Email
        </InputField>
      </div>
    </div>
  );
};

export default PersonalDetails;
