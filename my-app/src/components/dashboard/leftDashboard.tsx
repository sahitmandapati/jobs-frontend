import { Box, SvgIcon } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const LeftDashBoardData = [
  {
    icon: (
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
    ),
    text: "Dashboard",
  },

//   {
//     icon: (
//       <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
//     ),
//     text: "Customers",
//   },

//   {
//     icon: (
//       <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path>
//     ),
//     text: "Segments",
//   },

//   {
//     icon: (
//       <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
//     ),
//     text: "Orders",
//   },

//   {
//     icon: (
//       <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path>
//     ),
//     text: "Posters",
//   },

//   {
//     icon: (
//       <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path>
//     ),
//     text: "Categories",
//   },

//   {
//     icon: (
//       <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
//     ),
//     text: "Reviews",
//   },

//   {
//     icon: (
//       <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
//     ),
//     text: "Configuration",
//   },

  // {
  //   icon: <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path>,
  //   text: 'Logout'
  // }
];

const useStyles = makeStyles({
  leftDashboardContainers: {
    height: "fit-content",
  },

  boxItems: {
    display: "flex",
    alignItems: "center",
    padding: "16px 40px 16px 16px",
    gap: "40px",

    "&:hover": {
      backgroundColor: "#edecec",
      cursor: "pointer",
    },
  },
});

function LeftDashboard() {
  const classes = useStyles();
//   const navigate = useNavigate();
  //const dispatch = useDispatch();
  const logout = () => {
    // localStorage.removeItem("auth");
    // localStorage.setItem("username", JSON.stringify(""));
    // navigate("/");
  };
  return (
    <div className={classes.leftDashboardContainers}>
      {LeftDashBoardData.map((item) => {
        return (
          <Box className={classes.boxItems}>
            <SvgIcon
              viewBox="0 0 24 24"
              height="24"
              width="24"
              style={{ color: "#757575" }}
            >
              <path d={item.icon.props.d}></path>
            </SvgIcon>
            <div>{item.text}</div>
          </Box>
        );
      })}

      <Box className={classes.boxItems} onClick={() => logout()}>
        <SvgIcon
          viewBox="0 0 24 24"
          height="24"
          width="24"
          style={{ color: "#757575" }}
        >
          <path
            d={
              "M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
            }
          ></path>
        </SvgIcon>

        <div>Logout</div>
      </Box>
    </div>
  );
}

export default LeftDashboard;
