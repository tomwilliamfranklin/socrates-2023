import React from "react";
import PortfolioItem from "./PortfolioItem";

// TODO add CRM
export type PortfolioData = {
  name: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  workplace: string;
  disableImageScroll?: boolean;
};

export const portfolioData: PortfolioData[] = [
  {
    name: "Unannounced Title",
    description: `I am currently working at Frontier, focusing on UI development for an undisclosed project. 
       <br/> 
       <br/> 
       In my role, I am part of establishing the UI codebase, constructing components, developing early features, prototyping UI design ideas.`,
    tech: ["UI/UX Development", "Prototyping"],
    link: "https://www.frontier.co.uk/",
    image: "mysterygame3.png",
    workplace: "Frontier Developments",
    disableImageScroll: true,
  },
  {
    name: "F1 Manager UI",
    description:
      "I was a part of the UI development since the very early stages, with responsiblity over multiple large-scale UI features, and the UI localization.",
    tech: ["UI/UX Development", "Coherent Gameface", "SASS", "UE4"],
    link: "https://www.f1manager.com/",
    workplace: "Frontier Developments",
    image: "f1manager.jpg",
  },
  {
    name: "Farmiloe Instruments",
    description:
      "Working with Farmiloe Instruments to produce their primary website for commerical services. With CRM for easy data entry. <br/> <br/> Currently in the process of data entry by their team.",
    tech: ["React", "SASS", "UI Design", "DecapCRM"],
    link: "https://heisz.netlify.app/",
    workplace: "Independent Project",
    image: "heisz.jpeg",
  },
  {
    name: "Grove Group",
    description:
      "Worked with Grove Group Electrical to produce their primary website for commerical services. With CRM for easy data entry by their team. <br/> <br/> Currently in the process of data entry by their team.",
    tech: ["React", "SASS", "UI Design", "DecapCRM"],
    link: "https://edison-18de75.netlify.app/",
    workplace: "Independent Project",
    image: "grove-electrical.jpeg",
  },
  {
    name: "101 Engineering",
    description:
      "Mock website demonstrating capabilities in React, for a generic engineering company. <br/> <br/> Professional design with a scalable layout for future work.",
    tech: ["React", "SASS"],
    link: "https://leonardo-d4633.web.app/",
    workplace: "Personal",
    image: "robot101engineering.jpeg",
  },
  {
    name: "Dota Meme Team",
    description:
      "Fan website for video game Dota 2. Generates different team ideas to play with friends. <br/> <br/> Utilizes Dota 2's extensive online image hosting to generate pre-defined team compositions.",
    tech: ["React", "SASS"],
    link: "https://www.dotamemeteam.com/",
    workplace: "Personal",
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
