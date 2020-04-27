import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  meter: {
    backgroundColor: theme.palette.common.darkBlue,
    marginLeft: "5em",
    marginRight: "5em",
    borderRadius: ".5em",
    alignSelf: "flex-start",
    [theme.breakpoints.down("sm")]: {
      marginLeft: ".5em",
      marginRight: 0,
    },
  },
  span: {
    display: "block",
    borderRadius: ".5em",
    backgroundColor: theme.palette.common.lightGreen,
    textAlign: "center",
  },
  text: {
    fontFamily: "Viga, sans-serif",
    color: theme.palette.common.black,
  },
}));

export default function ProgressBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.meter}>
      <span className={classes.span} style={{ width: props.width }}>
        <span className={classes.text}> {props.width} </span>
      </span>
    </div>
  );
}
