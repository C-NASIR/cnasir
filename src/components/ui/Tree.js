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
export default function Tree(props) {
  const classes = useStyles();
  const down = props.down ? true : false;
  return (
    <Grid container direction="column">
      <Grid>
        <Grid container justify="center" direction={down ? "column" : "row"}>
          <Grid item>
            <Leaf
              direction={down}
              down={down}
              year="2019"
              company="Connecting Cultures"
              position="Developer Intern"
            />
          </Grid>
          {down ? null : (
            <Grid item>
              <div className={classes.lineTree} />
            </Grid>
          )}
          <Grid item style={{ alignSelf: "end" }}>
            <Leaf
              direction={down}
              right={down ? false : true}
              down={down}
              year="2018 - 2020"
              company="Connecting Cultures"
              position="Medical Interpreter"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Grid container justify="center" direction={down ? "column" : "row"}>
          <Grid item>
            <Leaf
              direction={down}
              down={down}
              year="2018"
              company="GBAPS"
              position="Avid Tutor"
            />
          </Grid>
          {down ? null : (
            <Grid item>
              <div className={classes.lineTree} />
            </Grid>
          )}
          <Grid item style={{ alignSelf: "end" }}>
            <Leaf
              direction={down}
              down={down}
              right={down ? false : true}
              year="2017"
              company="Walmart"
              position="Floor Associate"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
