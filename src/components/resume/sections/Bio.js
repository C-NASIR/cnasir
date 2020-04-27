import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

//importing other components
import ListBuilder from "../ListBuilder";

//Importing Images
import Nasir from "../../../images/Nasir.jpg";

//Bio Styles
const useStyles = makeStyles((theme) => ({
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
}));

export default function Bio(props) {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row" className={classes.avatarContainer}>
        <Grid item>
          <Avatar alt="C NASIR" src={Nasir} className={classes.avatar} />
        </Grid>
      </Grid>

      {/* {// Biography Starts Here */}
      <Grid container direction="row" className={classes.bioContainer}>
        <Grid item>
          <ListBuilder
            list={props.bio}
            title="Let's Get Personal"
            listStyles={{ height: "25em" }}
            listItemStyles={{ marginBottom: "3em" }}
          />
        </Grid>
        <Grid item>
          <ListBuilder
            list={props.people}
            title="What I look for a company"
            listStyles={{ height: "25em" }}
            listItemStyles={{ marginBottom: "3em" }}
          />
        </Grid>
      </Grid>
    </>
  );
}
