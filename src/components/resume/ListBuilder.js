import React from "react";

//Material-UI
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import DoneAllRoundedIcon from "@material-ui/icons/DoneAllRounded";

//Font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
  leading: {
    fontFamily: "Righteous, cursive",
    color: theme.palette.common.white,
    flex: 1,
    [theme.breakpoints.down("md")]: {
      fontSize: "1em",
    },
  },
  following: {
    flex: 10,
    fontFamily: "Bubblegum Sans, cursive;",
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      fontSize: ".8em",
      flex: 8,
    },
    [theme.breakpoints.down("sm")]: {
      flex: 6,
    },
    [theme.breakpoints.down("xs")]: {
      flex: 3,
    },
  },
  title: {
    textAlign: "center",
    color: theme.palette.common.white,
  },
  listItem: {
    [theme.breakpoints.down("md")]: {
      marginBottom: ".5em",
    },
  },
}));

export default function ListBuilder(props) {
  const classes = useStyles();

  const findIcon = (name) => {
    switch (name) {
      case "html":
        return faHtml5;
      case "react":
        return faReact;
      case "js":
        return faJs;
      case "css3":
        return faCss3;
      default:
        return;
    }
  };
  return (
    <>
      <h1 className={classes.title}>{props.title}</h1>
      <List className={classes.list} style={{ ...props.listStyles }}>
        {props.list.map((l) => (
          <ListItem
            className={classes.listItem}
            style={{ ...props.listItemStyles }}
            key={l[0]}
          >
            <ListItemIcon>
              {l[2] != null ? (
                <FontAwesomeIcon
                  icon={findIcon(l[2])}
                  color="white"
                  size="lg"
                />
              ) : (
                <DoneAllRoundedIcon
                  fontSize="large"
                  style={{ color: "white" }}
                />
              )}
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h5" style={{ ...props.listItemTextStyles }}>
                <span className={classes.leading}>
                  {l[0]} {l[2] ? " " : " : "}{" "}
                </span>
                <span className={classes.following}>{l[1]} </span>
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}
