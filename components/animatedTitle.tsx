import classNames from "classnames";
import React from "react";
import AnimatedLetter from "./AnimatedLetter";

type Props = {
  title: React.ReactElement;
};

type State = {};

class AnimatedTitle extends React.Component<Props, State> {
  static readonly defaultProps = {
    title: "",
  };

  state = {};

  render() {
    const { title } = this.props;

    let child: React.ReactNode[] = [];

    createSpans();

    function createSpans(letter?: React.ReactElement) {
      let obj = letter ? letter : title;
      let letters = obj.props.children;
      const spans: React.ReactNode[] = [];
      if (letters) {
        for (let i = 0; i < letters.length; i++) {
          const letter = letters[i];

          if (typeof letter === "object") {
            createSpans(letter);
          } else if (letter.length > 1) {
            for (let ii = 0; ii < letter.length; ii++) {
              let subletter = letter[ii];
              subletter === " " ? (subletter = "\u00A0") : subletter;
              spans.push(
                letter === " " ? (
                  " "
                ) : (
                  <AnimatedLetter>{subletter}</AnimatedLetter>
                )
              );
            }
          } else {
            spans.push(
              letter === " " ? " " : <AnimatedLetter>{letter}</AnimatedLetter>
            );
          }
        }

        child.push(
          React.cloneElement(obj === title ? <span /> : obj, {
            children: spans,
          })
        );
      } else {
        child.push(obj);
      }
    }

    return React.cloneElement(title, { children: child });
  }
}

export default AnimatedTitle;
