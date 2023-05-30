import React from "react";

export type Props = {
  name: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
};

export default function PortfolioItem(props: Props) {
  const onSelectItem = () => {
    window.location.href = props.link;
  };

  return (
    <div className=" relative portfolio-item flex p-3 [&>*]:odd:flex-row-reverse z-30 rounded-lg ">
      <div className="h-full w-full flex rounded-lg overflow-hidden">
        <div className="h-full flex-[1.5] bg-accent2 p-10 ">
          <div className="relative w-full h-full flex justify-center items-cente overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full h-full hover:scale-[1.05] transition-transform duration-[0.8s]">
              <img
                onClick={onSelectItem}
                className="absolute top-0  hover:translate-y-[calc(-100%+440px)] transition-all ease-in duration-[5s] cursor-pointer min-h-full object-cover"
                src={props.image}
              />
            </div>
          </div>
        </div>
        <div className="h-full w-[400px] bg-secondary flex flex-col align-center justify-start p-10">
          <div className="h-full flex flex-col flex-1 items-center">
            <h3 className="text-4xl text-center">{props.name}</h3>
            <p className=" text-lg text-center mt-5">{props.description}</p>
            <div className="flex justify-center mt-5 flex-wrap gap-5 max-w-[200px]">
              {props.tech.map((t, index) => {
                return (
                  <div
                    key={index}
                    className="text-md bg-accent2 p-2 rounded-md h-fit whitespace-nowrap"
                  >
                    {t}
                  </div>
                );
              })}
            </div>
            <button
              className="button text-xl flex justify-center mt-auto w-fit"
              onClick={onSelectItem}
            >
              visit the website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
