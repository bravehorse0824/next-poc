"use client";

import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";

const GreetingsPage: React.FC = () => {
  const { t } = useTranslation("common");
  const [step, setStep] = useState(1);

  const listItems = [
    {
      title: "Check your email",
      description:
        "You will receive an e-mail summarizing and confirming your order",
    },
    {
      title: "Check progress",
      description:
        "You can check the status of your orders in the <span class='text-green-500'>My orders</span> section",
    },
  ];

  return (
    <div className="w-full bg-white h-[calc(100vh_-_100px)] text-black">
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/confirm-background.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex">
          <div className="w-1/2 flex flex-col justify-center items-center text-white px-4 gap-4">
            <h1 className="w-80 text-4xl mb-2 font-light">
              {t("confirm.title")}
            </h1>
            <p className="w-80 text-lg">Your order was sent successfully</p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-8 flex-1 flex justify-center">
        <div className="w-2/4">
          <div className="flex">
            <h2 className="text-2xl font-semibold mb-4">
              {t("confirm.content-title")}
            </h2>
            <hr className="my-4 ml-4 border border-green-500 w-20 " />
          </div>
          <div className="flex flex-col gap-6">
            {listItems.map((item: any, index: number) => (
              <div key={index} className="flex ">
                {index + 1}.
                <div className="ml-3 mb-2 flex flex-col">
                  <span
                    className={`font-semibold flex gap-4 ${
                      index < step ? "text-green-500" : ""
                    }`}
                  >
                    {item.title}
                    {index < step && (
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                    )}
                  </span>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center py-8">
        <button className="w-64 mr-8 px-6 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white">
          Dashboard
        </button>
        <button className="w-64 px-6 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default GreetingsPage;
