import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

//Importing my own components
import ListBuilder from "../ListBuilder";

//Crafts Styles
const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: "white",
    fontSize: "5rem",
    fontFamily: "Bubblegum Sans, cursive;",
    marginBottom: ".5em",
  },
}));

export default function Crafts(props) {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row" style={{ justifyContent: "center" }}>
        <Typography variant="h4" className={classes.subtitle}>
          Crafts
        </Typography>
      </Grid>

      {/* {// Skills Start Here */}
      <Grid container>
        <Grid item container direction="column">
          <ListBuilder
            list={props.skills}
            listStyles={{ marginLeft: ".5em" }}
            listItemTextStyles={{ display: "flex" }}
          />
        </Grid>
        <Grid></Grid>
      </Grid>
    </>
  );
}
