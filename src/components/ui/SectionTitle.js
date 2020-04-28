import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//Section Title Styles
const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: "white",
    fontSize: "5rem",
    fontFamily: "Bubblegum Sans, cursive;",
    marginBottom: ".5em",
  },
}));
export default function SectionTitle(props) {
  const classes = useStyles();
  return (
    <Grid container direction="row" style={{ justifyContent: "center" }}>
      <Typography variant="h4" className={classes.subtitle}>
        {props.title}
      </Typography>
    </Grid>
  );
}
