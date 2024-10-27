import { useState } from "react";
import { FaTeamspeak } from "react-icons/fa";
import PortfolioSectionCard from "./portfolio-section-card";
import { experiences } from "../data/experiences.data";
import {
  SpotlightCard,
  SpotLightItem,
  Spotlight,
} from "./animated-components/spot-light-card";
function PortfolioSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="px-10 bg-black flex justify-center lg:px-20  items-cen/ter flex-col  py-10 md:py-12 overflow-hidden">
      <main>
        <div className="text-center">
          <h3 className="text-white text-3xl lg:text-4xl font-bold">
            My Proffessional Quests{" "}
          </h3>
          <p className="text-gray-400 mt-2 md:text-lg">
            From tackling tough challenges to celebrating big wins, my journey
            has been a rollercoaster ride.
            <br />
            Here’s a glimpse into my professional journey.
          </p>
        </div>

        {/* <Spotlight className="grid gap-2 grid-flow-col grid-cols-4">
          <SpotLightItem> */}
        <div className="flex justify-center space-y-8 mt-10 flex-col items-center">
          {experiences.map((experience) => (
            <PortfolioSectionCard
              key={experience.title}
              title={experience.title}
              description={experience.description}
              date={experience.date}
              stacks={experience.stacks}
            />
          ))}
        </div>

         <PortfolioSectionCard
            
            />
        {/* </SpotLightItem>
        </Spotlight> */}
        {/* <SpotlightCard className="h-[10rem]">dzdfsfd</SpotlightCard> */}
      </main>
    </div>
  );
}

export default PortfolioSection;
