"use client";
import React from "react";

export default function BackUpButton() {
  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
      className="fixed back-to-fade bg-[#212121] shadow-xl rounded-lg h-14 w-14 md:h-16 md:w-16 z-10 flex justify-center items-center right-2 md:right-4  top-2 md:top-auto md:bottom-4"
      type="button"
      id="back-to-top"
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={41}
        height={41}
        fill="none"
      >
        <g clipPath="url(#a)">
          <path
            fill="url(#b)"
            d="M18.833 13.817v18.35c0 .916.75 1.666 1.667 1.666s1.667-.75 1.667-1.666v-18.35h2.983c.75 0 1.117-.9.583-1.417l-4.65-4.633a.856.856 0 0 0-1.183 0L15.25 12.4c-.533.517-.15 1.417.583 1.417h3Z"
          />
        </g>
        <defs>
          <linearGradient
            id="b"
            x1={20.494}
            x2={20.494}
            y1={48.682}
            y2={-4.46}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffffff" />
            <stop offset={1} stopColor="#ffffff" />
          </linearGradient>
          <clipPath id="a">
            <path fill="#fff" d="M.5 40.5V.5h40v40z" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
