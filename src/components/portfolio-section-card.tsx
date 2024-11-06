import type { PortfolioSectionCardProps } from "../types/experience.type";
import React, { type MouseEvent, useRef, useState } from "react";
function PortfolioSectionCard({
  title,
  date,
  description,
  stacks,
}: PortfolioSectionCardProps) {
  // const [expanded, setExpanded] = useState(false);
  const boxWrapper = useRef(null);
  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
  const handleMouemove = ({ currentTarget, clientX, clientY }): MouseEvent => {
    let { left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setOverlayColor({ x, y });
  };

  return (
    // <Spotlight>
    //   <SpotLightItem>
    <>
      {/* <div className="px-10 rou cursor-pointer bg-black w-[50%] text-gray-50 flex justify-center lg:px-20  items-cen/ter flex-col md:flex-row  md:gap-x-8 py-10 md:py-12 overflow-hidden">
        <div>
          <h3 className="text-gray-500 mb-3 w-[40rem] text-right ">{date}</h3>
          <main className="w-masx mx-auto">
            <div className="text-left">
              <h3 className="font-semibold text-xl ">{title}</h3>
            </div>
            <p className="text-gray-500 my-2">{description}</p>
            <footer className="flex items-center gap-x-3">
              {stacks?.map((stack) => (
                <div className="bg-white px-2 text-gray-900 rounded-2xl p-1 font-medium text-sm ">
                  {stack}
                </div>
              ))}
            </footer>
          </main>
        </div> */}

      <div
        onMouseMove={handleMouemove}
        ref={boxWrapper}
        className={`group relative rounded-xl  bg-black   overflow-hidden w-fit mx-auto`}
      >
        <div
          className="pointer-events-none absolute opacity-0 z-50  rounded-lg w-full h-full group-hover:opacity-100  transition duration-300 "
          style={{
            background: `
            radial-gradient(
              250px circle at ${overlayColor.x}px ${overlayColor.y}px,
              rgba(255, 255, 255, 0.137),
              transparent 80%
              )
              `,
          }}
        />
        {/* <div className="relative z-10"> */}
        <div className="px-10 rou cursor-pointer bg-black w-[50rem] text-gray-50 flex justify-center lg:px-20  items-cen/ter flex-col md:flex-row  md:gap-x-8 py-8 overflow-hidden">
          {/* <div> */}
          <h3 className="text-gray-500 mb-3 w-[40rem] text-right ">{date}</h3>
          <main className="w-masx mx-auto">
            <div className="text-left">
              <h3 className="font-semibold text-xl ">{title}</h3>
            </div>
            <p className="text-gray-500 text-sm capitalize my-2">
              {description}
            </p>
            <footer className="flex items-center mt-3 md:mt-5 gap-x-3">
              {stacks?.map((stack) => (
                <div className="bg-white px-3 text-xs text-gray-900 rounded-2xl p-1 font-medium  ">
                  {stack}
                </div>
              ))}
            </footer>
          </main>
          {/* </div> */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default PortfolioSectionCard;
