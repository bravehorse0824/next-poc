import React from "react";
import useTranslation from "next-translate/useTranslation";
import FormInput from "@/app/components/FormInput";
import { ContactFields, useFormStore } from "@/store/signUpStore";

interface ContactFormProps {
  onBack: () => void;
  onNext: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onBack, onNext }) => {
  const { t } = useTranslation("common");
  const {
    contactFormData,
    setContactFormData,
    contactFormErrors,
    setContactFormErrors,
  } = useFormStore((state) => ({
    contactFormData: state.contactFormData,
    setContactFormData: state.setContactFormData,
    contactFormErrors: state.contactFormErrors,
    setContactFormErrors: state.setContactFormErrors,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });

    setContactFormErrors({
      ...contactFormErrors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: Partial<ContactFields> = {};

    if (!contactFormData.username) {
      newErrors.username = t("register.company.requiredFields");
      valid = false;
    }
    if (!contactFormData.password) {
      newErrors.lastName = t("register.company.requiredFields");
      valid = false;
    }
    if (!contactFormData.firstName) {
      newErrors.firstName = t("register.company.requiredFields");
      valid = false;
    }
    if (!contactFormData.lastName) {
      newErrors.lastName = t("register.company.requiredFields");
      valid = false;
    }
    if (!contactFormData.mobilePhone) {
      newErrors.mobilePhone = t("register.company.requiredFields");
      valid = false;
    }
    if (!contactFormData.email) {
      newErrors.email = t("register.company.requiredFields");
      valid = false;
    }
    if (!contactFormData.country) {
      newErrors.country = t("register.company.requiredFields");
      valid = false;
    }
    if (!contactFormData.role) {
      newErrors.role = t("register.company.requiredFields");
      valid = false;
    }

    setContactFormErrors(newErrors);

    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="w-full text-black">
      <p className="text-sm text-gray-500 mb-8">
        {t("register.contact.requiredFields")}
      </p>
      <div className="grid grid-cols-2 gap-4 mb-4 ">
        <FormInput
          id="username"
          name="username"
          placeholder={t("register.contact.username")}
          value={contactFormData.username}
          onChange={handleChange}
          error={contactFormErrors.username ?? ""}
          required
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="username"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.contact.username")}*
            </label>
          }
        />
        <FormInput
          id="password"
          name="password"
          placeholder={t("register.contact.password")}
          value={contactFormData.password}
          onChange={handleChange}
          error={contactFormErrors.password ?? ""}
          required
          type="password"
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="password"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.contact.password")}*
            </label>
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <FormInput
          id="firstName"
          name="firstName"
          placeholder={t("register.contact.firstName")}
          value={contactFormData.firstName}
          onChange={handleChange}
          error={contactFormErrors.firstName ?? ""}
          required
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="firstName"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.contact.firstName")}*
            </label>
          }
        />
        <FormInput
          id="lastName"
          name="lastName"
          placeholder={t("register.contact.lastName")}
          value={contactFormData.lastName}
          onChange={handleChange}
          error={contactFormErrors.lastName ?? ""}
          required
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="lastName"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.contact.lastName")}*
            </label>
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <FormInput
          id="mobilePhone"
          name="mobilePhone"
          placeholder={t("register.contact.mobilePhone")}
          value={contactFormData.mobilePhone}
          onChange={handleChange}
          error={contactFormErrors.mobilePhone ?? ""}
          required
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="mobilePhone"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.contact.mobilePhone")}*
            </label>
          }
        />
        <FormInput
          id="email"
          name="email"
          placeholder={t("register.contact.email")}
          value={contactFormData.email}
          onChange={handleChange}
          error={contactFormErrors.email ?? ""}
          required
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="email"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.contact.email")}*
            </label>
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <FormInput
          id="country"
          name="country"
          placeholder={t("register.contact.country")}
          value={contactFormData.country}
          onChange={handleChange}
          error={contactFormErrors.country ?? ""}
          required
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="country"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.contact.country")}*
            </label>
          }
        />
        <FormInput
          id="role"
          name="role"
          placeholder={t("register.contact.role")}
          value={contactFormData.role}
          onChange={handleChange}
          error={contactFormErrors.role ?? ""}
          required
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="role"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.contact.role")}*
            </label>
          }
        />
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={onBack}
          className="mr-2 py-2 px-4 bg-transparent text-black border-2 border-black rounded-full hover:bg-gray-400 hover:text-white hover:border-transparent"
        >
          {t("register.confirm.buttonBack")}
        </button>
        <button
          onClick={handleSubmit}
          className="py-2 px-4 font-bold border-2 border-green-400  text-gray-700 rounded-full hover:bg-green-400 hover:text-white w-40"
        >
          {t("register.contact.buttonContinue")}
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
