import React from "react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import * as styles from "./style.module.css";

const Pill = ({ text }) => {
  return (
    <ScrollReveal>
      <p className={styles.pill}> {text}</p>
    </ScrollReveal>
  );
};

export default Pill;
