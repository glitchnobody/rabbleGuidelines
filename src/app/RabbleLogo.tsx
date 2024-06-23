"use client";
import React, { useState, useEffect, useRef } from "react";
import { useToSvg, useToPng } from "@hugocxl/react-to-image";

export default function RabbleLogo() {
  const [size, setSize] = useState(500);
  const [foreground, setForeground] = useState("#08F7AF");
  const [background, setBackground] = useState("#151320");

  const [state, convert] = useToPng<HTMLDivElement>({
    selector: "#rabbleLogo",
    quality: 1,
    width: size,
    height: size,
    onSuccess: (data) => {
      const link = document.createElement("a");
      link.download = `RabbleMotif_${size}px.png`;
      link.href = data;
      link.click();
    },
  });

  const svgData = `
  <svg width="${size}" height="${size}"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="500" height="500" fill="${background}" />
            <path
              opacity="0.25"
              d="M378.173 243.915L275.16 119.599C263.426 105.444 240.585 110.514 235.971 128.342L206.722 241.124C204.073 251.349 208.886 262.057 218.313 266.87L272.91 294.724C277.495 297.059 282.764 297.771 287.805 296.718L365.471 280.398C382.075 276.895 389.024 257.016 378.202 243.944L378.173 243.915Z"
              fill="#8C8A93"
            />
            <path
              opacity="0.25"
              d="M399.05 303.696L402.382 332.632C402.894 337.103 401.442 341.603 398.423 344.935L331.893 418.129C322.865 428.069 306.318 422.743 304.808 409.386L297.66 347.014C296.948 340.777 300.024 334.711 305.492 331.635L375.838 291.876C385.578 286.38 397.796 292.588 399.05 303.696Z"
              fill="#8C8A93"
            />
            <path
              d="M428.384 218.454L317.624 84.796C305.007 69.5591 280.457 75.0273 275.473 94.1945L244.031 215.464C241.183 226.457 246.366 237.992 256.477 243.146L315.175 273.108C320.102 275.614 325.77 276.383 331.181 275.244L414.685 257.7C432.542 253.941 440.004 232.552 428.356 218.511L428.384 218.454Z"
             fill="${foreground}"
            />
            <path
              d="M441.684 286.75L445.273 318.021C445.814 322.863 444.276 327.705 441.001 331.293L369.145 410.354C359.376 421.091 341.519 415.338 339.867 400.927L332.149 333.571C331.38 326.822 334.712 320.271 340.608 316.939L416.593 273.991C427.131 268.038 440.289 274.76 441.684 286.778V286.75Z"
             fill="${foreground}"
            />
          </svg>
  `;
  const encodedSvgData = encodeURIComponent(svgData);
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodedSvgData}`;

  return (
    <div className=" w-full h-full">
      <div className=" p-4">
        <div className=" h-48 overflow-hidden rounded-md aspect-square">
          <svg
            id="rabbleLogo"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="500" height="500" fill={background} />
            <path
              opacity="0.25"
              d="M378.173 243.915L275.16 119.599C263.426 105.444 240.585 110.514 235.971 128.342L206.722 241.124C204.073 251.349 208.886 262.057 218.313 266.87L272.91 294.724C277.495 297.059 282.764 297.771 287.805 296.718L365.471 280.398C382.075 276.895 389.024 257.016 378.202 243.944L378.173 243.915Z"
              fill="#8C8A93"
            />
            <path
              opacity="0.25"
              d="M399.05 303.696L402.382 332.632C402.894 337.103 401.442 341.603 398.423 344.935L331.893 418.129C322.865 428.069 306.318 422.743 304.808 409.386L297.66 347.014C296.948 340.777 300.024 334.711 305.492 331.635L375.838 291.876C385.578 286.38 397.796 292.588 399.05 303.696Z"
              fill="#8C8A93"
            />
            <path
              d="M428.384 218.454L317.624 84.796C305.007 69.5591 280.457 75.0273 275.473 94.1945L244.031 215.464C241.183 226.457 246.366 237.992 256.477 243.146L315.175 273.108C320.102 275.614 325.77 276.383 331.181 275.244L414.685 257.7C432.542 253.941 440.004 232.552 428.356 218.511L428.384 218.454Z"
              fill={`${foreground}`}
            />
            <path
              d="M441.684 286.75L445.273 318.021C445.814 322.863 444.276 327.705 441.001 331.293L369.145 410.354C359.376 421.091 341.519 415.338 339.867 400.927L332.149 333.571C331.38 326.822 334.712 320.271 340.608 316.939L416.593 273.991C427.131 268.038 440.289 274.76 441.684 286.778V286.75Z"
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
