"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./login.module.scss";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Eye, EyeOff } from "lucide-react";
import { loginAsync } from "@/store/slices/userSlice";
import Cookies from "js-cookie";

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingToken, setIsCheckingToken] = useState(true);

  useEffect(() => {
    const reduxToken = Cookies.get("token");
    if (reduxToken) {
      router.push("/home");
    } else {
      setIsCheckingToken(false);
    }
  }, [router]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const result = await dispatch(loginAsync(data));
    if (loginAsync.fulfilled.match(result)) {
      reset();
      router.push("/home");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast.error(result.payload.message || "Login failed, please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  if (isCheckingToken) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-[1078px] p-6 sm:p-8 bg-[#FFFFFF]/25 rounded-lg shadow-lg">
        <div
          className={clsx([
            styles.rounds,
            "absolute top-[-50px] sm:top-[-100px] right-[-50px] sm:right-[-100px] h-32 sm:h-60 w-32 sm:w-60 opacity-30 rounded-full shadow-xl shadow-[#947509]",
          ])}
        ></div>
        <div
          className={clsx([
            styles.rounds,
            "absolute bottom-[-50px] sm:bottom-[-100px] left-[-50px] sm:left-[-100px] h-48 sm:h-96 w-48 sm:w-96 opacity-30 rounded-full shadow-xl shadow-[#947509]",
          ])}
        ></div>

        <p className="text-2xl sm:text-4xl text-center text-[#F8E6C2] mb-4 sm:mb-6">
          Login
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col items-center relative"
        >
          <input
            type="email"
            placeholder="E-mail"
            className={clsx([
              styles.inputbox,
              "w-full sm:w-2/3 lg:w-1/3 px-4 py-2 bg-transparent text-[#DFD5C1] border rounded-3xl focus:outline-none",
            ])}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className={styles.errMsg}>This field is required</p>
          )}
          <div className="relative w-full sm:w-2/3 lg:w-1/3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={clsx([
                styles.inputbox,
                "w-full px-4 py-2 pr-10 bg-transparent text-[#DFD5C1] border rounded-3xl focus:outline-none",
              ])}
              {...register("password", { required: true })}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#DFD5C1]"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
          {errors.password && (
            <p className={styles.errMsg}>This field is required</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={clsx([
              "w-full sm:w-1/2 lg:w-1/5 py-2 bg-[#B59018] text-white rounded-lg focus:outline-none relative",
              isLoading && "opacity-50 cursor-not-allowed",
            ])}
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center justify-center mt-4 space-x-1 relative">
          <button className="p-2 rounded-full cursor-auto">
            <i className="fa-brands fa-facebook text-xl"></i>
          </button>
          <button className="p-2 rounded-full cursor-auto">
            <i className="fa-brands fa-google text-xl"></i>
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-[#DFD5C1]">
            Don&apos;t have an account?
            <Link
              href="/signup"
              className="text-white font-bold hover:underline ml-2 relative"
            >
              Create an account
            </Link>
          </p>
          <p className="mt-2">
            <Link
              href="/forgot-password"
              className="text-white font-bold hover:underline relative"
            >
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default Login;
