import React from "react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
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
        <ScrollReveal>
          <h2> {title} </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p> {description} </p>
        </ScrollReveal>
        <ScrollReveal>
          <h3 className={styles.usesTitle}> Uses </h3>
        </ScrollReveal>
        <ScrollReveal>
          <ul className={styles.list}>
            {uses.map((text, index) => (
              <li key={index}> {++index + ": " + text}</li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal>
          <p className={styles.notice}>
            This Project is Interactive. go a head. Try it!
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h3> Tech Stack </h3>
        </ScrollReveal>
        <div className={styles.tech}>
          {skills.map((text, index) => (
            <Pill text={text} key={index} />
          ))}
        </div>
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
        <iframe title={title} src={websiteUrl} />
      </div>
    </div>
  );
};

export default Project;
