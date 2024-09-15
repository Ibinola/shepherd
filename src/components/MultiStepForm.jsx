import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";

const MultiStepForm = ({ steps, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  // const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    // setUser(formData);
    navigate("/dashboard");
  };

  return (
    <div>
      {steps[currentStep].component({ formData, handleChange })}

      <div className="mt-4 flex flex-col space-y-4 justify-between">
        {currentStep < steps.length - 1 ? (
          <Button onClick={nextStep} label="Next" />
        ) : (
          <Button onClick={handleSubmit} label="Confirm" />
        )}
        {currentStep > 0 && (
          <Button
            label="Previous"
            onClick={prevStep}
            className="bg-transparent text-[#207DF7] border"
          />
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
