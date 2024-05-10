import React from "react";
import AnimatedCursor from "react-animated-cursor";

type Props = {
  outerStyle?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
};

const AnimCursor = (props: Props) => {
  return (
    <AnimatedCursor
      color="138, 43, 226"
      innerSize={8}
      outerSize={30}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      // outerStyle={{ mixBlendMode: "difference" }} // Pass as an object
      // innerStyle={{ mixBlendMode: "difference" }} // Pass as an object
    />
  );
};

export default AnimCursor;
