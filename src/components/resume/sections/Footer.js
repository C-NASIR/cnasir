import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

//importing icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

//consenants
const twitterURL = "https://twitter.com/CNASIR2_0";
const githubURL = "https://github.com/C-NASIR";

//Footer Styling
const useStyles = makeStyles((theme) => ({
  heading: {
    display: "flex",
    backgroundColor: "black",
    borderTopColor: "white",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: "5rem",
    marginBottom: ".2em",
    fontFamily: "Indie Flower, cursive",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));

//Footer function
export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.heading}>
        <h1 className={classes.text}> &copy; C NASIR</h1>
      </div>
      <div className={classes.heading} style={{ paddingBottom: "5em" }}>
        <IconButton
          aria-label="Going to Github Url"
          size="medium"
          style={{ color: "white" }}
          component={"a"}
          rel="noopener noreferrer"
          target="_blank"
          className={classes.icon}
          href={githubURL}
        >
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: "2em" }} />
        </IconButton>
        <IconButton
          aria-label="Going to twitter url"
          size="medium"
          style={{ color: "white" }}
          component={"a"}
          rel="noopener noreferrer"
          target="_blank"
          className={classes.icon}
          href={twitterURL}
        >
          <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "2em" }} />
        </IconButton>
      </div>
    </>
  );
}
