"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./forgotPassword.module.scss";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import Cookies from "js-cookie";

function ForgotPassword() {
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

  const router = useRouter();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [isCheckingToken, setIsCheckingToken] = useState(true);
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const otpRefs = useRef([]);

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

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1].focus();
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleOtpPaste = (e) => {
    const pastedData = e.clipboardData.getData("text");
    if (/^\d+$/.test(pastedData)) {
      const newOtp = [...otp];
      for (let i = 0; i < Math.min(pastedData.length, otp.length); i++) {
        newOtp[i] = pastedData[i];
      }
      setOtp(newOtp);

      const lastFilledIndex = Math.min(pastedData.length - 1, otp.length - 1);
      otpRefs.current[lastFilledIndex]?.focus();
    }
  };

  const onSubmit = async (data) => {
    const email = data.email;
    setIsLoading(true);
    setApiError("");

    if (!isOtpSent) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        const result = await response.json();
        setIsLoading(false);

        if (response.ok) {
          toast.success("OTP sent to your email!");
          setIsOtpSent(true);
        } else {
          setApiError(result.message || "Failed to send OTP. Try again.");
          toast.error(result.message || "Failed to send OTP. Try again.");
        }
      } catch (error) {
        setIsLoading(false);
        setApiError("An error occurred while sending OTP.");
        toast.error("An error occurred while sending OTP.");
      }
    } else {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              otp: otp.join(""),
              newPassword: data.password,
            }),
          }
        );

        const result = await response.json();
        setIsLoading(false);

        if (response.ok) {
          toast.success("Password updated successfully!");
          reset();
          setTimeout(() => {
            router.push("/login");
          }, 1000);
        } else {
          setApiError(
            result.message || "Failed to update password. Try again."
          );
          toast.error(
            result.message || "Failed to update password. Try again."
          );
        }
      } catch (error) {
        setIsLoading(false);
        setApiError("An error occurred while updating the password.");
        toast.error("An error occurred while updating the password.");
      }
    }
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
      <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-[1078px] p-6 sm:p-10 bg-[#FFFFFF]/25 rounded-lg shadow-lg">
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

        <p className="text-2xl sm:text-4xl text-center text-[#F8E6C2]">
          Forgot Password
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col items-center justify-center h-full min-h-[200px] relative"
        >
          {!isOtpSent ? (
            <>
              <input
                type="email"
                placeholder="E-mail"
                className={clsx([
                  styles.inputbox,
                  "w-full sm:w-2/3 lg:w-1/3 px-4 py-2 bg-transparent text-[#DFD5C1] border rounded-3xl focus:outline-none relative",
                ])}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className={styles.errMsg}>{errors.email.message}</p>
              )}
              {apiError && <p className={styles.errMsg}>{apiError}</p>}
            </>
          ) : (
            <div className="flex flex-col items-center gap-8 w-full mt-10">
              <div className="flex space-x-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    className={clsx([
                      styles.inputbox,
                      "w-10 sm:w-12 h-10 sm:h-12 text-center bg-transparent text-[#DFD5C1] border rounded-xl focus:outline-none relative",
                    ])}
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    onPaste={(e) => handleOtpPaste(e)}
                    ref={(el) => (otpRefs.current[index] = el)}
                  />
                ))}
              </div>
              <div className="w-full flex flex-col items-center gap-4">
                <div className="flex-1 relative lg:w-1/3">
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
                  <p className={`${styles.errMsg} md:max-w-xs`}>
                    {errors.password.message}
                  </p>
                )}
                <div className="flex-1 relative lg:w-1/3">
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
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={clsx([
              "w-full sm:w-1/2 lg:w-1/5 py-2 bg-[#B59018] text-white rounded-lg focus:outline-none",
              isLoading && "opacity-50 cursor-not-allowed",
            ])}
          >
            {isLoading
              ? "Reset Password"
              : isOtpSent
              ? "Reset Password"
              : "Send OTP"}
          </button>
        </form>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default ForgotPassword;
