import { CssBaseline, Grid } from "@material-ui/core";
import React from "react";
import "./App.css";
import Details from "./components/Details/Details";
import Main from "./components/main/Main";
import {useStyles} from './styles'

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details title="Income"/>
        </Grid>
        <Grid item xs={12} sm={3}> <Main/> </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense"/>
        </Grid>
      </Grid>
      <CssBaseline />
    </div>
  );
}

export default App;
