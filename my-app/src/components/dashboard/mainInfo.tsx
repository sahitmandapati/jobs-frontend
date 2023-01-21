import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";
import useToken from "../../customHooks/useToken";
import useAccountType from "../../customHooks/useAccountType";

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
    height: "100vh",
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
  const { token, setToken } = useToken();
  const { accountType, setAccountType } = useAccountType();
  const [jobs, setJobs] = useState<any>([])

  // let api : string

  useEffect(() => {
    // if(accountType === 'poster') {
      let api = `https://jobs-api-1.vercel.app/api/v1/jobs`
    // }else if (accountType === 'applier'){
    //   let api = `https://jobs-api-1.vercel.app/api/v1/applications`
    // }
    
    axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => {
        console.log(res.data.jobs);
        setJobs(res.data.jobs)
      }
      )
  }, [])



  return (
    <div className={classes.bodyContainer} style={{ overflowY: "scroll" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1.5}>
          {jobs.map((job : any)  => (
            <Grid item xs={4}>
              <Item>{job.company}</Item>
              <Item>{job.position}</Item>
            </Grid>
          ))}

        </Grid>
      </Box>
    </div>
  );
}

export default MainInfo;
