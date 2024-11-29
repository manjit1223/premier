"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import styles from "./section-news-subscription.module.scss";
import clsx from "clsx";

function SectionNewsSubscription() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/subscribe/new`;

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(API_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success(response.data.message);
      reset();
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(`Subscription failed: ${errorMessage}`);
    }
  };

  return (
    <div
      className="flex justify-center bg-center bg-cover"
      style={{
        backgroundImage:
          "url('/images/landing-page/section-news-subscription/background.png')",
      }}
    >
      <div className="w-full md:w-3/4 p-5">
        <p className="euphoria-script text-3xl lg:text-5xl golden-color">
          Premier newsletter
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row lg:items-end mt-4">
            <div className="flex items-end lg:w-1/3">
              <p className="abril-fatface md:text-3xl">NEWS SUBSCRIPTION</p>
            </div>
            <div className="flex flex-col md:flex-row items-end lg:w-2/3">
              <input
                type="email"
                placeholder="Enter your email"
                className={clsx([
                  styles.inputbox,
                  "border-b border-b-white bg-transparent text-white p-2 text-lg md:text-xl w-full lg:w-3/4 outline-none",
                ])}
                {...register("email", { required: true })}
                required
              />
              <button className="bg-[#D9D9D9] p-2 text-black lg:w-1/4 md:text-xl">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default SectionNewsSubscription;
