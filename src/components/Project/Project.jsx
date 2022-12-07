import React from "react";

import * as styles from "./style.module.css";

const Project = ({ websiteUrl }) => {
  return (
    <div className={styles.project}>
      <div className={styles.info}>
        <h3> Music App </h3>
        <p> This is a music application built with React js </p>
        <p> It is Interactive. Go a head. </p>
        <h3> Uses </h3>
        <ul>
          <li>
            You can Scroll through favorite artists and click on the one you
            like
          </li>
          <li> You can search for an artists</li>
        </ul>
        <h3> Tech Stack </h3>
        <ul>
          <li> Create React App (ReactJS) </li>
          <li> JavaScript, Modular CSS</li>
          <li> Consuming Rest API </li>
        </ul>
        <p> Application Code </p>
        <button> Visit The Web Application </button>
      </div>
      <div className={styles.frame}>
        <iframe src={websiteUrl} />
      </div>
    </div>
  );
};

export default Project;
