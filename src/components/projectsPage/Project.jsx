import React from "react";
import Project from "../Project/Project";
import * as style from "./style.module.css";

const ProjectPage = () => {
  return (
    <div className={style.projects}>
      <Project websiteUrl={"https://c-nasir.github.io/musica/"} />
      <Project websiteUrl={"https://movies-psi-two.vercel.app/"} />
    </div>
  );
};

export default ProjectPage;
