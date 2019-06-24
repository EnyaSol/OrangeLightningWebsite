import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        textAlign: 'center'
    }
});

function App() {
    const classes = useStyles();
  return (
    <Container classes={{root: classes.root}}>
      <Home/>
    </Container>
  );
}

export default App;
