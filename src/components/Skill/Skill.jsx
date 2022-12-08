import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import Pill from "../pill/Pill";

import * as styles from "./style.module.css";

const Skill = ({ title, description, skills = [], name }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.info}>
        <div>
          <h2> {title} Skills </h2>
          <p>{description}</p>
          <p> {name} </p>
        </div>
        <div className={styles.pills}>
          {skills.map((text) => (
            <Pill text={text} />
          ))}
        </div>
      </div>
      <div className={styles.image}>
        <StaticImage
          src="../../images/frontend.svg"
          alt="web design example"
          className={styles.staticImage}
        />
      </div>
    </div>
  );
};

export default Skill;
