"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useTranslation from "next-translate/useTranslation";
import { signInAction } from "@/actions/signInAction";
import Link from "next/link";

export default function Login() {
  const { t } = useTranslation("common");

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function formAction(formData: FormData) {
    setMessage("");
    setLoading(true);
    const res = await signInAction(formData);
    setLoading(false);
    if (res?.message != null) {
      setMessage(res.message);
    }
  }

  return (
    <div
      className="flex justify-center items-center  h-[calc(100vh_-_100px)] bg-cover"
      style={{
        backgroundImage: `url('/images/sign-in-background.jpg')`,
        backgroundPosition: "center",
      }}
    >
      <div className="p-8 rounded max-w-[550px] -mt-16">
        <h1 className="text-2xl text-black text-center mb-4">
          {t("login.title")}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formAction(new FormData(e.currentTarget));
          }}
          className="px-20"
        >
          <div>
            <input
              type="text"
              name="username"
              placeholder={t("login.usernameHint")}
              className="w-full my-3 p-2 border font-medium text-black bg-transparent placeholder-black border-black rounded focus:outline-none focus:ring-2 focus:ring-green-500 "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder={t("login.passwordHint")}
              className="w-full my-3 p-2 border font-medium text-black bg-transparent placeholder-black border-black rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button
            type="submit"
            className={`py-2 mt-6 flex justify-center items-center w-7/12 h-11 rounded-full mx-auto ${
              !username || !password
                ? "bg-[#c2c2c2] text-white cursor-not-allowed"
                : "bg-[#a2c661] hover:bg-green-400 hover:text-white"
            }`}
            disabled={!username || !password || loading}
          >
            {loading ? (
              <div className="loader"></div>
            ) : (
              t("login.buttonContinue")
            )}
          </button>
          {message && (
            <p className="text-red-500 text-sm text-center">{message}</p>
          )}
        </form>
        <div className="text-center font-medium text-black my-3">
          <a href="#" className="text-sm text-grey-500 hover:underline">
            {t("login.forgotPassword")}
          </a>
        </div>
        <div className="border-t border-zinc-400 my-10"></div>
        <div className="text-center px-20">
          <h2 className="text-3xl font-light text-gray-600">
            {t("login.notRegisteredTitle")}
          </h2>
          <p className="text-sm text-gray-600 font-semibold my-5">
            {t("login.notRegisteredDescription")}
          </p>
          <Link href="/register">
            <button className="py-2 w-7/12 border-2 border-[#a2c661] text-gray-600 font-bold rounded-full hover:bg-green-500 hover:text-white">
              {t("login.registerButton")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
