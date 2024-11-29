"use client";

import React, { useState, useEffect } from "react";
import styles from "./signup.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, CircleHelp, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { signupAsync } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingToken, setIsCheckingToken] = useState(true);
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const reduxToken = Cookies.get("token");
    if (reduxToken) {
      router.push("/home");
    } else {
      setIsCheckingToken(false);
    }
  }, [router]);

  useEffect(() => {
    if (confirmPassword) {
      trigger("confirmPassword");
    }
  }, [password, confirmPassword, trigger]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const result = await dispatch(signupAsync(data));
    if (signupAsync.fulfilled.match(result)) {
      toast.success("Signup successful!");
      reset();
      setTimeout(() => {
        router.push("/home");
        setIsLoading(false);
      }, 1000);
    } else {
      setIsLoading(false);
      toast.error(result.payload.message || "Signup failed, please try again.");
    }
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

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
          Sign Up
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col items-center relative"
        >
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col gap-4 w-full lg:w-3/4 sm:flex-row">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className={clsx([
                    styles.inputbox,
                    "w-full px-4 py-2 bg-transparent text-[#DFD5C1] border rounded-3xl focus:outline-none",
                  ])}
                  {...register("firstName", {
                    required: "This field is required",
                    minLength: {
                      value: 2,
                      message:
                        "Must be at least 2 characters for the first name",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Only alphabets are allowed",
                    },
                  })}
                />
                {errors.firstName && (
                  <p className={styles.errMsg}>{errors.firstName.message}</p>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Last Name"
                  className={clsx([
                    styles.inputbox,
                    "w-full px-4 py-2 bg-transparent text-[#DFD5C1] border rounded-3xl focus:outline-none relative",
                  ])}
                  {...register("lastName", {
                    required: "This field is required",
                    minLength: {
                      value: 1,
                      message: "Must be at least 1 character for the last name",
                    },
                    pattern: {
                      value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                      message: "Only alphabets are allowed",
                    },
                  })}
                />
                {errors.lastName && (
                  <p className={styles.errMsg}>{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-3/4">
              <input
                type="email"
                placeholder="E-mail"
                className={clsx([
                  styles.inputbox,
                  "w-full px-4 py-2 bg-transparent text-[#DFD5C1] border rounded-3xl focus:outline-none relative",
                ])}
                {...register("email", {
                  required: "Email ID is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className={styles.errMsg}>{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-3/4">
              <div className="w-full">
                <div className="flex-1 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={clsx([
                      styles.inputbox,
                      "w-full px-4 py-2 pr-10 bg-transparent text-[#DFD5C1] border rounded-3xl focus:outline-none",
                    ])}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters.",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                        message:
                          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
                      },
                    })}
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
                  <p className={styles.errMsg}>{errors.password.message}</p>
                )}
              </div>
              <div className="w-full">
                <div className="flex-1 relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className={clsx([
                      styles.inputbox,
                      "w-full px-4 py-2 pr-10 bg-transparent text-[#DFD5C1] border rounded-3xl focus:outline-none",
                    ])}
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#DFD5C1]"
                  >
                    {showConfirmPassword ? <Eye /> : <EyeOff />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className={styles.errMsg}>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:w-3/4">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="isAccreditedInvestor"
                className="form-checkbox cursor-pointer"
                {...register("isAccreditedInvestor")}
              />
              <div className="flex gap-1 items-center">
                <p>Join as a Accredited Investor</p>
                <div className="relative">
                  <CircleHelp
                    onClick={() => setShowTooltip(!showTooltip)}
                    role="button"
                  />
                  {showTooltip && (
                    <div className="absolute -left-[213px] md:left-full bottom-0 ml-2 mt-1 p-4 w-[200px] md:w-[300px] h-[300px] rounded bg-white text-black overflow-auto">
                      <div className="flex justify-between">
                        <p className="font-extrabold">Accredited Investors</p>
                        <X
                          className=" cursor-pointer"
                          onClick={() => setShowTooltip(!showTooltip)}
                        />
                      </div>
                      <p className="font-extrabold mt-2">
                        How can individuals qualify as accredited?
                      </p>
                      <p>
                        Individuals (i.e., natural persons) may qualify as
                        accredited investors based on wealth and income
                        thresholds, as well as other measures of financial
                        sophistication.
                      </p>
                      <h4 className="mt-2 font-extrabold">
                        Financial Criteria
                      </h4>
                      <ul className="list-disc pl-5">
                        <li>
                          Net worth over $1 million, excluding primary residence
                          (individually or with spouse or partner)
                        </li>
                        <li>
                          Income over $200,000 (individually) or $300,000 (with
                          spouse or partner) in each of the prior two years, and
                          reasonably expects the same for the current year
                        </li>
                      </ul>

                      <h4 className="mt-2 font-semibold">
                        Professional Criteria
                      </h4>
                      <ul className="list-disc pl-5">
                        <li>
                          Investment professionals in good standing holding the
                          general securities representative license (Series 7),
                          the investment adviser representative license (Series
                          65), or the private securities offerings
                          representative license (Series 82)
                        </li>
                        <li>
                          Directors, executive officers, or general partners
                          (GP) of the company selling the securities (or of a GP
                          of that company)
                        </li>
                        <li>
                          Any “family client” of a “family office” that
                          qualifies as an accredited investor
                        </li>
                        <li>
                          For investments in a private fund, “knowledgeable
                          employees” of the fund
                        </li>
                      </ul>

                      <p className="mt-2 text-sm">
                        For more information, visit the SEC&apos;s Official{" "}
                        <Link
                          href="https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/accredited-investors"
                          target="_blank"
                          className="text-blue-600"
                        >
                          Accredited-Investors Page
                        </Link>
                        .
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                id="subscribe"
                className="form-checkbox cursor-pointer"
                {...register("subscribe")}
              />
              <p className="">Subscribe to Newsletter</p>
            </div>
          </div>

          <button
            type="submit"
            className={clsx([
              "w-full sm:w-1/2 lg:w-1/5 py-2 bg-[#B59018] text-white rounded-lg focus:outline-none",
              isLoading && "opacity-50 cursor-not-allowed",
            ])}
          >
            Sign Up
          </button>
        </form>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </div>
  );
}

export default Signup;
