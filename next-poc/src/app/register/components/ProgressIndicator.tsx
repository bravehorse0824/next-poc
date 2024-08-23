import useTranslation from "next-translate/useTranslation";
import React from "react";
import { FiHome, FiUser, FiCheck } from "react-icons/fi";

interface ProgressIndicatorProps {
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
}) => {
  const { t } = useTranslation("common");

  const steps = [
    { icon: <FiHome />, label: t("register.company.title") },
    { icon: <FiUser />, label: t("register.contact.title") },
    { icon: <FiCheck />, label: t("register.confirm.title") },
  ];

  return (
    <div className="w-full">
      <hr className="border-green-500 w-full translate-y-6" />
      <div className="flex justify-between items-center w-full mb-8 px-20">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center ">
            {index < currentStep ? (
              <div className="flex justify-center items-center">
                <div
                  className={`relative flex items-center justify-center w-12 h-12 border-2 rounded-full border-green-500 text-green-500 bg-white`}
                >
                  {step.icon}
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <div
                  className={`relative flex items-center justify-center w-12 h-12 border-2 rounded-full text-gray-200 bg-white`}
                >
                  {step.icon}
                </div>
              </div>
            )}
            <p
              className={`text-sm mt-2 text-black ${
                index < currentStep ? "font-bold" : ""
              }`}
            >
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
