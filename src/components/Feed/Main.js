import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import Post from './Post';
import Sidebar from './Sidebar';
import GitHubIcon from '@material-ui/icons/GitHub';
import monthYearCounter, { months as calendarMonths } from '../../utils/monthYearCounter';
import PlaceHolderPost from './PlaceHolderPost';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

const months = monthYearCounter(3, 2020);

export default function Main(props) {
  const classes = useStyles();
  const { posts, title, archive } = props;

  return (
    <Grid container spacing={2} justify='flex-start'>
        <Grid item xs={12} md={8} sm={8}>
          <Typography variant="h4" gutterBottom>
              {!archive.length ? title : `${calendarMonths[archive[0]]} ${archive[1]}`}
          </Typography>
          <Divider />
        </Grid>
        { posts.length
          ? (
            posts.map((post) => (
              <Grid item xs={12} md={8} sm={8}>          
                <Post post={post} />
              </Grid>
            ))) 
            : (
              <Grid item xs={12} md={8} sm={8}>
                <PlaceHolderPost />
              </Grid>
            )
        }
          <Sidebar 
            title='nerd'
            description='nerd'
            archives={months}
            social={[
              { name: 'GitHub', icon: GitHubIcon, href: 'https://github.com/couscousdude/firebase-zhishidian' },
            ]}
          />
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};