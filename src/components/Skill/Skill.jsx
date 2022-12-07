import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import Pill from "../pill/Pill";

import * as styles from "./style.module.css";

const Skill = ({ title }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.info}>
        <div>
          <h2> {title} Skills </h2>
          <p>
            These are the technologies and programming languages I have used
            developing front end applications. <br />
          </p>
        </div>
        <div className={styles.pills}>
          <Pill text="HTML5" />
          <Pill text="JavaScript" />
          <Pill text="CSS3" />
          <Pill text="DOM JavaScript" />
          <Pill text="ReactJS" />
          <Pill text="Gatby" />
          <Pill text="NextJS" />
        </div>
      </div>
      <div className={styles.image}>
        <StaticImage
          src="../../images/web-design.jpg"
          alt="web design example"
          className={styles.staticImage}
        />
      </div>
    </div>
  );
};

export default Skill;
