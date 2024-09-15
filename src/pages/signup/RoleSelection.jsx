import RadioButton from "../../components/RadioButton";
import tutorIcon from "../../assets/svgs/tutor.svg";
import studentIcon from "../../assets/svgs/student.svg";
import OnboardingHeader from "../../components/Onboarding";

const RoleSelection = ({ formData, handleChange }) => {
  return (
    <div className="text-center">
      <OnboardingHeader text="Hi there, before you proceed, How do you plan to use Shepherd?" />
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <RadioButton
          label="Become a tutor and unlock your earning potential"
          value="tutor"
          name="selectedRole"
          selectedValue={formData.selectedRole}
          onChange={handleChange}
          icon={studentIcon}
        />
        <RadioButton
          label="Enroll as a student and unlock limitless learning"
          value="student"
          name="selectedRole"
          selectedValue={formData.selectedRole}
          onChange={handleChange}
          icon={tutorIcon}
        />
      </div>
    </div>
  );
};

export default RoleSelection;
