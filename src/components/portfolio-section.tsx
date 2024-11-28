import * as React from "react";
import PortfolioSectionCard from "./portfolio-section-card";
import { experiences } from "../data/experiences.data";
import { AnimatePresence, motion } from "framer-motion";
import {DownloadIcon} from './animated-components/download_btn.tsx'
import FadeinAnimation from "./animated-components/fadein-animation";
import {  useAnimation } from 'motion/react';

const PortfolioSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  const controls = useAnimation();

  return (
    <div
    id="folio"
    ref={ref}
    className="px-10 h bg-black flex justify-center lg:px-20  items-cen/ter flex-col  py-10 md:py-24 overflow-hidden"
    >
    <main>
    <div className="text-center mb-4">
    <motion.div
    variants={FadeinAnimation("up", 0.1)}
    initial="hidden"
    viewport={{ once: false, amount: 0.7 }}
    whileInView={"show"}
    >
    <h3 className="text-white text-3xl lg:text-4xl font-bold">
    My Proffessional Quests{" "}
    </h3>
    <p className="text-gray-400 mt-2 md:text-lg">
    From tackling tough challenges to celebrating big wins, my journey
    has been a rollercoaster ride.
    <br />
    Here’s a glimpse into my professional journey.
    </p>
    </motion.div>
    </div>

    <div className="flex justify-center *:cursor-pointer space-y-8 mt-10 flex-col items-center">
    {experiences.map((experience, index) => (
      <motion.div
      variants={FadeinAnimation("up", 0.21)}
      initial="hidden"
      viewport={{ once: true, amount: 0.5 }}
      whileHover={"show"}
      >
      <PortfolioSectionCard
      key={index}
      placeOfWork={experience.placeOfWork}
      title={experience.title}
      description={experience.description}
      date={experience.date}
      stacks={experience.stacks}
      />
      </motion.div>
      ))}
    </div>


    </main>
    <div className='flex justify-center  mt-32'>
    <button type='button' className="text-white  flex  items-center  hovers:bg-white hover:tesxt-black font-normal ease-in-out duration-200  !cursor-pointer border px-8 p-2 bg-black  rounded-full py-3">

  {/*  //     onMouseEnter={() => controls.start('animate')}
    // onMouseLeave={() => controls.start('normal')}*/}

    <DownloadIcon  
    controls={controls}
    onControlNormal ={() => controls.start('animate')}
    onControlAnimate ={() => controls.start('normal')}


    />
    <span>
    Download CV  
    </span>
    </button> 
    </div>
    </div>
    );
});

export default PortfolioSection;
