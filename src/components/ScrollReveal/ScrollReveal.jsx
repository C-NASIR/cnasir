import React from "react";

const ScrollReveal = ({ children }) => {
  return (
    <div
      data-sal="slide-up"
      data-sal-delay="0"
      data-sal-duration="500" // changes duration of the animation (from 200 to 2000 ms)
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
