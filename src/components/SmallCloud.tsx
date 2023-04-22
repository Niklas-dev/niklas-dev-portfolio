import React from "react";

export default function SmallCloud({ classes }: { classes: string }) {
  return (
    <svg
      className={`${classes} -z-10 `}
      xmlns="http://www.w3.org/2000/svg"
      width={248}
      height={189}
      fill="none"
    >
      <g filter="url(#a)">
        <path
          fill="#2C2C2C"
          fillRule="evenodd"
          d="M165.587 29.202c-4.503 0-8.784.976-12.655 2.734C147.806 21.306 137.147 14 124.828 14c-10.307 0-19.452 5.115-25.167 13.012-6.016-3.867-13.125-6.102-20.742-6.102-21.645 0-39.191 18.047-39.191 40.308 0 4.442.698 8.715 1.988 12.711a36.493 36.493 0 0 0-1.764-.042C19.544 73.887 3 90.902 3 111.892c0 20.989 16.544 38.005 36.952 38.005 2.864 0 5.653-.335 8.33-.97.438 19.431 15.88 35.053 34.88 35.073 12.305.013 23.13-6.52 29.361-16.403 5.763 9.822 16.238 16.389 28.206 16.389 12.162 0 22.784-6.783 28.484-16.873a26.648 26.648 0 0 0 14.738 4.435c9.13 0 17.215-4.606 22.176-11.683a26.644 26.644 0 0 0 14.551 4.313c15.09 0 27.322-12.582 27.322-28.101 0-15.52-12.232-28.101-27.322-28.101-.359 0-.718.007-1.074.021.41-1.936.626-3.947.626-6.01 0-14.969-11.38-27.204-25.727-28.053a32.946 32.946 0 0 0 2.437-12.485c0-17.81-14.037-32.247-31.353-32.247Z"
          clipRule="evenodd"
        />
      </g>
      <g filter="url(#b)">
        <path
          fill="#2C2C2C"
          fillRule="evenodd"
          d="M115.198 36.112c16.706 0 30.425 13.157 31.895 29.945l.354-.002c17.687 0 32.025 14.747 32.025 32.938 0 17.519-13.299 31.844-30.08 32.878-5.684 9.176-15.665 15.262-27.027 15.262a31.183 31.183 0 0 1-15.157-3.916c-7.454 5.921-16.8 9.444-26.946 9.444-24.365 0-44.118-20.316-44.118-45.376s19.753-45.376 44.118-45.376c1.224 0 2.436.052 3.634.152 3.116-14.834 15.947-25.949 31.302-25.949Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <filter
          id="a"
          width={275}
          height={195}
          x={3}
          y={-11}
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
          <feBlend in2="shape" result="effect1_innerShadow_207_409" />
        </filter>
        <filter
          id="b"
          width={215.327}
          height={188.549}
          x={0.144}
          y={0.112}
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
          <feBlend in2="shape" result="effect1_innerShadow_207_409" />
          <feGaussianBlur
            result="effect2_foregroundBlur_207_409"
            stdDeviation={18}
          />
        </filter>
      </defs>
    </svg>
  );
}
