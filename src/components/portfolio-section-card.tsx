import { useState } from "react";
import type { PortfolioSectionCardProps } from "../types/experience.type";

function PortfolioSectionCard({
  title,
  date,
  description,
  stacks,
}: PortfolioSectionCardProps) {
  // const [expanded, setExpanded] = useState(false);

  return (
    <div className="px-10 cursor-pointer bg-black w-[50%] text-gray-50 flex justify-center lg:px-20  items-cen/ter flex-col md:flex-row  md:gap-x-8 py-10 md:py-12 overflow-hidden">
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
    </div>
  );
}

export default PortfolioSectionCard;
