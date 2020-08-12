import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    text: {
        color: theme.primary
    }
}));

export default function Feed(props) {
    const classes = useStyles();

    return(
        <h1 className={classes.text}>
            nerd
        </h1>
    )
}