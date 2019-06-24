import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        color: '#f29520'
    },
    headers: {
        fontSize: '114px',
    }
});

const Home = () =>{
    const classes = useStyles();
    return(
        <React.Fragment className={"home"}>
            <h1 className={`${classes.root} ${classes.headers}`}>Orange</h1>
            <h1 className={`${classes.headers}`}>Lightning</h1>
        </React.Fragment>
    );

};

export default Home;