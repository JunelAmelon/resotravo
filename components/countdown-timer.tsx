"use client";

import { useEffect, useState } from "react";
import { COUNTDOWN_DATE } from "@/lib/constants";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = COUNTDOWN_DATE - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <p className="text-base font-medium mb-4 text-resotravo-orange">
        L'offre se termine dans :
      </p>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="bg-resotravo-orange text-white font-koulen rounded-xl w-16 h-16 flex items-center justify-center text-2xl shadow-lg">
            {timeLeft.days}
          </div>
          <span className="text-xs mt-2 font-medium text-resotravo-orange">Jours</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-resotravo-orange text-white font-koulen rounded-xl w-16 h-16 flex items-center justify-center text-2xl shadow-lg">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <span className="text-xs mt-2 font-medium text-resotravo-orange">Heures</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-resotravo-orange text-white font-koulen rounded-xl w-16 h-16 flex items-center justify-center text-2xl shadow-lg">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <span className="text-xs mt-2 font-medium text-resotravo-orange">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-resotravo-orange text-white font-koulen rounded-xl w-16 h-16 flex items-center justify-center text-2xl shadow-lg">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <span className="text-xs mt-2 font-medium text-resotravo-orange">Secondes</span>
        </div>
      </div>
    </div>
  );
}