"use client";

import { useEffect, useState } from "react";

interface CountDownProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const [timerActive, setTimerActive] = useState(false);
  const [countDown, setCountDown] = useState<CountDownProps>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (timerActive) {
      intervalId = setInterval(() => {
        setCountDown((countDown) => {
          const { hours, minutes, seconds } = countDown;

          if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(intervalId!);
            setTimerActive(false);
            return countDown;
          }

          if (minutes === 0 && seconds === 0) {
            return { hours: hours - 1, minutes: 59, seconds: 59 };
          }

          if (seconds === 0) {
            return { hours, minutes: minutes - 1, seconds: 59 };
          }

          if (seconds > 60) {
            return { hours, minutes: minutes + 1, seconds: seconds - 59 };
          }

          if (minutes > 60) {
            return { hours: hours + 1, minutes: minutes - 59, seconds };
          }

          return { hours, minutes, seconds: seconds - 1 };
        });
      }, 1000);
    }

    return () => clearInterval(intervalId!);
  }, [timerActive]);

  const handleCountDownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCountDown((prevState) => ({
      ...prevState,
      [name]: +value,
    }));
  };

  const startCountDown = () => {
    setTimerActive(true);
  };

  const stopCountDown = () => {
    setTimerActive(false);
  };

  const resetCountDown = () => {
    setCountDown({ hours: 0, minutes: 0, seconds: 0 });
    setTimerActive(false);
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen ">
      <div className="">
        <div className="flex items-center text-center gap-8">
          <div className="">
            <input
              name="hours"
              value={countDown.hours === 0 ? "" : countDown.hours}
              onChange={handleCountDownChange}
              className="mb-6 py-2 rounded-lg h-16 text-2xl w-28 border border-slate-400 px-4 text-center"
              type="number"
            />
            <p className="text-xl font-medium">Hour</p>
          </div>
          <div className="">
            <input
              name="minutes"
              value={countDown.minutes === 0 ? "" : countDown.minutes}
              onChange={handleCountDownChange}
              className="mb-6 py-2 rounded-lg h-16 text-2xl w-28 border border-slate-400 px-4 text-center"
              type="number"
            />
            <p className="text-xl font-medium">Minute</p>
          </div>
          <div className="">
            <input
              name="seconds"
              value={countDown.seconds === 0 ? "" : countDown.seconds}
              onChange={handleCountDownChange}
              className="mb-6 py-2 rounded-lg h-16 text-2xl w-28 border border-slate-400 px-4 text-center"
              type="number"
            />
            <p className="text-xl font-medium">Second</p>
          </div>
        </div>
        <div className="flex item-center justify-center gap-8 mt-8">
          <button
            className="px-4 py-3 text-xl text-white font-medium bg-green-500 rounded-xl"
            onClick={startCountDown}
          >
            Start
          </button>
          <button
            className="px-4 py-3 text-xl text-white font-medium bg-yellow-500 rounded-xl"
            onClick={stopCountDown}
          >
            Stop
          </button>
          <button
            className="px-4 py-3 text-xl text-white font-medium bg-red-500 rounded-xl"
            onClick={resetCountDown}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
