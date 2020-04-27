import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DividerUI from "@material-ui/core/Divider";
//Divider Styles
const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: "#00b0ff",
    height: ".5em",
    marginBottom: "5em",
    marginLeft: "5em",
    marginRight: "5em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

export default function Divider(props) {
  const classes = useStyles();
  return (
    <Grid style={{ width: "100%" }}>
      <DividerUI className={classes.divider} style={{ ...props.style }} />
    </Grid>
  );
}
