import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

//Images
import COVID19 from "../../images/wearingMask.jpg";
import Nasir from "../../images/Nasir.jpg";
//my components
import ListBuilder from "./ListBuilder";
import ProgressBar from "./ProgressBar";

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

  subtitle: {
    color: "white",
    fontSize: "5rem",
    fontFamily: "Bubblegum Sans, cursive;",
    marginBottom: ".5em",
  },
  avatarContainer: {
    justifyContent: "center",
    marginTop: "2em",
    marginBottom: "-3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: 0,
    },
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  bioContainer: {
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
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

export default function Resume() {
  const classes = useStyles();
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
      <div className={classes.heading}>
        <h1 className={classes.title}> Stay Home, Stay Health. Stay Save</h1>
      </div>

      {/* {//The Grid Starts Here */}
      <Grid container style={{ backgroundColor: theme.palette.common.black }}>
        {/* Afataer Starts Here */}
        <Grid container direction="row" className={classes.avatarContainer}>
          <Grid item>
            <Avatar alt="C NASIR" src={Nasir} className={classes.avatar} />
          </Grid>
        </Grid>

        {/* {// Biography Starts Here */}
        <Grid container direction="row" className={classes.bioContainer}>
          <Grid item>
            <ListBuilder
              list={bio}
              title="Let's Get Personal"
              listStyles={{ height: "25em" }}
              listItemStyles={{ marginBottom: "3em" }}
            />
          </Grid>
          <Grid item>
            <ListBuilder
              list={people}
              title="What I look for a company"
              listStyles={{ height: "25em" }}
              listItemStyles={{ marginBottom: "3em" }}
            />
          </Grid>
        </Grid>

        {/* Divider Is Here */}
        <Grid style={{ width: "100%" }}>
          <Divider className={classes.divider} />
        </Grid>

        <Grid container direction="row" style={{ justifyContent: "center" }}>
          <Typography variant="h4" className={classes.subtitle}>
            Crafts
          </Typography>
        </Grid>

        {/* {// Skills Start Here */}
        <Grid container>
          <Grid item container direction="column">
            <ListBuilder
              list={skills}
              listStyles={{ marginLeft: ".5em" }}
              listItemTextStyles={{ display: "flex" }}
            />
          </Grid>
          <Grid></Grid>
        </Grid>
      </Grid>
    </>
  );
}
