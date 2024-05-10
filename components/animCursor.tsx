import React from "react";
import AnimatedCursor from "react-animated-cursor";

type Props = {};

const AnimCursor = (props: Props) => {
  return (
    <AnimatedCursor
      color="138, 43, 226"
      innerSize={8}
      outerSize={30}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      outerStyle="mix-blend-mode: difference;"
      innerStyle="mix-blend-mode: difference;"
    />
  );
};

export default AnimCursor;
