import React from "react";

import ScrollReveal from "../ScrollReveal/ScrollReveal";
import * as styles from "./style.module.css";

const Video = ({
  title,
  description,
  video1,
  video2,
  video3,
  video4,
  video5,
  courseUrl,
  iframeUrl,
  color = "orange",
}) => {
  return (
    <div className={styles.video}>
      <div className={styles.info}>
        <ScrollReveal>
          <h3> {title} </h3>
          <p>{description}</p>
        </ScrollReveal>
        <ul className={styles.linksList}>
          <li>
            <ScrollReveal>
              <a
                className={styles.link}
                style={{ backgroundColor: color }}
                href={video1.url}
                target="_blank"
                rel="noreferrer"
              >
                {video1.title}
              </a>
            </ScrollReveal>
          </li>
          <li>
            <ScrollReveal>
              <a
                className={styles.link}
                style={{ backgroundColor: color }}
                href={video2.url}
                target="_blank"
                rel="noreferrer"
              >
                {video2.title}
              </a>
            </ScrollReveal>
          </li>
          <li>
            <ScrollReveal>
              <a
                className={styles.link}
                style={{ backgroundColor: color }}
                href={video3.url}
                target="_blank"
                rel="noreferrer"
              >
                {video3.title}
              </a>
            </ScrollReveal>
          </li>
          <li>
            <ScrollReveal>
              <a
                className={styles.link}
                style={{ backgroundColor: color }}
                href={video4.url}
                target="_blank"
                rel="noreferrer"
              >
                {video4.title}
              </a>
            </ScrollReveal>
          </li>
          <li>
            <ScrollReveal>
              <a
                className={styles.link}
                style={{ backgroundColor: color }}
                href={video5.url}
                target="_blank"
                rel="noreferrer"
              >
                {video5.title}
              </a>
            </ScrollReveal>
          </li>
          <li>
            <a
              className={styles.link + " " + styles.courseLink}
              href={courseUrl}
              target="_blank"
              rel="noreferrer"
            >
              Take The Whole Course On YouTube
            </a>
          </li>
        </ul>
      </div>
      <div
        className={styles.frame}
        data-sal="slide-up"
        data-sal-delay="0"
        data-sal-duration="1000"
      >
        <iframe title={title} src={iframeUrl} />
      </div>
    </div>
  );
};

export default Video;
