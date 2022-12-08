import React from "react";

import * as styles from "./style.module.css";

const Video = ({
  title,
  description,
  video1,
  video2,
  video3,
  video4,
  courseUrl,
  color = "orange",
}) => {
  return (
    <div className={styles.video}>
      <div className={styles.info}>
        <h3> {title} </h3>
        <p>{description}</p>
        <ul className={styles.linksList}>
          <li>
            <a
              className={styles.link}
              style={{ backgroundColor: color }}
              href={video1.url}
              target="_blank"
              rel="noreferrer"
            >
              {video1.title}
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              style={{ backgroundColor: color }}
              href={video2.url}
              target="_blank"
              rel="noreferrer"
            >
              {video2.title}
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              style={{ backgroundColor: color }}
              href={video2.url}
              target="_blank"
              rel="noreferrer"
            >
              {video2.title}
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              style={{ backgroundColor: color }}
              href={video3.url}
              target="_blank"
              rel="noreferrer"
            >
              {video3.title}
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              style={{ backgroundColor: color }}
              href={video4.url}
              target="_blank"
              rel="noreferrer"
            >
              {video4.title}
            </a>
          </li>
          <li>
            <a
              className={styles.link + " " + styles.courseLink}
              href={courseUrl}
              target="_blank"
              rel="noreferrer"
            >
              Take The Whole Course On Youtube
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.frame}>
        <iframe title={title} src="https://www.youtube.com/embed/47jfyN4fuP4" />
      </div>
    </div>
  );
};

export default Video;
