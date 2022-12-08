import * as React from "react";

import IntroPage from "../components/IntroPage/IntroPage";
import Projects from "../components/projects/Projects";
import Videos from "../components/Videos/Videos";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10em",
        maxWidth: "1440px",
        margin: "auto",
      }}
    >
      <IntroPage />
      <Projects />
      <Videos />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
