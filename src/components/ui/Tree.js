import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Leaf from "./Leaf";

//Tree Styles
const useStyles = makeStyles((theme) => ({
  lineTree: {
    backgroundColor: "blue",
    width: ".5em",
    height: "15em",
  },
}));

//Tree function
export default function Tree() {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item>
        <Leaf />
      </Grid>
      <Grid item>
        <div className={classes.lineTree} />
      </Grid>
      <Grid item style={{ alignSelf: "end" }}>
        <Leaf left />
      </Grid>
    </Grid>
  );
}
