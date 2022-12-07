import React from "react";
import Skill from "../Skill/Skill";

import * as styles from "./style.module.css";
const Skills = () => {
  return (
    <div className={styles.skills}>
      <Skill title="Front-end Skills" />
      <Skill title="Back-end Skills" />
      <Skill title="Database Skills" />
      <Skill title="Other Skills" />
    </div>
  );
};

export default Skills;
