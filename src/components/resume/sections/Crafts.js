import React from "react";
import Grid from "@material-ui/core/Grid";

//Importing my own components
import ListBuilder from "../ListBuilder";
import SectionTitle from "../../ui/SectionTitle";

export default function Crafts(props) {
  return (
    <>
      <SectionTitle title="Crafts" />
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
