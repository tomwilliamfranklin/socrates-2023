import ScrollAnimated from "./ScrollAnimated";

export default function FloatingShape(props: any) {
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
