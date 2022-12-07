import * as React from "react";

import IntroPage from "../components/IntroPage/IntroPage";
import ProjectPage from "../components/projectsPage/Project";
import Videos from "../components/Videos/Videos";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10em" }}>
      <IntroPage />
      <ProjectPage />
      <Videos />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
