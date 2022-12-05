import React from "react";

import * as styles from "./style.module.css";
const Video = () => {
  return (
    <div className={styles.video}>
      <div>
        <h3> Complete HTML Courses </h3>
        <p> You can study complete react course here </p>
      </div>
      <div>{/* The Video Iframe Goes here  */}</div>
    </div>
  );
};

export default Video;
