import React from "react";

export default function TinyCloud({ className }: { className: string }) {
  return (
    <svg
      className={`${className} -z-10 drop-shadow-xl`}
      xmlns="http://www.w3.org/2000/svg"
      width={153}
      height={136}
      fill="none"
    >
      <g filter="url(#a)">
        <path
          fill="#2C2C2C"
          fillRule="evenodd"
          d="M107.589 32.316c-2.482 0-4.841.534-6.973 1.496C97.791 27.997 91.918 24 85.13 24c-5.68 0-10.719 2.798-13.868 7.118a21.167 21.167 0 0 0-11.43-3.338c-11.926 0-21.594 9.873-21.594 22.051 0 2.43.385 4.768 1.095 6.954a20.23 20.23 0 0 0-.972-.023C27.116 56.762 18 66.07 18 77.552c0 11.483 9.116 20.792 20.361 20.792 1.579 0 3.115-.184 4.59-.531.241 10.63 8.75 19.176 19.22 19.187 6.78.007 12.745-3.567 16.178-8.973 3.176 5.373 8.948 8.965 15.542 8.965 6.702 0 12.555-3.711 15.696-9.23a14.756 14.756 0 0 0 8.12 2.426c5.032 0 9.486-2.52 12.22-6.391a14.764 14.764 0 0 0 8.018 2.359c8.315 0 15.055-6.883 15.055-15.373 0-8.49-6.74-15.373-15.055-15.373-.198 0-.395.004-.592.012.226-1.06.345-2.16.345-3.288 0-8.189-6.27-14.882-14.176-15.347a17.902 17.902 0 0 0 1.343-6.83c0-9.742-7.735-17.64-17.276-17.64Z"
          clipRule="evenodd"
        />
      </g>
      <g filter="url(#b)">
        <path
          fill="#2C2C2C"
          fillRule="evenodd"
          d="M79.824 36.097c9.205 0 16.764 7.197 17.574 16.381h.195c9.746 0 17.647 8.067 17.647 18.018 0 9.584-7.328 17.42-16.575 17.986-3.132 5.02-8.632 8.35-14.893 8.35a17.28 17.28 0 0 1-8.352-2.142c-4.106 3.239-9.256 5.166-14.847 5.166-13.426 0-24.31-11.114-24.31-24.823 0-13.71 10.884-24.824 24.31-24.824.674 0 1.342.028 2.002.083 1.717-8.115 8.788-14.195 17.249-14.195Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <filter
          id="a"
          width={165}
          height={118}
          x={18}
          y={-1}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={30} dy={-25} />
          <feGaussianBlur stdDeviation={15.5} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.116667 0 0 0 0 0.116667 0 0 0 0 0.116667 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_218_179" />
        </filter>
        <filter
          id="b"
          width={150.976}
          height={135.759}
          x={0.263}
          y={0.097}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={30} dy={-25} />
          <feGaussianBlur stdDeviation={30} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.0833333 0 0 0 0 0.0833333 0 0 0 0 0.0833333 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_218_179" />
          <feGaussianBlur
            result="effect2_foregroundBlur_218_179"
            stdDeviation={18}
          />
        </filter>
      </defs>
    </svg>
  );
}
