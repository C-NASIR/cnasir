import React from "react";
import Pill from "../pill/Pill";
import * as styles from "./style.module.css";

const Project = ({
  websiteUrl = "",
  skills = [],
  title = "",
  description = "",
  uses = [],
  sourceUrl = "",
}) => {
  return (
    <div className={styles.project}>
      <div className={styles.info}>
        <h2> {title} </h2>
        <p> {description} </p>
        <h3> Uses </h3>
        <ul className={styles.list}>
          {uses.map((text, index) => (
            <li key={index}> {text}</li>
          ))}
        </ul>
        <h3> Tech Stack </h3>
        <div className={styles.tech}>
          {skills.map((text, index) => (
            <Pill text={text} key={index} />
          ))}
        </div>
        <p> It is Interactive. Go a head. </p>
        <a
          className={styles.sourcecode}
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
        <a
          className={styles.weblink}
          href={websiteUrl}
          target="_blank"
          rel="noreferrer"
        >
          Visit The Web Application
        </a>
      </div>
      <div className={styles.frame}>
        <iframe src={websiteUrl} />
      </div>
    </div>
  );
};

export default Project;
