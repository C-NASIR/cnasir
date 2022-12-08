import React from "react";

import Video from "../Video/Video";
import * as styles from "./style.module.css";

const data = [
  {
    title: "Complete HTML Course",
    color: "#0d85bc",
    description: "This course covers everything you need to know about HTML",
    iframeUrl: "https://www.youtube.com/embed/wJcBSSejSQA",
    courseUrl:
      "https://www.youtube.com/playlist?list=PLdIF6sRfbwq55XdSKImaAa_DJ9BEgazHR",
    video1: {
      title: "Introduction to HTML",
      url: "https://youtu.be/47jfyN4fuP4",
    },
    video2: {
      title: "Displaying Text in HTML",
      url: "https://youtu.be/yRjiYO-K6y4",
    },
    video3: {
      title: "Comments and Layouts in HTML",
      url: "https://youtu.be/Ams_m6PT1rQ",
    },
    video4: {
      title: "All about Tables in HTML ",
      url: "https://youtu.be/wJcBSSejSQA",
    },
    video5: {
      title: "Master Forms in HTML",
      url: "https://youtu.be/DNefJDfWrN0",
    },
  },
  {
    title: "Complete CSS Course",
    color: "#bc0e9e",
    description: "This course covers everything you need to know about CSS3",
    iframeUrl: "https://www.youtube.com/embed/oZ3iAl00Bck",
    courseUrl:
      "https://www.youtube.com/playlist?list=PLdIF6sRfbwq60UMCrkPcMjmvghENQuiiF",
    video1: {
      title: "Introduction to CSS",
      url: "https://youtu.be/NJIyBKknf9Q",
    },
    video2: {
      title: "Adding CSS to HTML Document",
      url: "https://youtu.be/icPEr2-UN5Y",
    },
    video3: {
      title: "Types of Elements in CSS",
      url: "https://youtu.be/M5YNPoW8SUk",
    },
    video4: {
      title: "All About Positions in CSS",
      url: "https://youtu.be/oZ3iAl00Bck",
    },
    video5: {
      title: "Master Animations in CSS",
      url: "https://youtu.be/Qld1WGW2st4",
    },
  },
  {
    title: "Essential JavaScript Course",
    color: "#29a531",
    description: "This course covers basics you need to know about JavaScript",
    iframeUrl: "https://www.youtube.com/embed/e9IK9sF8Pcw",
    courseUrl:
      "https://www.youtube.com/playlist?list=PLdIF6sRfbwq7h-afKc-yLDkrr7Bs_94xa",
    video1: {
      title: "Introduction to JavaScript",
      url: "https://youtu.be/KT4uWKItAHA",
    },
    video2: {
      title: "Variables in JavaScript",
      url: "https://youtu.be/1CEQrqmnZlY",
    },
    video3: {
      title: "Strings in JavaScript",
      url: "https://youtu.be/54GqBXfsOLM",
    },
    video4: {
      title: "Functions in JavaScript",
      url: "https://youtu.be/e9IK9sF8Pcw",
    },
    video5: {
      title: "Loops in JavaScript",
      url: "https://youtu.be/x_1o_VPQQZs",
    },
  },
  {
    title: "Complete DOM JavaScript Course",
    color: "#bc7e0d",
    description:
      "This course covers basics you need to know about DOM JavaScript",
    iframeUrl: "https://www.youtube.com/embed/CfUMObzJ2LA",
    courseUrl:
      "https://www.youtube.com/playlist?list=PLdIF6sRfbwq678_qutBn4JX3rBZnOAbOE",
    video1: {
      title: "Introduction to Document Object Model (DOM)",
      url: "https://youtu.be/70JsynoWiIs",
    },
    video2: {
      title: "Accessing Elements in the DOM",
      url: "https://youtu.be/CfUMObzJ2LA",
    },
    video3: {
      title: "Manipulating Elements the DOM",
      url: "https://youtu.be/ax7UaUHUS_8",
    },
    video4: {
      title: "Introduction to Events in the DOM",
      url: "https://youtu.be/OYUZyyY_NhU",
    },
    video5: {
      title: "Event Capturing and Bubbling",
      url: "https://youtu.be/sfv66AREoqY",
    },
  },
];

const Videos = () => {
  return (
    <div className={styles.videos}>
      {data.map((data) => (
        <Video
          key={data.title}
          title={data.title}
          description={data.description}
          video1={data.video1}
          video2={data.video2}
          video3={data.video3}
          video4={data.video4}
          video5={data.video5}
          courseUrl={data.courseUrl}
          color={data.color}
          iframeUrl={data.iframeUrl}
        />
      ))}
    </div>
  );
};

export default Videos;
