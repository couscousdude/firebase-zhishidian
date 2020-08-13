import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid container spacing={2} justify='center'>
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            {/* <Divider /> */}
            {posts.map((post) => (
                <Post post={post} />
            ))}
        </Grid>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};