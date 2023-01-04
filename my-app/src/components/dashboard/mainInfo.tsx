import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import ImageListItem from "@mui/material/ImageListItem";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "0px",
}));

const useStyles = makeStyles({
  bodyContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#edecec",
    padding: "40px",
    gap: "40px",
    height:"100vh",
    width: "100vw",
  },

  boxUp: {
    padding: "16px",
    height: "30px",
    //width: "97.5%",
    // border: '1px solid black',
    backgroundColor: "white",
  },
});

function MainInfo() {
  const classes = useStyles();

//   const [products, setProducts] = useState([]);

    useEffect(() => {
      
    }, [])
    


  return (
    <div className={classes.bodyContainer} style={{ overflowY: "scroll" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1.5}>
          {/* {products.map((items) => (
            <Grid item xs={4}>
              <Item>{items.ProductName}</Item>
              <Item>
                {" "}
                <ImageListItem key={items.ProductName}>
                  <img src={items.Image} />
                </ImageListItem>
              </Item>
              <Item>Price &#8377; {items.Cost}</Item>
            </Grid>
          ))} */}

        </Grid>
      </Box>
    </div>
  );
}

export default MainInfo;
