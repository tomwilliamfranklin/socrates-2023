import React from "react";
import PortfolioItem from "./PortfolioItem";

// TODO add CRM
export type PortfolioData = {
  name: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
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
    name: "Grove Group",
    description:
      "Worked with Grove Group Electrical to produce their primary website for commecial services",
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
  },
];

export default function Portfolio() {
  return (
    <div className="space-y-20 w-full h-full flex flex-col justify-start items-center ">
      {portfolioData.map((p, index) => {
        return <PortfolioItem key={index} {...p} />;
      })}
    </div>
  );
}
