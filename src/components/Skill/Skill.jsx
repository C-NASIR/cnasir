import React from "react";

import Pill from "../pill/Pill";
import Image from "../image/Image";

import * as styles from "./style.module.css";

const Skill = ({ title, description, skills = [], image }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.info}>
        <div>
          <h2> {title} Skills </h2>
          <p>{description}</p>
        </div>
        <div className={styles.pills}>
          {skills.map((text) => (
            <Pill text={text} />
          ))}
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={image}
          alt="web design example"
          className={styles.staticImage}
        />
      </div>
    </div>
  );
};

export default Skill;
