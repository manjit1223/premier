"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en";
import clsx from "clsx";
import styles from "./contactus.module.scss";
import { useForm } from "react-hook-form";
import axios from "axios";

const options = [
  { value: "blockchain", label: "Blockchain" },
  { value: "art", label: "Art" },
  { value: "vendor", label: "Vendor" },
  { value: "other", label: "Other" },
];

const checkboxValue = [
  { value: "email", label: "Email" },
  { value: "sms", label: "SMS" },
  { value: "call", label: "Phone Call" },
];

function ContactusForm() {
  const router = useRouter();
  const [isPhoneEnabled, setIsPhoneEnabled] = useState(false);
  const [country, setCountry] = useState("US");
  const [selectedInterest, setSelectedInterest] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const flag = searchParams.get("flag") || false;

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (formValue) => {
    setIsLoading(true);
    try {
      const currentDateTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        dateStyle: "full",
        timeStyle: "long",
      }).format(new Date());

      const data = {
        ...formValue,
        date: currentDateTime,
        requireInvitation: flag,
      };
      if (!isPhoneEnabled) {
        delete data.mobileNumber;
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contactus/new`,
        data,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        setIsLoading(false);
        throw new Error(response.data.message || "Something went wrong!");
      }
      reset();
      toast.success(`${response.data.message}`);
      setTimeout(() => {
        router.push("/latest-landing-page");
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      toast.error(`${error.response?.data?.message || error.message}`);
    }
  };

  useEffect(() => {
    setValue("countryCode", `+${getCountryCallingCode(country)}`);
  }, [country, setValue]);

  useEffect(() => {
    if (isPhoneEnabled) {
      setValue("mobileNumber", "", { shouldValidate: true });
      setValue("mobileNumber", getValues("mobileNumber"), {
        shouldValidate: true,
      });
    }
  }, [isPhoneEnabled, setValue, getValues]);

  const handleCheckboxChange = (value, checked) => {
    const currentPreferredContact = getValues("preferredContact") || [];
    const updatedPreferredContact = checked
      ? [...currentPreferredContact, value]
      : currentPreferredContact.filter((method) => method !== value);

    setValue("preferredContact", updatedPreferredContact);

    setIsPhoneEnabled(
      updatedPreferredContact.includes("sms") ||
        updatedPreferredContact.includes("call")
    );
  };

  return (
    <div className="flex items-center justify-center px-4 w-full pt-20 lg:pt-48 md:py-40 lg:py-0">
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-[1078px] p-2 sm:p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 flex flex-col items-center mt-2 relative"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="w-full">
              <input
                type="text"
                placeholder="First Name *"
                className={clsx([
                  styles.inputbox,
                  "p-2 text-white bg-transparent border border-white rounded-xl w-full gill-sans",
                ])}
                {...register("firstName", {
                  required: "This field is required",
                  minLength: {
                    value: 2,
                    message: "Must be at least 2 characters for the first name",
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
            <div className="w-full">
              <input
                type="text"
                placeholder="Last Name *"
                className={clsx([
                  styles.inputbox,
                  "p-2 text-white bg-transparent border border-white rounded-xl w-full gill-sans",
                ])}
                {...register("lastName", {
                  required: "This field is required",
                  minLength: {
                    value: 1,
                    message: "Must be at least 1 characters for the last name",
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

          <div className="w-full">
            <label className="text-white text-xl gill-sans">Preferred Method of Contact *</label>
            <div className="mt-2 flex flex-col gap-2">
              {checkboxValue.map((method) => (
                <div key={method.value} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={method.value}
                    {...register("preferredContact", {
                      validate: {
                        atLeastOne: (value) =>
                          value.length > 0 ||
                          "Please select at least one option",
                      },
                    })}
                    onChange={(e) =>
                      handleCheckboxChange(method.value, e.target.checked)
                    }
                  />
                  <label className="text-white text-lg gill-sans">{method.label}</label>
                </div>
              ))}
            </div>
            {errors.preferredContact && (
              <p className={styles.errMsg}>{errors.preferredContact.message}</p>
            )}
          </div>

          {isPhoneEnabled && (
            <div className="w-full">
              <div className="flex gap-4">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className={clsx([
                    styles.inputbox,
                    "text-white bg-[#3E3C3C] rounded-xl border border-white w-1/3 gill-sans",
                  ])}
                >
                  <option value="">Select Country Code</option>
                  {getCountries().map((code) => (
                    <option key={code} value={code}>
                      {en[code]} +{getCountryCallingCode(code)}
                    </option>
                  ))}
                </select>
                <div className="w-full">
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    className={clsx([
                      styles.inputbox,
                      "p-2 text-white bg-transparent border border-white rounded-xl w-full gill-sans",
                    ])}
                    {...register("mobileNumber", {
                      required: "Mobile number is required",
                      maxLength: {
                        value: 17,
                        message: "Mobile number cannot exceed 17 digits",
                      },
                    })}
                    inputMode="numeric"
                    maxLength={17}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                  />
                </div>
              </div>
              {errors.mobileNumber && (
                <p className={`${styles.errMsg} w-full`}>
                  {errors.mobileNumber.message}
                </p>
              )}
            </div>
          )}
          <div className="w-full">
            <input
              type="email"
              placeholder="Email *"
              className={clsx([
                styles.inputbox,
                "p-2 text-white bg-transparent border border-white rounded-xl w-full gill-sans",
              ])}
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
                    !/\s/.test(value) || "Email address cannot contain spaces",
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
          <div className="w-full">
            <select
              {...register("interest", { required: "Interest is required" })}
              onChange={(e) => setSelectedInterest(e.target.value)}
              className="text-white bg-[#3E3C3C] rounded-xl border border-white w-full h-11 gill-sans"
            >
              <option value="">Select Interests *</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.interest && (
              <p className={styles.errMsg}>{errors.interest.message}</p>
            )}
          </div>
          <div className="w-full">
            {selectedInterest === "other" && (
              <input
                type="text"
                placeholder="Other Interest *"
                className={clsx([
                  styles.inputbox,
                  "p-2 text-white bg-transparent border border-white rounded-xl w-full gill-sans",
                ])}
                {...register("otherInterest", {
                  required:
                    "Please enter details if you selected 'Other' as your interest",
                })}
              />
            )}
            {errors.otherInterest && (
              <p className={styles.errMsg}>{errors.otherInterest.message}</p>
            )}
          </div>
          <textarea
            placeholder="Comment"
            className="p-2 text-white bg-transparent border border-white rounded-xl w-full gill-sans"
            {...register("comment")}
          />
          <div className="w-full flex items-center justify-center pt-4">
            <button
              type="submit"
              className={clsx([
                "w-full sm:w-1/2 lg:w-1/5 py-2 text-black rounded-lg focus:outline-none text-lg gill-sans",
                styles.gradientButton,
                isLoading && "opacity-50 cursor-not-allowed",
              ])}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default ContactusForm;
