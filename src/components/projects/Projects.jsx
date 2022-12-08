import React from "react";
import Project from "../Project/Project";
import * as style from "./style.module.css";

const projectData = [
  {
    websiteUrl: "https://c-nasir.github.io/musica/",
    skills: ["Create React App", "JavaScript", "Material UI", "Rest API"],
    title: "Musica",
    description:
      "A simplified music application that you can use to sample new music or existing ones",
    uses: [
      "Choose from favorite artist to sample their music",
      "Search your favorite artist to sample their music",
      "The page is responsive and favorite artists might not show",
    ],
    sourceUrl: "https://github.com/C-NASIR/musica",
  },
  {
    websiteUrl: "https://movies-psi-two.vercel.app/",
    skills: ["NextJS", "JavaScript", "Tailwind CSS", "Rest API"],
    title: "Movica",
    description:
      "A Netflix like application that you can use to discover new movies and tv shows in many different genres",
    uses: [
      "Scroll down to see all the genres and their movies",
      "Scroll horizontally to see all the movies in specific genre",
      "Click on movie thumbnail to watch trailer and get movie recommendations ",
    ],
    sourceUrl: "https://movies-psi-two.vercel.app/",
  },
];

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
