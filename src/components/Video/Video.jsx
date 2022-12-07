import React from "react";

import * as styles from "./style.module.css";

const Video = () => {
  return (
    <div className={styles.video}>
      <div className={styles.info}>
        <h3> Learn HTML5 on Youtube </h3>
        <p>
          This is a complete HTML course. you will learn everything you need to
          write modern and elegent HTML5
        </p>
        <ul className={styles.linksList}>
          <li className={styles.listItem}>
            <a className={styles.link} href="">
              Introduction to HTML
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.link} href="">
              Introduction to HTML
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.link} href="">
              Introduction to HTML
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.link} href="">
              Introduction to HTML
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.link} href="">
              Introduction to HTML
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.link} href="">
              Introduction to HTML
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.frame}>
        <iframe src="https://www.youtube.com/embed/47jfyN4fuP4" />
      </div>
    </div>
  );
};

export default Video;
