import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//importing sections
import Heading from "./sections/Heading";
import Bio from "./sections/Bio";
import Crafts from "./sections/Crafts";
import History from "./sections/History";
import Footer from "./sections/Footer";

//my components
import ProgressBar from "./ProgressBar";
import Divider from "../ui/Divider";

export default function Resume() {
  const theme = useTheme();

  const bio = [
    ["Name", "Nasir"],
    ["Hobby", "Coding, Learning, Exploring"],
    ["Philosophy", "There is an absolute right and wrong"],
  ];

  const people = [
    ["Team", "Teams are The Builders of Dreams"],
    ["Culture", "Culture is Everything to a Company"],
    ["Diversity", "Diversity is The Flavor of Life"],
  ];

  const skills = [
    ["ReactJS", <ProgressBar width="90%" />, "react"],
    ["Javascript", <ProgressBar width="93%" />, "js"],
    ["HTML", <ProgressBar width="95%" />, "html"],
    ["CSS3", <ProgressBar width="99%" />, "css3"],
  ];

  return (
    <>
      <Heading />

      <Grid container style={{ backgroundColor: theme.palette.common.black }}>
        <Bio bio={bio} people={people} />
        <Divider />
        <Crafts skills={skills} />

        <Divider style={{ marginTop: "5em" }} />

        <Grid container style={{ justifyContent: "center" }}>
          <Grid item>
            <History />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
