import { Box, SvgIcon, Typography } from "@mui/material";
import React from "react";

export default function PostersHeader(props : any) {

  return (
    <Box
      className="posters-head-container"
      sx={{
        height: 64,
        width: 1,
        bgcolor: "#00bcd4",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: 64,
          width: 1,
          bgcolor: "#00bcd4",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <SvgIcon
          {...props}
          viewBox="0 0 24 24"
          height="24"
          width="24"
          sx={{ paddingLeft: 3, paddingRight: 3 }}
          style={{ color: "white" }}
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </SvgIcon>
        <Typography variant="h5" style={{ color: "white" }}>
          Udhyogam.com
        </Typography>
      </Box>
      <Typography style={{ fontSize: 12, color: "white", padding: "15px" }}>
        {`WELCOME `}
      </Typography>
    </Box>
  );
}
