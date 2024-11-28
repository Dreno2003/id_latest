import type { PortfolioSectionCardProps } from "../types/experience.type";

export const experiences: PortfolioSectionCardProps[] = [
{
  placeOfWork: "Yamata (Worldwide)",
  title: "Senior Fullstack Engineer",
  date: "June 2023 - Now",
  description: [
    "Developing the backend infrastructure with NestJS",
    "Restful API implementation with ReactJS",
    ],

  stacks: ["NestJS", "ReactJs"],
},

// {
//   placeOfWork: "Fr0ntierX",
//   title: "Web 3  Fullstack Engineer",
//   date: "May 2022 - 2023",
//   description: [
//     "Writing Smart Contract with Solidity",
//     "Wallet Integration",
//     "Integration with 3rd-party APIs.",
//     "Research for problem’s solutions.",
//       // "Worked on marketplace",
//       // "Worked on Proof-of-attendance",
//       // "Building of Rest APIs",
//       // "Frontend Integrations",
//     ],
//   stacks: ["web3.js", "node.js"],
// },

{
  placeOfWork: "Inbillo",
  title: "Web 3  Fullstack Engineer",
  date: "June 2022 - 2023",
  description: [
    "Work on the backend API using NestJS",
    "Integration with 3rd-party APIs using XML and REST.",
    "Create and deploy Smart Contract with Solidity",
    "Interact with Smart Contract using ethers.js",
    ],
  stacks: ["ethers.JS", "Solidity", "NestJS"],
},

{
  placeOfWork: "Per Diem",
  title: "Full stack Developer",
  date: "June 2021 - 2022",
  description: [
    "Design Implementation from Figma",
    "Web design optimization for mobile devices.",
    "Developing features to enhance the user experience",
    "Building reusable code for future use.",
      // "Optimizing web pages for maximum speed and scalability.",
      // "Building Restful APIs",
    ],
  stacks: ["stella", "node.js"],
},
];
