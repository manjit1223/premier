"use client";

import React, { useState, useEffect } from "react";
import styles from "./section-register-form.module.scss";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { useSelector } from "react-redux";

export default function SectionRegisterForm() {
  const [token, setToken] = useState(null);

  const reduxToken = useSelector((state) => state.user.token);

  useEffect(() => {
    setToken(reduxToken);
  }, [reduxToken]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData?.message || response.statusText;
        throw new Error(errorMessage);
      }
      const result = await response.json();
      toast.success(
        "Signup successful! Please check your email for your password to log in."
      );
      reset();
    } catch (error) {
      toast.error(`Signup failed: ${error.message}`);
    }
  };

  return (
    <div className="grid gap-4 px-5 mt-10" id="home">
      <p className="euphoria-script text-4xl md:text-5xl text-center">
        Early Investment Opportunity Coming Soon!
      </p>
      {!token && (
        <p
          className={clsx([
            styles.subtitle,
            "text-center md:text-2xl golden-color",
          ])}
        >
          Register For More Information!
        </p>
      )}
      {!token && (
        <div className="md:w-2/5 md:mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <input
                  className={clsx([styles.input, "px-4 py-2 lg:h-10"])}
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "This field is required",
                    minLength: {
                      value: 2,
                      message:
                        "Must be at least 2 characters for the first name",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Only alphabets are allowed",
                    },
                  })}
                />
                {errors.firstName && (
                  <p className={styles.errMsg}>{errors.firstName.message}</p>
                )}
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Last Name"
                  className={clsx([styles.input, "px-4 py-2 lg:h-10"])}
                  {...register("lastName", {
                    required: "This field is required",
                    minLength: {
                      value: 1,
                      message:
                        "Must be at least 1 characters for the last name",
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
            <div className="flex flex-row gap-4">
              <div className="w-[70%] md:w-3/4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={clsx([styles.input, "px-4 py-2 lg:h-10"])}
                  {...register("email", {
                    required: "Email ID is required",
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message: "Enter a valid email address",
                    },
                    validate: {
                      noConsecutiveDots: (value) =>
                        !/\.\./.test(value) ||
                        "Email address cannot contain consecutive dots",
                      noStartingOrEndingDot: (value) =>
                        !/^[.]|[.]$/.test(value) ||
                        "Email address cannot start or end with a dot",
                      noSpaces: (value) =>
                        !/\s/.test(value) ||
                        "Email address cannot contain spaces",
                      noSpecialCharsInDomain: (value) => {
                        const domain = value.split("@")[1];
                        return (
                          /^[A-Za-z0-9.-]+$/.test(domain) ||
                          "Invalid characters in the domain portion of the email"
                        );
                      },
                    },
                  })}
                />
                {errors.email && (
                  <p className={styles.errMsg}>{errors.email.message}</p>
                )}
              </div>

              <div className="w-[30%] md:w-1/3 lg:w-1/4 text-center">
                <button
                  className={clsx([
                    styles.signUpBtn,
                    "w-full md:w-full py-1 lg:h-10",
                  ])}
                  type="submit"
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </form>
        </div>
      )}  
      <Toaster position="bottom-right" />
    </div>
  );
}
