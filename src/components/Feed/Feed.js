import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Main from './Main';
import post1 from './post1';

const useStyles = makeStyles(theme => ({
    text: {
        color: theme.primary
    }
}));

const posts = [post1];

export default function Feed(props) {
    const classes = useStyles();

    return(
        <Main title='posts' posts={posts} />
    )
}