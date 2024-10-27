import { useState } from "react";
// import PersonalProjectCard from "./portfolio-section-card";
import { experiences } from "../data/experiences.data";
import PersonalProjectCard from "./personal-project-card";
function PersonalProject() {
  return (
    <div className="px-10 bg-white flex justify-center lg:px-20  items-cen/ter flex-col  py-10 md:py-12 overflow-hidden">
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

        <div className="flex justify-center mt-10 flex-col items-center">
          <PersonalProjectCard />
          {/* {experiences.map((experience) => (
          <PersonalProjectCard
          key={experience.title}
          title={experience.title}
          description={experience.description}
          date={experience.date}
          stacks={experience.stacks}
          />
        ))} */}
        </div>
      </main>
    </div>
  );
}

export default PersonalProject;
