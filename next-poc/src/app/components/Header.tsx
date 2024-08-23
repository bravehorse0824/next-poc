"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../../i18n";

const Header: React.FC = () => {
  const { locales } = i18nConfig;
  const { lang } = useTranslation();

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center"></div>

      <div className="relative">
        <select
          onChange={(value) => {}}
          defaultValue={lang}
          className="appearance-none border border-gray-300 bg-white px-4 py-2 rounded-md shadow-sm text-sm focus:outline-none focus:border-blue-500"
        >
          {locales!.map((locale) => (
            <option key={locale} value={locale}>
              {locale}
            </option>
          ))}
        </select>
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-.707.293z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </header>
  );
};

export default Header;
