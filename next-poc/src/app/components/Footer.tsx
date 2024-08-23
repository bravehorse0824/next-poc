import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import useTranslation from "next-translate/useTranslation";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-black text-white py-2 px-4 fixed bottom-0 w-full z-10">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <a href={t("footer.privacy.link")}>{t("footer.privacy.title")}</a>
          <span className="mx-1">|</span>
          <a href={t("footer.cookie.link")}>{t("footer.cookie.title")}</a>
          <span className="mx-1">|</span>
          <a href={t("footer.legal.link")}>{t("footer.legal.title")}</a>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <p>{t("footer.copyright")}</p>
        </div>
        <div className="flex gap-4">
          <a
            href={t("footer.facebook")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href={t("footer.instagram")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href={t("footer.twitter")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
