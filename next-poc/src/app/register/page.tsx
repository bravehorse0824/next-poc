"use client";

import React, { useState } from "react";
import ProgressIndicator from "./components/ProgressIndicator";
import CompanyForm from "./components/CompanyForm";
import ConfirmForm from "./components/ConfirmForm";
import ContactForm from "./components/ContactForm";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleGoFirst = () => {
    setCurrentStep(1);
  };

  return (
    <div className="bg-gray-100 min-h-[calc(100vh_-_100px)]">
      <div className="flex flex-col items-start justify-start max-w-4xl mx-auto p-8">
        <ProgressIndicator currentStep={currentStep} />
        <div className="mt-8 w-full">
          {currentStep === 1 && <CompanyForm onNext={handleNext} />}
          {currentStep === 2 && (
            <ContactForm onBack={handleBack} onNext={handleNext} />
          )}
          {currentStep === 3 && (
            <ConfirmForm onBack={handleBack} onGoFirst={handleGoFirst} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
