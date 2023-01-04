import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PostersHeader from "./posterHeader";
import MainInfo from "./mainInfo";
import LeftDashboard from "./leftDashboard";



const useStyles = makeStyles({
  viewHeight: {
    minHeight: "100vh",
  },
  viewHeightPort: {
    display: "flex",
    backgroundColor: "rgb(255, 255, 255)",
    transition: "margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
    boxShadow: "rgb(0 0 0 / 12%) 0px 1px 6px, rgb(0 0 0 / 12%) 0px 1px 4px",
    borderRadius: "2px",
  },
});
function Home() {
  const classes = useStyles();

  return (
    <div className={classes.viewHeight}>
      <PostersHeader />
      <Box className={classes.viewHeightPort}>
        <LeftDashboard />
        <MainInfo />
      </Box>
    </div>
  );
}

export default Home;
