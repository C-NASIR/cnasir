import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
//importing my own components
import SectionTitle from "../../ui/SectionTitle";
import Tree from "../../ui/Tree";
export default function History(props) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div style={{ marginBottom: "3em" }}>
      <SectionTitle title="History" />
      <Tree down={matchesMD} />
    </div>
  );
}
