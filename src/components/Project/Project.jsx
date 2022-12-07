import React from "react";
import Pill from "../pill/Pill";
import * as styles from "./style.module.css";

const Project = ({ websiteUrl }) => {
  return (
    <div className={styles.project}>
      <div className={styles.info}>
        <h2> Music App </h2>
        <p> This is a music application built with React js </p>
        <p> It is Interactive. Go a head. </p>
        <h3> Uses </h3>
        <ul className={styles.list}>
          <li>
            You can Scroll through favorite artists and click on the one you
            like
          </li>
          <li> You can search for an artists</li>
        </ul>
        <h3> Tech Stack </h3>
        <div className={styles.tech}>
          <Pill text="Create React App" />
          <Pill text="JavaScript " />
          <Pill text="Modular CSS" />
          <Pill text="Restful API" />
        </div>
        <a className={styles.sourcecode} href="" Source code>
          Source Code
        </a>
        <p className={styles.weblink}> Visit The Web Application </p>
      </div>
      <div className={styles.frame}>
        <iframe src={websiteUrl} />
      </div>
    </div>
  );
};

export default Project;
