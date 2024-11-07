import * as React from "react";
import PortfolioSectionCard from "./portfolio-section-card";
import { experiences } from "../data/experiences.data";
import { AnimatePresence, motion } from "framer-motion";
import FadeinAnimation from "./animated-components/fadein-animation";

const PortfolioSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      id="folio"
      ref={ref}
      className="px-10 h bg-black flex justify-center lg:px-20  items-cen/ter flex-col  py-10 md:py-12 overflow-hidden"
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

        {/* <Spotlight className="grid gap-2 grid-flow-col grid-cols-4">
        <SpotLightItem> */}
        <div className="flex justify-center space-y-8 mt-10 flex-col items-center">
          {experiences.map((experience, index) => (
            // <motion.div
            //   variants={FadeinAnimation("up", 0.21)}
            //   initial="hidden"
            //   viewport={{ once: false, amount: 0.5 }}
            //   whileHover={"show"}
            // >
            <PortfolioSectionCard
              key={index}
              title={experience.title}
              description={experience.description}
              date={experience.date}
              stacks={experience.stacks}
            />
            // </motion.div>
          ))}
        </div>

        <PortfolioSectionCard />
        {/* </SpotLightItem>
      </Spotlight> */}
        {/* <SpotlightCard className="h-[10rem]">dzdfsfd</SpotlightCard> */}
      </main>
    </div>
  );
});

export default PortfolioSection;
