import React from "react";
import PortfolioItem from "./PortfolioItem";

// TODO add CRM
export type PortfolioData = {
  name: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  disableImageScroll?: boolean;
};

export const portfolioData: PortfolioData[] = [
  {
    name: "F1 Manager UI",
    description:
      "As part of the Frontier UI team, I contributed to the development and implementation of the UI for F1 Manager 2022",
    tech: ["Coherent Gameface", "SASS", "UE4"],
    link: "https://www.f1manager.com/",
    image: "f1manager.jpg",
  },
  {
    name: "Farmiloe Instruments",
    description:
      "[IN DEVELOPMENT] Working with Farmiloe Instruments to produce their primary website for commerical services",
    tech: ["Next.js", "SASS"],
    link: "https://heisz.netlify.app/",
    image: "heisz.jpeg",
  },
  {
    name: "Grove Group",
    description:
      "Worked with Grove Group Electrical to produce their primary website for commerical services",
    tech: ["React", "SASS", "DecapCRM"],
    link: "https://edison-18de75.netlify.app/",
    image: "grove-electrical.jpeg",
  },
  {
    name: "101 Engineering",
    description:
      "Mock website for a generic engineering company. Professional design with a scalable layout for future work",
    tech: ["React", "SASS"],
    link: "https://leonardo-d4633.web.app/",
    image: "robot101engineering.jpeg",
  },
  {
    name: "Dota Meme Team",
    description:
      "Fan website for video game Dota 2. Generates different team ideas to play with friends",
    tech: ["React", "SASS"],
    link: "https://www.dotamemeteam.com/",
    image: "dotamemeteam.jpeg",
    disableImageScroll: true,
  },
];

export default function Portfolio() {
  return (
    <div
      id="portfolio"
      className=" w-full h-full flex flex-col justify-start items-center space-y-10 md:space-y-20 mt-[-170px]"
    >
      {portfolioData.map((p, index) => {
        return <PortfolioItem key={index} {...p} />;
      })}
    </div>
  );
}
