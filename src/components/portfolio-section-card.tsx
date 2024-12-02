import type { PortfolioSectionCardProps } from "../types/experience.type";
import React, { useRef, useState } from "react";
function PortfolioSectionCard({
  title,
  date,
  description,
  stacks,
  placeOfWork,
}: PortfolioSectionCardProps) {
  // const [expanded, setExpanded] = useState(false);
  const boxWrapper = useRef(null);
  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
  const handleMouemove = ({
    currentTarget,
    clientX,
    clientY,
  }: {
    currentTarget: any;
    clientX: any;
    clientY: any;
  }) => {
    let { left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setOverlayColor({ x, y });
  };

  return (
    // <Spotlight>
    //   <SpotLightItem>
    <>
    <div
    onMouseMove={handleMouemove}
    ref={boxWrapper}
    className={`group relative rounded-xl cursor-pointer bg-black  w-full  overflow-hidden w mx-auto`}
    >
    <div
    className="pointer-events-none !cursor-pointer absolute opacity-0 z-50  rounded-lg lg:rounded-xl w-full h-full group-hover:opacity-100  transition duration-300 "
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
    <div className="flex flex-col md:flex-row justify-between  flex-rsow  md:h-[18rem] w-full sm:w-[40rem] md:w-[45rem] p-8 ">
          {/* <div className="px-10 !cursor-pointer bg-black w-[] md:w-[50rem] text-gray-50 flex justify-center lg:px-20  items-cen/ter flex-col lg:flex-row  md:gap-x-8 py-8 overflow-hidden"> */}
          {/* <div> */}
    <h3 className="text-gray-500 mb-3 w-fit s:w-[20rem]  text-right ">
    {date}
    </h3>

    <main className="w-masx  mx-aauto">
    <div className="text-left">
    <h3 className="font-semibold text-xl text-gray-100 ">{title}</h3>
    <h3 className="font-normal mt-2 text-gray-300 text uppercase ">
    {placeOfWork}
    </h3>
    </div>
    <p className="text-gray-500 !cursor-pointer text-sm capitalize my-2">
              {/* {description} */}
    <ol className="list-disc space-y-2">
    {description?.map((value) => (
      <li>{value}</li>
      ))}
    </ol>
    </p>
    <footer className="flex items-center mt-3 md:mt-5 gap-x-3">
    {stacks?.map((stack) => (
      <div className="bg-white px-3 text-xs text-gray-900 rounded-2xl p-1 font-medium  ">
      {stack}
      </div>
      ))}
    </footer>
    </main>
    </div>
    </div>
    </>
    );
}

export default PortfolioSectionCard;
