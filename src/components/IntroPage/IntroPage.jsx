import React from "react";
import Typewriter from "typewriter-effect";

import * as styles from "./style.module.css";

const TEXTS = [
  "Hi Human! Welcome.",
  "I am <strong> Nasir</strong>. Nice to Meet You",
  "Scroll Down!",
];
const IntroPage = () => {
  return (
    <div className={"page " + styles.intro}>
      <Typewriter
        options={{
          strings: TEXTS,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default IntroPage;
