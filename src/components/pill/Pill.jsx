import React from "react";

import * as styles from "./style.module.css";
const Pill = ({ text }) => {
  return <p className={styles.pill}> {text}</p>;
};

export default Pill;
