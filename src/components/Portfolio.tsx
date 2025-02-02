import PortfolioItem from "./PortfolioItem";

export enum Genre {
  Website,
  Gaming,
  UIDesign,
}

export type PortfolioData = {
  name: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  workplace: string;
  disableImageScroll?: boolean;
  genre?: Genre;
  didDesign?: boolean;
  didSupportiveDesign?: boolean;
  didProgramming?: boolean;
  didArt?: boolean;
};

export const portfolioData: PortfolioData[] = [
  {
    name: "Planet Coaster 2",
    description: `Previously worked at Frontier on Planet Coaster 2, in a UI development role. 
       <br/> 
       <br/> 
       Established the UI codebase, building components used throughout the different areas of the game. 
       developed early pre production and production features, prototyping UI design ideas, and reconstructing the codebase from the previous installments.`,
    tech: [
      "C++",
      "TypeScript",
      "LUA",
      "Illustrator",
      "Adobe XD",
      "Prototyping",
      "Optimization",
    ],
    link: "https://www.planetcoaster.com/",
    image: "planet-coaster2.png",
    workplace: "Frontier Developments",
    disableImageScroll: true,
    didProgramming: true,
    didSupportiveDesign: true,
    genre: Genre.Gaming,
  },
  {
    name: "F1 Manager UI",
    description: `I was a part of the UI development since the very early stages, with responsiblity over multiple large-scale UI features, and the UI localization.
     Developing and integrating game UI, and iterating on ideas with cross-disciplines.`,
    tech: [
      "Coherent Gameface",
      "TypeScript",
      "LUA",
      "UE4",
      "Photoshop",
      "Illustrator",
      "Adobe XD",
      "Optimization",
      "Mentoring",
    ],
    link: "https://www.f1manager.com/",
    workplace: "Frontier Developments",
    image: "f1manager.jpg",
    didProgramming: true,
    genre: Genre.Gaming,
  },
  {
    name: "Wardogs",
    description: `In-Development 'All-Out Warfare' FPS. <br/> <br/> "WARDOGS rewrites the rules of All-Out Warfare. Three teams conflict over land, sea and air to seize and secure a dynamic 100-player battlefield - where every tactical decision, teamplay action and risk gets rewarded." - Bulkhead Website`,
    tech: [
      "C++",
      "C#",
      "Unreal Engine 5",
      "Unity",
      "Figma",
      "Illustrator",
      "Photoshop",
      "Prototyping",
    ],
    link: "https://www.bulkhead.com/",
    image: "wardogs.png",
    workplace: "Bulkhead",
    disableImageScroll: true,
    didProgramming: true,
    didDesign: true,
    didArt: true,
    genre: Genre.Gaming,
  },
  {
    name: "Pirate Game UI Design",
    description: "A pirate game concept UI built in Adobe XD.",
    tech: [
      "Photoshop",
      "Illustrator",
      "Adobe XD",
      "Design Exploration",
      "Colour theory",
      "Graphical Elements",
    ],
    link: "https://tomfranklin.dev/PirateGameUI_Screen1.png",
    workplace: "Personal",
    image: "PirateGameUI_Screen1.png",
    genre: Genre.Gaming,
    didDesign: true,
    didProgramming: false,
    didArt: true,
    disableImageScroll: true,
  },
  {
    name: "Portfolio Website",
    description:
      "Website was designed and built from the ground up, in React and the Adobe Creative Suite. ",
    tech: [
      "React",
      "TypeScript",
      "SASS",
      "Illustrator",
      "Design Exploration",
      "Colour theory",
    ],
    link: "https://www.tomfranklin.dev",
    workplace: "Personal",
    image: "portfoliosite.jpeg",
    genre: Genre.Website,
    didDesign: true,
    didProgramming: true,
  },
  // {
  //   name: "Farmiloe Instruments",
  //   description:
  //     "Working with Farmiloe Instruments to produce their primary website for commerical services. With CRM for easy data entry. <br/> <br/> Currently in the process of data entry by their team.",
  //   tech: ["React", "SASS", "UI Design", "DecapCRM"],
  //   link: "https://heisz.netlify.app/",
  //   workplace: "Independent Project",
  //   image: "heisz.jpeg",
  // },
  {
    name: "Inventory UI Tech Demo",
    description:
      "An experiment for creating a inventory system in Preact, with code emulating the supported features of Coherent Gameface. ",
    tech: ["Preact", "TypeScript", "Photoshop", "Illustrator"],
    link: "https://main--keen-basbousa-602f52.netlify.app/",
    workplace: "Personal",
    image: "inventoryprototype.png",
    disableImageScroll: true,
    didProgramming: true,
    didDesign: true,
    genre: Genre.Gaming,
  },
  // {
  //   name: "Grove Group Website",
  //   description:
  //     "Worked with Grove Group Electrical to produce their primary website for commerical services. With CMS for easy data entry by their team. <br/> <br/> Currently in the process of data entry by their team.",
  //   tech: [
  //     "React",
  //     "TypeScript",
  //     "SASS",
  //     "Design Exploration",
  //     "Serverless CMS",
  //   ],
  //   link: "https://edison-18de75.netlify.app/",
  //   workplace: "Independent Project",
  //   image: "grove-electrical.jpeg",
  //   didDesign: true,
  //   didProgramming: true,
  //   genre: Genre.Website,
  // },
  // {
  //   name: "Website Prototype",
  //   description:
  //     "Mock website demonstrating capabilities in React, for a generic engineering company. <br/> <br/> Professional design with a scalable layout for future work.",
  //   tech: ["React", "TypeScript", "SASS", "Design Exploration"],
  //   link: "https://leonardo-d4633.web.app/",
  //   workplace: "Personal",
  //   image: "robot101engineering.jpeg",
  //   genre: Genre.Website,
  //   didProgramming: true,
  // },
  // {
  //   name: "Dota Meme Team",
  //   description:
  //     "Fan website for video game Dota 2. Generates different team ideas to play with friends. <br/> <br/> Utilizes Dota 2's extensive online image hosting to generate pre-defined team compositions.",
  //   tech: ["React", "TypeScript", "SASS"],
  //   link: "https://www.dotamemeteam.com/",
  //   workplace: "Personal",
  //   image: "dotamemeteam.jpeg",
  //   disableImageScroll: true,
  //   genre: Genre.Website,
  //   didProgramming: true,
  // },
];

export default function Portfolio() {
  return (
    <div
      id="portfolio"
      className=" w-full h-full flex flex-col justify-start items-center space-y-20 mt-[-170px]"
    >
      <div className=" w-full h-full absolute repeating-svg-centered">
        <svg
          id="patternId"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="b"
              patternUnits="userSpaceOnUse"
              width="69.141"
              height="40"
              patternTransform="scale(2) rotate(0)"
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="hsla(0, 0%, 100%, 0)"
              />
              <path
                d="M69.212 40H46.118L34.57 20 46.118 0h23.094l11.547 20zM57.665 60H34.57L23.023 40 34.57 20h23.095l11.547 20zm0-40H34.57L23.023 0 34.57-20h23.095L69.212 0zM34.57 60H11.476L-.07 40l11.547-20h23.095l11.547 20zm0-40H11.476L-.07 0l11.547-20h23.095L46.118 0zM23.023 40H-.07l-11.547-20L-.07 0h23.094L34.57 20z"
                stroke-width="1"
                stroke="hsla(0, 0%, 100%, 0.2)"
                fill="none"
              />
            </pattern>
          </defs>
          <rect
            width="800%"
            height="800%"
            transform="translate(0,0)"
            fill="url(#b)"
          />
        </svg>
      </div>

      {portfolioData
        // .filter((p) => {
        //   return p.genre != Genre.Website;
        // })
        .map((p, index) => {
          return <PortfolioItem key={index} {...p} />;
        })}
    </div>
  );
}
