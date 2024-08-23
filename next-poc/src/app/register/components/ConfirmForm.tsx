import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { LiaEdit } from "react-icons/lia";
import {
  CompanyFields,
  ContactFields,
  useFormStore,
} from "@/store/signUpStore";
import { signUpAction } from "@/actions/signUpAction";

interface ConfirmFormProps {
  onBack: () => void;
  onGoFirst: () => void;
}

const ConfirmForm: React.FC<ConfirmFormProps> = ({ onBack, onGoFirst }) => {
  const { t } = useTranslation("common");
  const { companyFormData, contactFormData } = useFormStore((state) => ({
    companyFormData: state.companyFormData,
    contactFormData: state.contactFormData,
  }));

  const iconStyle = {
    fontSize: "1.5rem",
    color: "green",
    cursor: "pointer",
    marginLeft: "1em",
  };

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");

  async function signUpButtonPressed() {
    setLoading(true);
    const res = await signUpAction(companyFormData, contactFormData);
    setLoading(false);
    console.log(res);
    if (res?.message != null) {
      console.log(res.message);
      setMessage(res.message);
    }
  }

  return (
    <div className="w-full text-black">
      <div className="mb-6 border-gray-300 pb-4">
        <div className="flex items-center mb-2">
          <h3 className="text-lg font-semibold">
            {t("register.confirm.companySummary")}
          </h3>
          <LiaEdit style={iconStyle} onClick={onGoFirst} />
        </div>
        <hr className="my-4 border-green-500 w-20" />
        <div className="grid grid-cols-1 gap-2">
          <Row
            title={t("register.confirm.companyName")}
            content={companyFormData.companyName}
            boldContent
          />
          <Row
            title={t("register.confirm.address")}
            content={`${companyFormData.companyAddress}, ${companyFormData.companyCity}, ${companyFormData.companyZip}, ${companyFormData.companyCountry}, ${companyFormData.companyRegion}, ${companyFormData.companyProvince}`}
            boldContent
          />
          <Row
            title={t("register.confirm.vatCode")}
            content={companyFormData.vatCode}
            boldContent
          />
          <Row
            title={t("register.confirm.website")}
            content={companyFormData.website}
            boldContent
          />
        </div>
      </div>

      <div className="mb-6 border-gray-300 pb-4">
        <div className="flex items-center mb-2">
          <h3 className="text-lg font-semibold">
            {t("register.confirm.contactSummary")}
          </h3>
          <LiaEdit style={iconStyle} onClick={onBack} />
        </div>
        <hr className="my-4 border-green-500 w-20" />
        <div className="grid grid-cols-1 gap-2">
          <Row
            title={t("register.confirm.firstAndLastName")}
            content={`${contactFormData.firstName} ${contactFormData.lastName}`}
            boldContent
          />
          <Row
            title={t("register.confirm.mobilePhone")}
            content={contactFormData.mobilePhone}
            boldContent
          />
          <Row
            title={t("register.confirm.email")}
            content={contactFormData.email}
            boldContent
          />
          <Row
            title={t("register.confirm.country")}
            content={contactFormData.country}
            boldContent
          />
          <Row
            title={t("register.confirm.role")}
            content={contactFormData.role}
            boldContent
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>{t("register.confirm.privacyPolicyCheck")}</span>
        </label>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onBack}
          className="mr-2 font-bold border-2 border-black text-black rounded-full hover:bg-gray-400 hover:text-white hover:border-transparent px-4 py-2"
        >
          {t("register.confirm.buttonBack")}
        </button>
        <button
          onClick={signUpButtonPressed}
          className="py-2 px-4 font-bold border-2 border-green-400  text-gray-700 rounded-full hover:bg-green-400 hover:text-white w-40"
          disabled={loading}
        >
          {loading ? (
            <div className="loader"></div>
          ) : (
            t("register.confirm.buttonConfirm")
          )}
        </button>
      </div>
      {message && <p className="text-red-500 text-sm text-center">{message}</p>}
    </div>
  );
};

interface RowProps {
  title: string;
  content: string;
  boldContent?: boolean;
}

const Row: React.FC<RowProps> = ({ title, content, boldContent }) => {
  return (
    <div className="flex">
      <p className="w-1/3">{title}</p>
      <p className={`w-2/3 ${boldContent ? "font-semibold" : ""}`}>{content}</p>
    </div>
  );
};

export default ConfirmForm;
