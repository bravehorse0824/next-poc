import React, { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import FormInput from "@/app/components/FormInput";
import { CompanyFields, useFormStore } from "@/store/signUpStore";

export const CompanyRequestDataCountryEnum = {
  It: "IT",
  Es: "ES",
  Fr: "FR",
  Gb: "GB",
} as const;

interface CompanyFormProps {
  onNext: () => void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({ onNext }) => {
  const { t } = useTranslation("common");
  const [isCompanyExisting, setIsCompanyExisting] = useState(false);
  const { companyFormData, setCompanyFormData, errors, setErrors } =
    useFormStore((state) => ({
      companyFormData: state.companyFormData,
      setCompanyFormData: state.setCompanyFormData,
      errors: state.companyFormErrors,
      setErrors: state.setCompanyFormErrors,
    }));

  const toggleCompanyExisting = () => {
    setIsCompanyExisting(!isCompanyExisting);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCompanyFormData({
      ...companyFormData,
      [name]: value,
    });

    if (name == "companyZip") {
      /^\d{0,5}$/.test(value)
        ? setErrors({
            ...errors,
            [name]: "",
          })
        : setErrors({
            ...errors,
            [name]: "ZIP code must be exactly 5 digits",
          });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: Partial<CompanyFields> = {};

    if (!companyFormData.companyName) {
      newErrors.companyName = t("register.company.requiredFields");
      valid = false;
    }
    if (!companyFormData.vatCode) {
      newErrors.vatCode = t("register.company.requiredFields");
      valid = false;
    } else if (companyFormData.vatCode.length < 11) {
      newErrors.vatCode = t("register.company.invalidVAT");
      valid = false;
    }
    if (!companyFormData.companyAddress) {
      newErrors.companyAddress = t("register.company.requiredFields");
      valid = false;
    }
    if (!companyFormData.companyCity) {
      newErrors.companyCity = t("register.company.requiredFields");
      valid = false;
    }
    if (!companyFormData.companyZip) {
      newErrors.companyZip = t("register.company.requiredFields");
      valid = false;
    }
    if (!companyFormData.companyCountry) {
      newErrors.companyCountry = t("register.company.requiredFields");
      valid = false;
    }
    if (!companyFormData.companyRegion) {
      newErrors.companyRegion = t("register.company.requiredFields");
      valid = false;
    }
    if (!companyFormData.companyProvince) {
      newErrors.companyProvince = t("register.company.requiredFields");
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onNext();
    }
  };

  useEffect(() => {
    setCompanyFormData({
      ...companyFormData,
      companyCountry: Object.values(CompanyRequestDataCountryEnum)[0],
    });
  }, []);

  return (
    <div className="w-full">
      <p className="text-sm text-gray-500 mb-4">
        {t("register.company.requiredFields")}
      </p>
      <div className="flex justify-between text-gray-500 items-center mb-4">
        <p className="text-sm">{t("register.company.companyAlreadyExists")}</p>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={isCompanyExisting}
            onChange={toggleCompanyExisting}
          />
          <div className="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
        </label>
      </div>
      {isCompanyExisting && (
        <>
          <hr className={`my-6 border-green-500 w-20`} />
          <div className="grid grid-cols-2 gap-4 mb-4 text-black">
            <FormInput
              name="searchCompanyName"
              placeholder={t("register.company.companyName")}
              value={companyFormData.searchCompanyName}
              onChange={handleChange}
              error={errors.companyName ?? ""}
              required
              id="searchCompanyName"
              className="peer placeholder:text-transparent"
              labelElement={
                <label
                  htmlFor="searchCompanyName"
                  className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
                >
                  {t("register.company.companyName")}*
                </label>
              }
            />
            <FormInput
              name="searchVatCode"
              placeholder={t("register.company.vatCode")}
              value={companyFormData.searchVatCode}
              onChange={handleChange}
              error={errors.vatCode ?? ""}
              required
              id="searchVatCode"
              className="peer placeholder:text-transparent"
              labelElement={
                <label
                  htmlFor="searchVatCode"
                  className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
                >
                  {t("register.company.vatCode")}*
                </label>
              }
            />
          </div>
          <div className="flex justify-end mt-4 text-black">
            <button
              onClick={() => {}}
              className={`py-2 px-4  rounded-full w-40   ${
                !companyFormData.searchCompanyName ||
                !companyFormData.searchVatCode
                  ? "bg-[#c2c2c2] text-white cursor-not-allowed"
                  : "border-green-400 border-2 hover:bg-green-400 hover:text-white text-gray-700"
              }`}
            >
              Search
            </button>
          </div>
        </>
      )}
      <hr
        className={`my-6 border-green-500 w-20 ${
          isCompanyExisting ? "w-full" : ""
        }`}
      />
      <div className="grid grid-cols-2 gap-4 mb-4 text-black">
        <FormInput
          name="companyName"
          placeholder={t("register.company.companyName")}
          value={companyFormData.companyName}
          onChange={handleChange}
          error={errors.companyName ?? ""}
          required
          disabled={isCompanyExisting}
          id="companyName"
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="companyName"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.company.companyName")}*
            </label>
          }
        />
        <FormInput
          name="vatCode"
          placeholder={t("register.company.vatCode")}
          value={companyFormData.vatCode}
          onChange={handleChange}
          error={errors.vatCode ?? ""}
          required
          disabled={isCompanyExisting}
          id="vatCode"
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="vatCode"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.company.vatCode")}*
            </label>
          }
        />
      </div>
      <div className="mb-4 w-1/2 text-black">
        <FormInput
          name="website"
          placeholder={t("register.company.website")}
          value={companyFormData.website}
          onChange={handleChange}
          error={errors.website ?? ""}
          disabled={isCompanyExisting}
          id="website"
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="website"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.company.website")}
            </label>
          }
        />
      </div>
      <hr className={`my-6 border-green-500 w-20`} />
      <div className="grid grid-cols-3 gap-4 mb-4 text-black">
        <FormInput
          name="companyAddress"
          placeholder={t("register.company.companyAddress")}
          value={companyFormData.companyAddress}
          onChange={handleChange}
          error={errors.companyAddress ?? ""}
          required
          disabled={isCompanyExisting}
          id="companyAddress"
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="companyAddress"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.company.companyAddress")}*
            </label>
          }
        />
        <FormInput
          name="companyCity"
          placeholder={t("register.company.companyCity")}
          value={companyFormData.companyCity}
          onChange={handleChange}
          error={errors.companyCity ?? ""}
          required
          disabled={isCompanyExisting}
          id="companyCity"
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="companyCity"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.company.companyCity")}*
            </label>
          }
        />
        <FormInput
          name="companyZip"
          placeholder={t("register.company.companyZip")}
          value={companyFormData.companyZip}
          onChange={handleChange}
          error={errors.companyZip ?? ""}
          required
          disabled={isCompanyExisting}
          id="companyZip"
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="companyZip"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.company.companyZip")}*
            </label>
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4 text-black">
        <div>
          <select
            name="companyCountry"
            value={companyFormData.companyCountry}
            onChange={handleChange}
            className={`block w-full pl-3 pr-10 py-2 text-lg text-black border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md ${
              errors.companyCountry ? "border-red-500" : ""
            } ${isCompanyExisting ? "bg-gray-100 text-gray-400" : ""}`}
            required
            disabled={isCompanyExisting}
          >
            {Object.entries(CompanyRequestDataCountryEnum).map(
              ([key, value]) => (
                <option key={key} value={value}>
                  {value}
                </option>
              )
            )}
          </select>
          {errors.companyCountry && (
            <p className="mt-2 text-sm text-red-600">{errors.companyCountry}</p>
          )}
        </div>
        <FormInput
          name="companyRegion"
          placeholder={t("register.company.companyRegion")}
          value={companyFormData.companyRegion}
          onChange={handleChange}
          error={errors.companyRegion ?? ""}
          required
          disabled={isCompanyExisting}
          id="companyRegion"
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="companyRegion"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.company.companyRegion")}*
            </label>
          }
        />
      </div>
      <div className="mb-4 w-1/2 text-black">
        <FormInput
          name="companyProvince"
          placeholder={t("register.company.companyProvince")}
          value={companyFormData.companyProvince}
          onChange={handleChange}
          error={errors.companyProvince ?? ""}
          required
          disabled={isCompanyExisting}
          id="companyProvince"
          className="peer placeholder:text-transparent"
          labelElement={
            <label
              htmlFor="companyProvince"
              className="absolute left-0 ml-0 px-0 -translate-y-5 text-sm duration-100 ease-linear peer-placeholder-shown:ml-1 peer-placeholder-shown:px-1 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:ml-0 peer-focus:-translate-y-5 peer-focus:px-0 peer-focus:text-sm"
            >
              {t("register.company.companyProvince")}*
            </label>
          }
        />
      </div>
      <div className="flex justify-end mt-4 text-black">
        <button
          onClick={handleSubmit}
          className={`py-2 px-4 mb-8 font-bold rounded-full w-40 ${
            isCompanyExisting
              ? "bg-[#c2c2c2] text-white"
              : "border-green-400 border-2 hover:bg-green-400 hover:text-white text-gray-700"
          }`}
          disabled={isCompanyExisting}
        >
          {t("register.company.buttonContinue")}
        </button>
      </div>
    </div>
  );
};

export default CompanyForm;
