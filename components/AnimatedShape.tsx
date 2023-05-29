import classNames from "classnames";
import React, { Children, Component, useEffect, useRef, useState } from "react";

export enum EAnimationType {
  bounceIn,
  bounceInDown,
  bounceInUp,
  rotateIn,
  slideInLeft,
}

type Props = {
  className?: string;
  children?: React.ReactNode;
  onLoadAnimation?: EAnimationType;
  disableOnHover?: boolean;
};

export default function AnimatedShape(props: Props) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [relativeMousePos, setRelativeMousePos] = useState({ _x: 0, _y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const [debounceMouseMove, setDebounceMouseMove] = useState(false);
  // const mouse = {
  //   x: 0,
  //   y: 0,
  //   _x: 0,
  //   _y: 0,
  //   updatePosition: function (
  //     event: React.MouseEvent<HTMLDivElement, MouseEvent>
  //   ) {
  //     let e = event || window.event;
  //     setMousePos({ x: e.clientX - this._x, y: (e.clientY - this._y) * -1 });
  //   },
  //   setOrigin: function (e: HTMLElement) {
  //     setRelativeMousePos({
  //       _x: e.offsetLeft + Math.floor(e.offsetWidth / 2),
  //       _y: e.offsetTop + Math.floor(e.offsetHeight / 2),
  //     });
  //   },
  // };

  useEffect(() => {
    setRelativeMousePos({
      _x: ref.current!.offsetLeft + Math.floor(ref.current!.offsetWidth / 2),
      _y: ref.current!.offsetTop + Math.floor(ref.current!.offsetHeight / 2),
    });
  }, []);

  const onHover = (mouseEvent: React.MouseEvent<HTMLDivElement>) => {
    if (!debounceMouseMove) {
      setDebounceMouseMove(true);

      setMousePos({
        x: mouseEvent.clientX - relativeMousePos._x,
        y: (mouseEvent.clientY - relativeMousePos._y) * -1,
      });

      setTimeout(() => {
        setDebounceMouseMove(false);
      }, 100);
    }
  };

  return (
    <div className={props.className} onMouseMove={(e) => onHover(e)}>
      <div
        className={classNames("transition-all duration-150 ease-out")}
        ref={ref}
        style={{
          transform:
            "translateY(" +
            (mousePos.y / (ref.current?.offsetHeight || 0) / 2).toFixed(2) +
            "px)" +
            " translateX(" +
            (mousePos.x / (ref.current?.offsetWidth || 0) / 2).toFixed(2) +
            "px)",
        }}
        // onMouseLeave={() => this.onHover(false)}
      >
        {props.children}
      </div>
    </div>
  );
}
