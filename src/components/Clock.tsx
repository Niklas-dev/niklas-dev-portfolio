"use client";
import React, { useEffect, useState } from "react";

import "../styles/clock.css";

export default function Clock() {
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setRotation(position * 0.5);
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
        className="clock "
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      ></div>
      <div className="absolute w-full">
        <div className="h-2 w-full flex flex-row justify-between px-6">
          <div className="w-10 h-[2px] bg-sectxtcolor"></div>
          <div className="w-10 h-[2px] bg-sectxtcolor"></div>
        </div>
        <div className="h-2 w-full flex flex-row justify-between px-6 rotate-90">
          <div className="w-10 h-[2px] bg-sectxtcolor"></div>
          <div className="w-10 h-[2px] bg-sectxtcolor"></div>
        </div>
        <div className="h-2 w-full flex flex-row justify-between px-6 rotate-45">
          <div className="w-10 h-[2px] bg-sectxtcolor"></div>
          <div className="w-10 h-[2px] bg-sectxtcolor"></div>
        </div>
        <div className="h-2 w-full flex flex-row justify-between px-6 -rotate-45">
          <div className="w-10 h-[2px] bg-sectxtcolor"></div>
          <div className="w-10 h-[2px] bg-sectxtcolor"></div>
        </div>
      </div>
    </div>
  );
}
