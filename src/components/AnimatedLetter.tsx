import classNames from "classnames";
import React, { Component } from "react";

export enum EAnimationType {
  bounceIn,
  bounceInDown,
  bounceInUp,
  rotateIn,
  slideInLeft,
}

type Props = {
  children?: React.ReactNode;
  onLoadAnimation?: EAnimationType;
  disableOnHover?: boolean;
  key?: number;
};

type State = {
  onLoadAnimationName: string;
  loadAnimationFinished?: boolean;
  hover: boolean;
};

export default class AnimatedLetter extends Component<Props, State> {
  state = {
    hover: false,
    onLoadAnimationName: "",
    loadAnimationFinished: false,
  };

  componentDidMount(): void {
    const { onLoadAnimation } = this.props;

    if (onLoadAnimation != undefined) {
      this.setState({
        onLoadAnimationName: `${EAnimationType[onLoadAnimation] ?? ""}`,
        loadAnimationFinished: false,
      });
    }
  }

  render() {
    const { disableOnHover, children, key, onLoadAnimation } = this.props;
    const { hover, onLoadAnimationName, loadAnimationFinished } = this.state;
    return (
      <span
        key={key}
        className={classNames(
          "animated-letter rubberband-hover inline-block",
          onLoadAnimationName,
          {
            "opacity-0": onLoadAnimation != undefined && !loadAnimationFinished,
            rubberband: hover && !disableOnHover,
          }
        )}
        onAnimationEnd={this.onAnimationEnd}
        onMouseEnter={() => this.onHover(true)}
        onMouseLeave={() => this.onHover(false)}
      >
        {children}
      </span>
    );
  }

  onHover(hover: boolean) {
    if (this.state.loadAnimationFinished) {
      this.setState({ hover });
    }
  }

  onAnimationEnd = (event: React.AnimationEvent<HTMLSpanElement>) => {
    if (Object.keys(EAnimationType).includes(event.animationName)) {
      this.setState({ onLoadAnimationName: "", loadAnimationFinished: true });
    }
  };
}
