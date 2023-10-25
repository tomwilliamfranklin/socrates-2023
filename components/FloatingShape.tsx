import React, { useEffect, useState } from "react";
import ScrollAnimated from "./ScrollAnimated";

export default function FloatingShape(props: any) {
  const [shapes, setShapes] = useState<React.JSX.Element[]>([]);

  const randomWithRange = (min: number, max: number) => {
    const range = max - min + 1;
    return Math.floor(Math.random() * range + min);
  };

  const getShapeType = (type: number) => {
    switch (type) {
      // Squares
      case 8:
        return (
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="m21,21v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125z" />
          </svg>
        );
      default:
        return (
          <svg
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 5.3378906 2 L 0.671875 10 L 5.3378906 18 L 14.662109 18 L 19.328125 10 L 14.662109 2 L 5.3378906 2 z M 5.9121094 3 L 14.087891 3 L 18.171875 10 L 14.087891 17 L 5.9121094 17 L 1.828125 10 L 5.9121094 3 z " />
          </svg>
        );
    }
  };

  useEffect(() => {
    const preShapes = [];

    for (let i = 0; i < 5; i++) {
      const randomType = Math.floor(Math.random() * 9);
      const color = randomWithRange(2, 3);
      preShapes.push(
        <div
          style={{
            left: `${randomWithRange(10, 90)}%`,
            top: `${randomWithRange(1, -100)}%`,
            transform: `rotate(${randomWithRange(1, 180)}deg)`,
            borderColor: `transparent transparent transparent var(${
              color === 1 ? "--accent" : "--accent" + color
            })`,
          }}
          className={`absolute triangle opacity-50`}
        ></div>
      );
    }

    setShapes(preShapes);
  }, []);

  return (
    <ScrollAnimated
      className=" absolute z-0 left-[50px] bottom-[150px] w-full h-10 hidden md:block"
      movementSpeed={10}
      start={0}
      goal={-20}
    >
      <div
        style={{
          left: `5%`,
          top: `5%`,
          transform: `rotate(20deg)`,
          borderColor: `transparent transparent transparent var(--accent2)`,
        }}
        className={`absolute triangle opacity-50`}
      ></div>
      <div
        style={{
          left: `15%`,
          top: `5%`,
          transform: `rotate(-40deg)`,
          borderColor: `transparent transparent transparent var(--accent3)`,
        }}
        className={`absolute triangle opacity-50`}
      ></div>
      <div
        style={{
          left: `23%`,
          top: `5%`,
          transform: `rotate(30deg)`,
          borderColor: `transparent transparent transparent var(--accent2)`,
        }}
        className={`absolute triangle opacity-50`}
      ></div>
      <div
        style={{
          left: `30%`,
          top: `5%`,
          transform: `rotate(5deg)`,
          borderColor: `transparent transparent transparent var(--accent3)`,
        }}
        className={`absolute triangle opacity-50`}
      ></div>
      <div
        style={{
          left: `45%`,
          top: `5%`,
          transform: `rotate(45deg)`,
          borderColor: `transparent transparent transparent var(--accent3)`,
        }}
        className={`absolute triangle opacity-50`}
      ></div>
      <div
        style={{
          left: `60%`,
          top: `5%`,
          transform: `rotate(5deg)`,
          borderColor: `transparent transparent transparent var(--accent3)`,
        }}
        className={`absolute triangle opacity-50`}
      ></div>
      <div
        style={{
          left: `70%`,
          top: `10%`,
          transform: `rotate(110deg)`,
          borderColor: `transparent transparent transparent var(--accent3)`,
        }}
        className={`absolute triangle opacity-50`}
      ></div>
      <div
        style={{
          left: `80%`,
          top: `-200%`,
          transform: `rotate(260deg)`,
          borderColor: `transparent transparent transparent var(--accent2)`,
        }}
        className={`absolute triangle opacity-50`}
      ></div>
    </ScrollAnimated>
  );
}
