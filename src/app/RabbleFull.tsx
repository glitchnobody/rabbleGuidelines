"use client";
import React, { useState, useEffect, useRef } from "react";
import { useToSvg, useToPng } from "@hugocxl/react-to-image";

export default function RabbleFull() {
  const [size, setSize] = useState(500);
  const [foreground, setForeground] = useState("#08F7AF");
  const [background, setBackground] = useState("#151320");

  const [state, convert] = useToPng<HTMLDivElement>({
    selector: "#rabbleLogoFull",
    quality: 1,
    width: (size * 1069) / 500,
    height: size,
    onSuccess: (data) => {
      const link = document.createElement("a");
      link.download = `RabbleMotif_${size}px.png`;
      link.href = data;
      link.click();
    },
  });

  const svgData = `
<svg
width="${(size * 1069) / 500}" height="${size}"
            id="rabbleLogoFull"
            viewBox="0 0 1069 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1069" height="500" fill="${background}" />
            <path
              d="M107 353.806V212.688H151.353V353.806H107ZM151.353 276.278L132.8 261.76C136.472 245.306 142.656 232.53 151.353 223.431C160.05 214.333 172.128 209.784 187.589 209.784C194.353 209.784 200.247 210.849 205.272 212.978C210.49 214.914 215.032 218.011 218.897 222.27L192.517 255.662C190.585 253.533 188.169 251.887 185.27 250.726C182.371 249.564 179.086 248.984 175.414 248.984C168.07 248.984 162.175 251.307 157.73 255.953C153.479 260.405 151.353 267.18 151.353 276.278Z"
              fill="${foreground}"
            />
            <path
              d="M274.001 356.71C261.052 356.71 249.457 353.516 239.214 347.128C229.165 340.74 221.144 332.029 215.153 320.995C209.356 309.961 206.457 297.378 206.457 283.247C206.457 269.116 209.356 256.533 215.153 245.499C221.144 234.465 229.165 225.754 239.214 219.366C249.457 212.978 261.052 209.784 274.001 209.784C283.47 209.784 291.974 211.623 299.511 215.301C307.241 218.979 313.522 224.109 318.354 230.691C323.185 237.079 325.891 244.435 326.471 252.758V313.735C325.891 322.059 323.185 329.512 318.354 336.094C313.715 342.482 307.531 347.515 299.801 351.193C292.07 354.871 283.47 356.71 274.001 356.71ZM282.987 316.639C292.457 316.639 300.091 313.542 305.888 307.347C311.686 300.959 314.585 292.926 314.585 283.247C314.585 276.665 313.232 270.858 310.527 265.825C308.014 260.792 304.342 256.92 299.511 254.21C294.873 251.307 289.461 249.855 283.277 249.855C277.093 249.855 271.585 251.307 266.753 254.21C262.115 256.92 258.347 260.792 255.448 265.825C252.742 270.858 251.389 276.665 251.389 283.247C251.389 289.635 252.742 295.346 255.448 300.379C258.153 305.412 261.922 309.38 266.753 312.284C271.585 315.187 276.996 316.639 282.987 316.639ZM312.846 353.806V315.768L319.513 281.505L312.846 247.242V212.688H356.329V353.806H312.846Z"
          fill="${foreground}"
            />
            <path
              d="M457.131 356.71C447.661 356.71 438.965 354.774 431.041 350.902C423.117 346.837 416.643 341.514 411.618 334.932C406.594 328.157 403.695 320.607 402.922 312.284V252.758C403.695 244.435 406.594 237.079 411.618 230.691C416.643 224.109 423.117 218.979 431.041 215.301C438.965 211.623 447.661 209.784 457.131 209.784C470.466 209.784 482.255 212.978 492.497 219.366C502.933 225.754 511.05 234.465 516.848 245.499C522.839 256.533 525.835 269.116 525.835 283.247C525.835 297.378 522.839 309.961 516.848 320.995C511.05 332.029 502.933 340.74 492.497 347.128C482.255 353.516 470.466 356.71 457.131 356.71ZM449.304 316.639C455.488 316.639 460.9 315.187 465.538 312.284C470.369 309.38 474.138 305.412 476.843 300.379C479.549 295.346 480.902 289.635 480.902 283.247C480.902 276.665 479.549 270.858 476.843 265.825C474.138 260.792 470.369 256.92 465.538 254.21C460.9 251.307 455.488 249.855 449.304 249.855C443.12 249.855 437.612 251.307 432.78 254.21C427.949 256.92 424.18 260.792 421.475 265.825C418.962 270.858 417.706 276.665 417.706 283.247C417.706 289.829 419.059 295.636 421.765 300.669C424.47 305.702 428.142 309.67 432.78 312.574C437.612 315.284 443.12 316.639 449.304 316.639ZM375.962 353.806V143H420.315V247.242L413.068 281.505L419.735 315.768V353.806H375.962Z"
              fill="${foreground}"
            />
            <path
              d="M617.94 356.71C608.47 356.71 599.773 354.774 591.85 350.902C583.926 346.837 577.452 341.514 572.427 334.932C567.403 328.157 564.504 320.607 563.731 312.284V252.758C564.504 244.435 567.403 237.079 572.427 230.691C577.452 224.109 583.926 218.979 591.85 215.301C599.773 211.623 608.47 209.784 617.94 209.784C631.275 209.784 643.064 212.978 653.306 219.366C663.742 225.754 671.859 234.465 677.657 245.499C683.648 256.533 686.643 269.116 686.643 283.247C686.643 297.378 683.648 309.961 677.657 320.995C671.859 332.029 663.742 340.74 653.306 347.128C643.064 353.516 631.275 356.71 617.94 356.71ZM610.113 316.639C616.297 316.639 621.708 315.187 626.347 312.284C631.178 309.38 634.947 305.412 637.652 300.379C640.358 295.346 641.711 289.635 641.711 283.247C641.711 276.665 640.358 270.858 637.652 265.825C634.947 260.792 631.178 256.92 626.347 254.21C621.708 251.307 616.297 249.855 610.113 249.855C603.929 249.855 598.421 251.307 593.589 254.21C588.758 256.92 584.989 260.792 582.284 265.825C579.771 270.858 578.515 276.665 578.515 283.247C578.515 289.829 579.868 295.636 582.573 300.669C585.279 305.702 588.951 309.67 593.589 312.574C598.421 315.284 603.929 316.639 610.113 316.639ZM536.771 353.806V143H581.124V247.242L573.877 281.505L580.544 315.768V353.806H536.771Z"
            fill="${foreground}"
            />
            <path
              d="M697.58 353.806V143H741.933V353.806H697.58Z"
               fill="${foreground}"
            />
            <path
              d="M831.144 357C815.876 357 802.252 353.903 790.269 347.708C778.481 341.32 769.204 332.512 762.44 321.285C755.676 310.057 752.294 297.378 752.294 283.247C752.294 269.116 755.58 256.533 762.15 245.499C768.914 234.272 777.998 225.464 789.4 219.076C800.802 212.688 813.654 209.494 827.955 209.494C841.87 209.494 854.142 212.494 864.771 218.495C875.4 224.496 883.71 232.82 889.701 243.467C895.885 254.114 898.978 266.309 898.978 280.053C898.978 282.569 898.784 285.28 898.398 288.183C898.205 290.893 897.721 294.087 896.948 297.765L775.485 298.056V267.567L878.106 267.277L858.973 280.053C858.78 271.923 857.524 265.244 855.205 260.018C852.885 254.597 849.407 250.532 844.768 247.822C840.324 244.919 834.816 243.467 828.245 243.467C821.288 243.467 815.2 245.112 809.982 248.403C804.957 251.5 800.995 255.953 798.096 261.76C795.391 267.567 794.038 274.633 794.038 282.957C794.038 291.28 795.487 298.443 798.386 304.444C801.479 310.251 805.73 314.8 811.141 318.091C816.746 321.188 823.317 322.737 830.854 322.737C837.811 322.737 844.092 321.575 849.697 319.252C855.301 316.736 860.229 313.058 864.481 308.218L888.832 332.609C881.874 340.739 873.467 346.837 863.611 350.902C853.755 354.967 842.933 357 831.144 357Z"
             fill="${foreground}"
            />
            <path
              d="M936.62 357C929.083 357 922.802 354.387 917.777 349.16C912.753 343.934 910.24 337.642 910.24 330.286C910.24 322.543 912.753 316.155 917.777 311.122C922.802 305.896 929.083 303.282 936.62 303.282C944.351 303.282 950.631 305.896 955.463 311.122C960.488 316.155 963 322.543 963 330.286C963 337.642 960.488 343.934 955.463 349.16C950.631 354.387 944.351 357 936.62 357Z"
           fill="${foreground}"
            />
          </svg>
  `;
  const encodedSvgData = encodeURIComponent(svgData);
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodedSvgData}`;

  return (
    <div className=" w-full h-full">
      <div className=" p-4">
        <div className=" h-48 overflow-hidden rounded-md aspect-[1069/500]">
          <svg
            id="rabbleLogoFull"
            viewBox="0 0 1069 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1069" height="500" fill={background} />
            <path
              d="M107 353.806V212.688H151.353V353.806H107ZM151.353 276.278L132.8 261.76C136.472 245.306 142.656 232.53 151.353 223.431C160.05 214.333 172.128 209.784 187.589 209.784C194.353 209.784 200.247 210.849 205.272 212.978C210.49 214.914 215.032 218.011 218.897 222.27L192.517 255.662C190.585 253.533 188.169 251.887 185.27 250.726C182.371 249.564 179.086 248.984 175.414 248.984C168.07 248.984 162.175 251.307 157.73 255.953C153.479 260.405 151.353 267.18 151.353 276.278Z"
              fill={`${foreground}`}
            />
            <path
              d="M274.001 356.71C261.052 356.71 249.457 353.516 239.214 347.128C229.165 340.74 221.144 332.029 215.153 320.995C209.356 309.961 206.457 297.378 206.457 283.247C206.457 269.116 209.356 256.533 215.153 245.499C221.144 234.465 229.165 225.754 239.214 219.366C249.457 212.978 261.052 209.784 274.001 209.784C283.47 209.784 291.974 211.623 299.511 215.301C307.241 218.979 313.522 224.109 318.354 230.691C323.185 237.079 325.891 244.435 326.471 252.758V313.735C325.891 322.059 323.185 329.512 318.354 336.094C313.715 342.482 307.531 347.515 299.801 351.193C292.07 354.871 283.47 356.71 274.001 356.71ZM282.987 316.639C292.457 316.639 300.091 313.542 305.888 307.347C311.686 300.959 314.585 292.926 314.585 283.247C314.585 276.665 313.232 270.858 310.527 265.825C308.014 260.792 304.342 256.92 299.511 254.21C294.873 251.307 289.461 249.855 283.277 249.855C277.093 249.855 271.585 251.307 266.753 254.21C262.115 256.92 258.347 260.792 255.448 265.825C252.742 270.858 251.389 276.665 251.389 283.247C251.389 289.635 252.742 295.346 255.448 300.379C258.153 305.412 261.922 309.38 266.753 312.284C271.585 315.187 276.996 316.639 282.987 316.639ZM312.846 353.806V315.768L319.513 281.505L312.846 247.242V212.688H356.329V353.806H312.846Z"
              fill={`${foreground}`}
            />
            <path
              d="M457.131 356.71C447.661 356.71 438.965 354.774 431.041 350.902C423.117 346.837 416.643 341.514 411.618 334.932C406.594 328.157 403.695 320.607 402.922 312.284V252.758C403.695 244.435 406.594 237.079 411.618 230.691C416.643 224.109 423.117 218.979 431.041 215.301C438.965 211.623 447.661 209.784 457.131 209.784C470.466 209.784 482.255 212.978 492.497 219.366C502.933 225.754 511.05 234.465 516.848 245.499C522.839 256.533 525.835 269.116 525.835 283.247C525.835 297.378 522.839 309.961 516.848 320.995C511.05 332.029 502.933 340.74 492.497 347.128C482.255 353.516 470.466 356.71 457.131 356.71ZM449.304 316.639C455.488 316.639 460.9 315.187 465.538 312.284C470.369 309.38 474.138 305.412 476.843 300.379C479.549 295.346 480.902 289.635 480.902 283.247C480.902 276.665 479.549 270.858 476.843 265.825C474.138 260.792 470.369 256.92 465.538 254.21C460.9 251.307 455.488 249.855 449.304 249.855C443.12 249.855 437.612 251.307 432.78 254.21C427.949 256.92 424.18 260.792 421.475 265.825C418.962 270.858 417.706 276.665 417.706 283.247C417.706 289.829 419.059 295.636 421.765 300.669C424.47 305.702 428.142 309.67 432.78 312.574C437.612 315.284 443.12 316.639 449.304 316.639ZM375.962 353.806V143H420.315V247.242L413.068 281.505L419.735 315.768V353.806H375.962Z"
              fill={`${foreground}`}
            />
            <path
              d="M617.94 356.71C608.47 356.71 599.773 354.774 591.85 350.902C583.926 346.837 577.452 341.514 572.427 334.932C567.403 328.157 564.504 320.607 563.731 312.284V252.758C564.504 244.435 567.403 237.079 572.427 230.691C577.452 224.109 583.926 218.979 591.85 215.301C599.773 211.623 608.47 209.784 617.94 209.784C631.275 209.784 643.064 212.978 653.306 219.366C663.742 225.754 671.859 234.465 677.657 245.499C683.648 256.533 686.643 269.116 686.643 283.247C686.643 297.378 683.648 309.961 677.657 320.995C671.859 332.029 663.742 340.74 653.306 347.128C643.064 353.516 631.275 356.71 617.94 356.71ZM610.113 316.639C616.297 316.639 621.708 315.187 626.347 312.284C631.178 309.38 634.947 305.412 637.652 300.379C640.358 295.346 641.711 289.635 641.711 283.247C641.711 276.665 640.358 270.858 637.652 265.825C634.947 260.792 631.178 256.92 626.347 254.21C621.708 251.307 616.297 249.855 610.113 249.855C603.929 249.855 598.421 251.307 593.589 254.21C588.758 256.92 584.989 260.792 582.284 265.825C579.771 270.858 578.515 276.665 578.515 283.247C578.515 289.829 579.868 295.636 582.573 300.669C585.279 305.702 588.951 309.67 593.589 312.574C598.421 315.284 603.929 316.639 610.113 316.639ZM536.771 353.806V143H581.124V247.242L573.877 281.505L580.544 315.768V353.806H536.771Z"
              fill={`${foreground}`}
            />
            <path
              d="M697.58 353.806V143H741.933V353.806H697.58Z"
              fill={`${foreground}`}
            />
            <path
              d="M831.144 357C815.876 357 802.252 353.903 790.269 347.708C778.481 341.32 769.204 332.512 762.44 321.285C755.676 310.057 752.294 297.378 752.294 283.247C752.294 269.116 755.58 256.533 762.15 245.499C768.914 234.272 777.998 225.464 789.4 219.076C800.802 212.688 813.654 209.494 827.955 209.494C841.87 209.494 854.142 212.494 864.771 218.495C875.4 224.496 883.71 232.82 889.701 243.467C895.885 254.114 898.978 266.309 898.978 280.053C898.978 282.569 898.784 285.28 898.398 288.183C898.205 290.893 897.721 294.087 896.948 297.765L775.485 298.056V267.567L878.106 267.277L858.973 280.053C858.78 271.923 857.524 265.244 855.205 260.018C852.885 254.597 849.407 250.532 844.768 247.822C840.324 244.919 834.816 243.467 828.245 243.467C821.288 243.467 815.2 245.112 809.982 248.403C804.957 251.5 800.995 255.953 798.096 261.76C795.391 267.567 794.038 274.633 794.038 282.957C794.038 291.28 795.487 298.443 798.386 304.444C801.479 310.251 805.73 314.8 811.141 318.091C816.746 321.188 823.317 322.737 830.854 322.737C837.811 322.737 844.092 321.575 849.697 319.252C855.301 316.736 860.229 313.058 864.481 308.218L888.832 332.609C881.874 340.739 873.467 346.837 863.611 350.902C853.755 354.967 842.933 357 831.144 357Z"
              fill={`${foreground}`}
            />
            <path
              d="M936.62 357C929.083 357 922.802 354.387 917.777 349.16C912.753 343.934 910.24 337.642 910.24 330.286C910.24 322.543 912.753 316.155 917.777 311.122C922.802 305.896 929.083 303.282 936.62 303.282C944.351 303.282 950.631 305.896 955.463 311.122C960.488 316.155 963 322.543 963 330.286C963 337.642 960.488 343.934 955.463 349.16C950.631 354.387 944.351 357 936.62 357Z"
              fill={`${foreground}`}
            />
          </svg>
        </div>
      </div>
      <hr className="  border-dotted border-muted-dark" />
      <div className=" p-4">
        <span className="  font-md font-light"> configure</span>
        <hr className=" my-3  border-dotted border-muted-dark" />
        <div className=" text-muted-dark  mb-1 ">Foreground Color</div>
        <div className=" flex gap-2">
          <div
            onClick={() => setForeground("#08F7AF")}
            className="cursor-pointer h-10 aspect-square bg-accentTeal-dark rounded-full border-2 border-muted-dark"
          />
          <div
            onClick={() => setForeground("#151320")}
            className="cursor-pointer h-10 aspect-square bg-secondary-dark rounded-full border-2 border-muted-dark"
          />
          <div
            onClick={() => setForeground("#ffffff")}
            className="cursor-pointer h-10 aspect-square bg-white rounded-full border-2 border-muted-dark"
          />
          <div
            onClick={() => setForeground("#000000")}
            className="cursor-pointer h-10 aspect-square bg-black rounded-full border-2 border-muted-dark"
          />
        </div>

        <hr className=" my-3  border-dotted border-muted-dark" />
        <div className=" text-muted-dark  mb-1 ">Foreground Color</div>
        <div className=" flex gap-2">
          <div
            onClick={() => setBackground("#08F7AF")}
            className=" cursor-pointer h-10 aspect-square bg-accentTeal-dark rounded-full border-2 border-muted-dark"
          />
          <div
            onClick={() => setBackground("#151320")}
            className="cursor-pointer h-10 aspect-square bg-secondary-dark rounded-full border-2 border-muted-dark"
          />
          <div
            onClick={() => setForeground("#ffffff")}
            className="cursor-pointer h-10 aspect-square bg-white rounded-full border-2 border-muted-dark"
          />
          <div
            onClick={() => setBackground("#000000")}
            className="cursor-pointer h-10 aspect-square bg-black rounded-full border-2 border-muted-dark"
          />
          <div
            onClick={() => setBackground("#00000000")}
            className="cursor-pointer h-10 aspect-square  bg-gradient-to-br from-white/20 to-white/60 rounded-full border-2 border-muted-dark"
          />
        </div>

        <hr className=" my-3  border-dotted border-muted-dark" />

        <div className=" text-muted-dark  mb-1 ">height</div>
        <input
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          type="number"
          className="input w-full  bg-[#121212]  input-sm  "
          placeholder="size"
        />
      </div>
      <hr className="  border-dotted border-muted-dark" />
      <hr className="  border-dotted border-muted-dark" />

      <button
        onClick={convert}
        className="btn  bg-white text-secondary-dark  font-display text-xl hover:bg-white/80"
      >
        Download as PNG
      </button>
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.download = `RabbleMotif_${size}px.svg`;
          link.href = dataUrl;
          link.click();
          URL.revokeObjectURL(link.href);
        }}
        className="btn  bg-white text-secondary-dark  font-display text-xl hover:bg-white/80"
      >
        Download as SVG
      </button>
    </div>
  );
}
