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
    name: "frontend",
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
    name: "backend",
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
    name: "others",
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
          name={obj.name}
        />
      ))}
    </div>
  );
};

export default Skills;
