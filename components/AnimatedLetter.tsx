import classNames from "classnames";
import React, { Children, Component } from "react";

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
  static readonly defaultProps = {
    onLoadAnimation: EAnimationType.bounceIn,
  };

  state = {
    hover: false,
    onLoadAnimationName: "",
    loadAnimationFinished: false,
  };

  componentDidMount(): void {
    const { onLoadAnimation } = this.props;

    if (onLoadAnimation) {
      this.setState({
        onLoadAnimationName: `${EAnimationType[onLoadAnimation] ?? ""}`,
        loadAnimationFinished: false,
      });
    }
  }

  render() {
    const { disableOnHover, children, key } = this.props;
    const { hover, onLoadAnimationName } = this.state;
    return (
      <span
        key={key}
        className={classNames(
          "rubberband-hover inline-block",
          onLoadAnimationName,
          {
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
