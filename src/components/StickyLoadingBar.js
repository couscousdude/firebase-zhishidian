import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        position: "fixed",
        width: '100%'
    }
});

export default function StickyLoadingBar(props) {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <LinearProgress {...props} />
        </div>
    )
}