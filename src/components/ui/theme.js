import { createMuiTheme } from "@material-ui/core/styles";
const black = "#000000";
const white = "white";
const lightGreen = "#2afd18";
const lightBlue = "#00b0ff";
const darkBlue = "#0d47a1";
export default createMuiTheme({
  palette: {
    common: {
      black: black,
      lightBlue: lightBlue,
      white: white,
      lightGreen: lightGreen,
      darkBlue: darkBlue,
    },
  },
});
