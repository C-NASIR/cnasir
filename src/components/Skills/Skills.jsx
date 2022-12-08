import React from "react";
import Skill from "../Skill/Skill";

import * as styles from "./style.module.css";

const data = [
  {
    title: "Front-End Development Skills",
    description:
      "These are the front-end development skills I have honed over time",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "DOM JavaScript",
      "React JS",
      "Next JS",
      "Gatsby",
      "Responsive Web",
    ],
    image: "frontend.svg",
  },
  {
    title: "Back-End Development Skills",
    description:
      "These are the back-end development skills I have honed over time",
    skills: [
      "TypeScript",
      "Node JS",
      "Restful API",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Amazon Web Services (AWS)",
    ],
    image: "backend.svg",
  },
  {
    title: "Other Development Skills",
    description:
      "Development skills that fall into neither front-end nor back-end",
    skills: [
      "Algorithms",
      "Data Structures",
      "Design Pattern",
      "Rendering Pattern",
      "Performance Patterns",
      "Mobile App Development",
    ],
    image: "others.svg",
  },
];

const Skills = () => {
  return (
    <div className={styles.skills}>
      {data.map((obj) => (
        <Skill
          title={obj.title}
          description={obj.description}
          skills={obj.skills}
          image={obj.image}
        />
      ))}
    </div>
  );
};

export default Skills;
