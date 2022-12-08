import React from "react";
import Typewriter from "typewriter-effect";

import * as styles from "./style.module.css";

const IntroPage = () => {
  return (
    <div className={"page " + styles.intro}>
      <p className={styles.nice}> Hi !. I am Nasir. Nice to Meet You (👇)</p>
      {/* <Typewriter
        options={{
          strings: [TEXT],
          autoStart: true,
          loop: true,
        }}
      /> */}
    </div>
  );
};

export default IntroPage;
