import React from "react";

import ScrollReveal from "../ScrollReveal/ScrollReveal";
import Pill from "../pill/Pill";
import Image from "../image/Image";

import * as styles from "./style.module.css";

const Skill = ({ title, description, skills = [], image }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.info}>
        <ScrollReveal>
          <div>
            <h2> {title} Skills </h2>
            <p>{description}</p>
          </div>
        </ScrollReveal>
        <div className={styles.pills}>
          {skills.map((text, index) => (
            <Pill text={text} key={index} />
          ))}
        </div>
      </div>
      <ScrollReveal>
        <div className={styles.image}>
          <Image
            src={image}
            alt="web design example"
            className={styles.staticImage}
          />
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Skill;
