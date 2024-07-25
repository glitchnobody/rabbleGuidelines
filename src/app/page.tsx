"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RabbleLogo from "./RabbleLogo";
import RabbleFull from "./RabbleFull";

export default function Home() {
  const [copy, setCopy] = useState(false);
  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false);
      }, 1000);
    }
  }, [copy]);

  const darkColors = [
    {
      color: "#FFFFFF",
    },
    {
      color: "#0C0E0D",
    },
    {
      color: "#8C8A93",
    },
    {
      color: "#08F7AF",
    },
    {
      color: "#FF8AEB",
    },
    {
      color: "#FFEF5C",
    },
    {
      color: "#8B33FF",
    },
    {
      color: "#171717",
    },
    {
      color: "#1D2422",
    },
    {
      color: "#3D1770",
    },
  ];

  const lightColors = [
    {
      color: "#0C0E0D",
    },
    {
      color: "#F0F0F0",
    },
    {
      color: "#8C8A93",
    },
    {
      color: "#21C896",
    },
    {
      color: "#DC15BA",
    },
    {
      color: "#FFEF5C",
    },
    {
      color: "#8B33FF",
    },
    {
      color: "#FFFFFF",
    },
    {
      color: "#E7E7E7",
    },
    {
      color: "#FFFFFF",
    },
  ];

  const socialColors = [
    {
      color: "#151320",
    },
  ];

  return (
    <main className="w-full px-2 m-auto ">
      {copy && (
        <div className="fixed bottom-5 right-5 bg-card-dark text-white p-2 rounded-md">
          Copied to clipboard
        </div>
      )}
      <section className=" max-w-screen-2xl mx-auto  border-l border-r border-muted-dark border-dotted relative h-[calc(100dvh-95px)] flex  flex-col justify-center gap-20 ">
        <div className=" relative z-10">
          <h1 className=" px-4   font-medium text-6xl  w-full  font-display text-primary-dark ">
            <span className=" font-bold text-accentTeal-dark">Rabble. </span>{" "}
            <br />
            Brand Guidelines
          </h1>
          <hr className=" mt-4 border-dotted border-muted-dark" />
          <p className=" px-4 mt-4 text-xl font-light text-muted-dark">
            This is a guide to the Rabble branding.
          </p>
          <hr className=" mt-4 border-dotted border-muted-dark" />
        </div>
      </section>
      <div className=" max-w-screen-2xl  mx-auto  w-full border-dotted border border-muted-dark ">
        <div className=" relative z-10">
          <h2 className=" text-3xl w-fit font-display px-5 py-2 border-r   border-dotted border-muted-dark">
            Index
          </h2>
          <hr className=" border-dotted border-muted-dark" />
          <ul className=" flex gap-4 flex-wrap px-4   text-muted-dark ">
            <li className="  border-r py-2    border-dotted border-muted-dark pr-4 hover:text-accentPink-dark hover:underline">
              <Link href="#Logo">Logo</Link>
            </li>
            <li className="  border-r  py-2   border-dotted border-muted-dark pr-4 hover:text-accentPink-dark hover:underline">
              <Link href="#colors">Colors</Link>
            </li>
            <li className="  border-r  py-2   border-dotted border-muted-dark pr-4 hover:text-accentPink-dark hover:underline">
              <Link href="#Typography">Typography</Link>
            </li>
            <li className="  border-r  py-2   border-dotted border-muted-dark pr-4 hover:text-accentPink-dark hover:underline">
              <Link href="#Visual">Visual Elements</Link>
            </li>
          </ul>
        </div>
      </div>
      <section
        style={{
          alignItems: "start",
        }}
        id="Logo"
        className="  relative h-fit grid  grid-cols-[1fr,2fr] border-dotted border-muted-dark border max-w-screen-2xl m-auto"
      >
        <div className=" sticky mt-10 top-10  ">
          <h2 className=" px-4 font-medium text-3xl  w-full font-display text-primary-dark ">
            Logo
          </h2>
          <hr className="  mt-4 border-dotted border-muted-dark" />
          <p className=" px-4  w-full pt-5  font-light text-muted-dark">
            logo are of 2 types
          </p>

          <ul className=" px-4  w-full pt-5 text-sm  font-light text-muted-dark list-disc ml-8">
            <li>Rabble. text for navbar/footer on ui & posts</li>
            <li>Motif Butterfly for everything else</li>
          </ul>

          <br />
          <br />
          <p className=" px-4  w-full pt-5  font-light text-muted-dark">
            The logo aspect ratios are fixed you can configure the height to get
            any size you want
          </p>
          <hr className=" mt-4 border-dotted border-muted-dark" />
        </div>

        <div className=" pt-10 w-full overflow-hidden border-l border-dotted border-muted-dark">
          <h3 className="px-4  text-3xl font-medium font-display ">
            Rabble. Logo
          </h3>
          <hr className="  mt-4 border-dotted border-muted-dark" />
          <RabbleFull />
          <hr className="  border-dotted border-muted-dark" />
          <h3 className="px-4 mt-10  text-3xl font-medium font-display ">
            Motif Butterfly Logo
          </h3>
          <hr className="  mt-4 border-dotted border-muted-dark" />
          <RabbleLogo />
        </div>
      </section>

      <section
        style={{
          alignItems: "start",
        }}
        id="colors"
        className="  relative h-fit grid  grid-cols-[1fr,2fr] border-dotted border-muted-dark border max-w-screen-2xl m-auto"
      >
        <div className=" sticky mt-10 top-10  ">
          <h2 className=" px-4 font-medium text-3xl  w-full font-display text-primary-dark ">
            Colors
          </h2>
          <hr className="  mt-4 border-dotted border-muted-dark" />
          <p className=" px-4  w-full pt-5  font-light text-muted-dark">
            Click on the color to copy the hex code
            <br />
            <br />
            By default the colors are in dark mode, the light mode colors are
            UI.
          </p>

          <hr className=" mt-4 border-dotted border-muted-dark" />
        </div>

        <div className=" pt-10 border-l border-dotted border-muted-dark">
          <h3 className="px-4  text-3xl font-medium font-display ">
            Dark Colors
          </h3>
          <hr className="  mt-4 border-dotted border-muted-dark" />
          <div className="p-4 pb-10 bg-secondary-dark  w-full flex gap-4 flex-wrap ">
            {darkColors.map((color, index) => (
              <div
                key={index}
                className=" cursor-pointer w-44  bg-card-dark text-primary-dark border-2 overflow-hidden border-white rounded-md mb-4"
                onClick={() => {
                  navigator.clipboard.writeText(color.color);
                  setCopy(true);
                }}
              >
                <div
                  className=" w-full aspect-square"
                  style={{ backgroundColor: color.color }}
                ></div>
                <hr className=" bg-white border-white border" />
                <div className=" text-md  p-2 my-1">{color.color}</div>
              </div>
            ))}
          </div>
          <hr className="  border-dotted border-muted-dark" />

          <h3 className="px-4 mt-10  text-3xl font-medium font-display ">
            Light Colors
          </h3>
          <hr className="  mt-4 border-dotted border-muted-dark" />
          <div className=" p-4  mb-20 bg-secondary-light/70  w-full flex gap-4 flex-wrap  ">
            {lightColors.map((color, index) => (
              <div
                key={index}
                className=" cursor-pointer w-44  bg-card-light text-primary-light border-2 overflow-hidden border-black rounded-md mb-4"
                onClick={() => {
                  navigator.clipboard.writeText(color.color);
                  setCopy(true);
                }}
              >
                <div
                  className=" w-full aspect-square"
                  style={{ backgroundColor: color.color }}
                ></div>
                <hr className=" bg-black border-black border" />
                <div className=" text-md  p-2 my-1">{color.color}</div>
              </div>
            ))}
          </div>
          <hr className="  border-dotted border-muted-dark" />
          <div className="px-4  justify-between flex items-center py-10">
            <h3 className=" text-3xl font-medium font-display ">
              Logo default background
            </h3>
            <div className=" flex gap-4 items-center ">
              <div
                onClick={() => {
                  navigator.clipboard.writeText("#151320");
                  setCopy(true);
                }}
                className=" cursor-pointer h-10 aspect-square  bg-logoBackground outline rounded-full"
              ></div>
              <span>#151320</span>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          alignItems: "start",
        }}
        id="Typography"
        className="  relative h-fit grid  grid-cols-[1fr,2fr] border-dotted border-muted-dark border max-w-screen-2xl m-auto"
      >
        <div className=" sticky mt-10 top-10  ">
          <h2 className=" px-4 font-medium text-3xl  w-full font-display text-primary-dark ">
            Typography
          </h2>
          <hr className="  mt-4 border-dotted border-muted-dark" />
          <p className=" px-4  w-full pt-5  font-light text-muted-dark">
            All fonts are available on google fonts
            <br />
            <br />
            Heading Font: Outfit
            <br />
            Body Font: Be Vietnam Pro
          </p>

          <hr className=" mt-4 border-dotted border-muted-dark" />
        </div>

        <div className=" pt-10 w-full overflow-hidden border-l border-dotted border-muted-dark">
          <h3 className="px-4  text-3xl font-medium font-display ">Heading</h3>
          <hr className="  mt-4 border-dotted border-muted-dark" />
          <div className="p-4 pb-10   font-display font-medium  w-full gap-4 ">
            <div className=" text-xl text-muted-dark">Outfit</div>
            <h4 className=" mt-2 text-5xl">
              The quick brown fox jumps over the lazy dog
            </h4>
            <Link
              href="https://fonts.google.com/specimen/Outfit"
              target="_blank"
            >
              <button className="btn mt-10 bg-white text-secondary-dark  font-display text-xl hover:bg-white/80">
                See font on google fonts
              </button>
            </Link>
          </div>
          <hr className="  border-dotted border-muted-dark" />
          <h3 className="px-4  text-3xl font-medium font-display mt-10 ">
            Body
          </h3>
          <hr className="  mt-4 border-dotted border-muted-dark" />
          <div className="p-4 pb-10  font-light  w-full gap-4 ">
            <div className=" text-xl text-muted-dark">Be Vietnam pro</div>
            <p className=" mt-2 text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              fugiat labore expedita ipsam corrupti nostrum, officia eaque
              molestias voluptas iure vel aliquid porro. Expedita nihil
              veritatis error officiis corrupti reprehenderit quidem dignissimos
              deserunt praesentium voluptas totam repellendus fugit neque magnam
              dolores nobis harum facilis obcaecati qui dolore molestias quaerat
              ab, enim quos. Enim, placeat explicabo. Nisi est sequi ipsum?
              Tempora!
            </p>
            <Link
              href="https://fonts.google.com/specimen/Be+Vietnam+Pro"
              target="_blank"
            >
              <button className="btn mt-10 bg-white text-secondary-dark  font-display text-xl hover:bg-white/80">
                See font on google fonts
              </button>
            </Link>
          </div>
          <hr className="  border-dotted border-muted-dark" />
          <h3 className="px-4  text-3xl font-medium font-display mt-10 ">
            CSS Embed Code
          </h3>
          <hr className="  mt-4 border-dotted border-muted-dark" />
          <div className="p-4 pb-10  font-light  w-full gap-4 ">
            <div className=" text-xl text-muted-dark">
              Be Vietnam pro + outfit
            </div>
            <p className=" mt-2 break-words overflow-hidden w-full   whitespace-normal ">
              {`  @import
              url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Outfit:wght@100..900&display=swap');`}
            </p>

            <button
              onClick={() => {
                navigator.clipboard.writeText(`  @import
                  url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Outfit:wght@100..900&display=swap');`);
                setCopy(true);
              }}
              className="btn mt-10 bg-white text-secondary-dark  font-display text-xl hover:bg-white/80"
            >
              copy to clipboard
            </button>
          </div>
        </div>
      </section>

      <section
        style={{
          alignItems: "start",
        }}
        id="Visual"
        className="  relative h-fit grid  grid-cols-[1fr,2fr] border-dotted border-muted-dark border max-w-screen-2xl m-auto"
      >
        {/* <div className=" sticky mt-10 top-10  ">
          <h2 className=" px-4 font-medium text-3xl  w-full font-display text-primary-dark ">
            Visual Elements
          </h2>
          <hr className="  mt-4 border-dotted border-muted-dark" />
          <p className=" px-4  w-full pt-5  font-light text-muted-dark">
            All elements should follow the following guidelines -
          </p>

          <ul className=" px-4  w-full pt-5 text-sm  font-light text-muted-dark list-disc ml-8">
            <li>No human hands or faces. </li>
            <li>Minimal singular objects.</li>
            <li>More solid colors than gradients.</li>
          </ul>
          <hr className=" mt-4 border-dotted border-muted-dark" />
        </div>

        <div className=" pt-10 w-full overflow-hidden border-l border-dotted border-muted-dark">
          <h3 className="px-4  text-3xl font-medium font-display ">
            Example Illustration
          </h3>
          <hr className="  mt-4 border-dotted border-muted-dark" />
          <div className="   font-display font-medium  w-full gap-4 ">
            <div className=" w-full aspect-square relative">
              <Image
                src="/exapleIllustrations.png"
                alt="illustration"
                fill
              ></Image>
            </div>
          </div>
          <hr className="  border-dotted border-muted-dark" />
          <h3 className="px-4 mt-10  text-3xl font-medium font-display ">
            Example Posts
          </h3>
          <hr className="  mt-4 border-dotted border-muted-dark" />
          <div className="   font-display font-medium  w-full gap-4 ">
            <div className=" w-full aspect-square relative">
              <Image
                src="/exapleIllustrations.png"
                alt="illustration"
                fill
              ></Image>
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
}
