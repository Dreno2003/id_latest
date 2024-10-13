import { useState } from "react";
import { FaTeamspeak } from "react-icons/fa";

function Hero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="px-10 flex justify-center lg:px-20  items-cen/ter flex-col h-[75vh] overflow-hidden">
      <main className="">
        <p className="text-lg md:text-xl font-medium mb-2">
          {/* salute start  */}
          Hi there, I'm Id!
        </p>

        <div>
          {/* line */}

          <p className="text-gray-900 text-4xl md:text-5xl lg:max-w-6xl xl:max-w-[86rem] xl:text-[5.8rem] lg:text-7xl font-bold">
            I'm , a Block Chain Developer living in Nigeria, and{" "}
            <span className="text-gray-500">
              I focus on making digital experiences that are easy to use.
            </span>
          </p>

          <p className="mt-2 md:text-lg lg:text-xl md:mt-3">
            I just get the <strong>hard</strong> stuff <strong>done</strong> to
            make you happi, and make money in the <strong>web3 space.</strong>
          </p>

          {/* <p className="mt-">I just get the hard stuff done to make you happi</p> */}
        </div>
      </main>
    </div>
  );
}

export default Hero;
