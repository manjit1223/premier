"use client";

import React, { useState, useEffect, useCallback } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = useCallback(() => {
    const targetDateLocal = new Date(targetDate);
    const now = new Date();
    const difference = targetDateLocal - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  }, [targetDate]);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
  }, [calculateTimeLeft]);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted, calculateTimeLeft]);

  if (!mounted) return null; 

  const renderDigits = (value) => {
    return value.split("").map((digit, index) => (
      <div
        key={index}
        className="bg-[#e7a809] text-black rounded-md w-10 h-14 flex justify-center items-center text-4xl font-bold mx-0.5"
      >
        {digit}
      </div>
    ));
  };

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div key={interval} className="flex flex-col items-center mx-2">
      <div className="flex">{renderDigits(timeLeft[interval])}</div>
      <span className="text-lg font-medium mt-2">
        {interval.charAt(0).toUpperCase() + interval.slice(1)}
      </span>
    </div>
  ));

  return (
    <div className="text-center py-6 px-4 rounded-md shadow-[0_20px_90px_rgba(8,_112,_184,_0.7)] shadow-[#9747FF52] w-full max-w-xl mx-auto mt-4">
      <div className="md:flex justify-center items-center md:space-x-4">
        {Object.values(timeLeft).some((value) => value !== "00") ? (
          timerComponents
        ) : (
          <span className="text-xl text-white">Time's up!</span>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
