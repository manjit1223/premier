"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "./login.module.scss";
import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    reset();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="bg-[#444444] h-screen flex items-center justify-center p-4">
      <div className="bg-white flex flex-col items-center md:w-1/2 py-20 rounded-xl shadow-2xl">
        <div className="flex flex-col items-center gap-4 font-bold text-2xl md:text-4xl">
          <Image
            src="/images/landing-page/logo.png"
            width={150}
            height={150}
            alt="logo"
            priority
          />
          <p className="text-[#3A3B4E]">Admin Login</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col items-center w-full mt-6 p-4"
        >
          <input
            type="email"
            placeholder="E-mail"
            className={clsx([
              styles.inputbox,
              "w-full md:w-3/4 xl:w-1/2 px-4 py-2 bg-[#F1F1F1] text-[#DFD5C1] border rounded-3xl focus:outline-none",
            ])}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className={clsx([styles.errMsg, "w-1/2"])}>This field is required</p>
          )}
          <div className="relative w-full md:w-3/4 xl:w-1/2 pt-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={clsx([
                styles.inputbox,
                "w-full px-4 py-2 pr-10 bg-[#F1F1F1] text-[#DFD5C1] border rounded-3xl focus:outline-none",
              ])}
              {...register("password", { required: true })}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black pt-4"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
          {errors.password && (
            <p className={clsx([styles.errMsg, "w-1/2"])}>This field is required</p>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className={clsx([
              "w-full sm:w-1/2 lg:w-1/5 py-2 bg-[#636363] text-white text-lg focus:outline-none rounded-lg mt-20",
              isLoading && "opacity-50 cursor-not-allowed",
            ])}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
