"use client";
import React, { useEffect, useState } from "react";

import "../styles/clock.css";
const audio = new Audio("audio_file.mp3");
export default function Clock() {
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setRotation(position * 0.6);
    console.log(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="clock-container relative flex flex-col items-center justify-center h-fit">
      <div
        className="clock xl:w-[500px] xl:h-[500px] lg:w-[450px] lg:h-[450px] md:w-[400px] md:h-[400px] w-[350px] h-[350px] shadow-xl"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      ></div>
      <div className="absolute w-full">
        <div className="h-2 w-full flex flex-row justify-between px-6">
          <div className="w-10 h-[2px] bg-gradient-to-r from-[#db36a4] to-[#f7ff00]"></div>
          <div className="w-10 h-[2px] bg-gradient-to-r from-[#db36a4] to-[#f7ff00]"></div>
        </div>
        <div className="h-2 w-full flex flex-row justify-between px-6 rotate-90">
          <div className="w-10 h-[2px] bg-gradient-to-r from-[#db36a4] to-[#f7ff00]"></div>
          <div className="w-10 h-[2px] bg-gradient-to-l from-[#db36a4] to-[#f7ff00]"></div>
        </div>
        <div className="h-2 w-full flex flex-row justify-between px-6 rotate-45">
          <div className="w-10 h-[2px] bg-gradient-to-r from-[#db36a4] to-[#f7ff00]"></div>
          <div className="w-10 h-[2px] bg-gradient-to-l from-[#db36a4] to-[#f7ff00]"></div>
        </div>
        <div className="h-2 w-full flex flex-row justify-between px-6 -rotate-45">
          <div className="w-10 h-[2px] bg-gradient-to-r from-[#db36a4] to-[#f7ff00]"></div>
          <div className="w-10 h-[2px] bg-gradient-to-l from-[#db36a4] to-[#f7ff00]"></div>
        </div>
      </div>
    </div>
  );
}
