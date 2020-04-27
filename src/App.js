import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/theme";

//import my components
import Resume from "./components/resume/Resume";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Resume />
    </ThemeProvider>
  );
}

export default App;
