import { AppBar, Box, Grid, makeStyles, Paper, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";


import './App.css';
import AlHamichyah from './brochos components/AlHamichyah';
import AsherYazar from "./brochos components/AsherYazar";
import BirchasHamazon from './brochos components/BirchasHamazon';
import Home from './brochos components/Home';
import TefillasHaderech from './brochos components/TefillasHaderech';
import BlessDeck from './media/BlessDeck.png';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 12, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));


function App() {

  return (
    <div className="App">

      <Router>
        <AppBar>

          <Link style={{ textDecoration: 'none', color: 'black' }} to="/"> <img src={BlessDeck} alt=""></img></Link>

        </AppBar>
        <div>
          <Switch>
            <Route path="/asher">
              <AsherYazar />
            </Route>
            <Route path="/bh">
              <BirchasHamazon />
            </Route>
            <Route path="/ahm">
              <AlHamichyah />
            </Route>
            <Route path="/thd">
              <TefillasHaderech />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
