import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//importing images
import COVID19 from "../../../images/wearingMask.jpg";

//Heading Styles
const useStyles = makeStyles((theme) => ({
  heading: {
    display: "flex",
    backgroundImage: `url(${COVID19})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    lineHeight: "12em",
    fontSize: "5rem",
    fontFamily: "Indie Flower, cursive",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
      lineHeight: "8em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      lineHeight: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));
export default function Heading() {
  const classes = useStyles();
  return (
    <div className={classes.heading}>
      <h1 className={classes.title}> Stay Home, Stay Health. Stay Save</h1>
    </div>
  );
}
