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
}));

//Lead function
export default function Leaf(props) {
  const classes = useStyles();
  const connector = <Grid className={classes.connector} />;

  const card = (
    <Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        className={classes.card}
      >
        <Grid item>
          <div> 2018 </div>
        </Grid>
        <Grid item>
          <div> 2018 - 2019</div>
        </Grid>
        <Grid item>
          <div> Title : IOS Developer </div>
        </Grid>
      </Grid>
    </Grid>
  );

  const first = props.right ? card : props.left ? connector : card;
  const second = props.right ? connector : props.left ? card : connector;
  return (
    <Grid container>
      {first} {second}
    </Grid>
  );
}
