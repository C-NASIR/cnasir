import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//Lead Styles
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "Green",
    width: "15em",
    height: "10em",
    borderTopLeftRadius: "3em",
    borderBottomRightRadius: "3em",
    color: "white",
  },
  connector: {
    backgroundColor: "brown",
    width: "10em",
    height: ".5em",
    alignSelf: "center",
  },
  year: {
    fontFamily: "Viga, sans-serif",
    fontSize: "2.5em",
  },
}));

//Lead function
export default function Leaf(props) {
  const classes = useStyles();
  const connector = (
    <Grid
      className={classes.connector}
      style={{
        width: props.down ? ".5em" : "10em",
        height: props.down ? "10em" : ".5em",
      }}
    />
  );

  const card = (
    <Grid style={{ alignSelf: props.down ? "center" : "" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        className={classes.card}
      >
        <Grid item>
          <div className={classes.year}> {props.year} </div>
        </Grid>
        <Grid item>
          <div> Company : {props.company}</div>
        </Grid>
        <Grid item>
          <div> Position : {props.position} </div>
        </Grid>
      </Grid>
    </Grid>
  );

  const first = props.right ? connector : props.left ? card : card;
  const second = props.right ? card : props.left ? connector : connector;
  return (
    <Grid container direction={props.down ? "column" : "row"}>
      {first}
      {second}
    </Grid>
  );
}
