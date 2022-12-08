import React from "react";
import Project from "../Project/Project";
import * as style from "./style.module.css";

const projectData = [
  {
    websiteUrl: "https://c-nasir.github.io/musica/",
    skills: ["Create React App", "JavaScript", "Material UI", "Rest API"],
    title: "Musica",
    description: "A simplified music application",
    uses: [
      "You can choose from the favorite artists",
      "You can search your favorite artist",
    ],
    sourceUrl: "https://github.com/C-NASIR/musica",
  },
  {
    websiteUrl: "https://movies-psi-two.vercel.app/",
    skills: ["NextJS", "JavaScript", "Tailwind CSS", "Rest API"],
    title: "Movica",
    description: "A Netflix like application",
    uses: [
      "You can click on video templates",
      "You can scroll vertically to see all genres",
      "You can scroll horizontally to see all movies in specific genre",
    ],
    sourceUrl: "https://movies-psi-two.vercel.app/",
  },
];

// websiteUrl={"https://movies-psi-two.vercel.app/"

const Projects = () => {
  return (
    <div className={style.projects}>
      {projectData.map((data) => (
        <Project
          key={data.title}
          websiteUrl={data.websiteUrl}
          skills={data.skills}
          title={data.title}
          description={data.description}
          uses={data.uses}
          sourceUrl={data.sourceUrl}
        />
      ))}
    </div>
  );
};

export default Projects;
