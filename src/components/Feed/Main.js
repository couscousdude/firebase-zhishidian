import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import Post from './Post';
import Sidebar from './Sidebar';
import GitHubIcon from '@material-ui/icons/GitHub';
import monthYearCounter, { months as calendarMonths } from '../../utils/monthYearCounter';
import PlaceHolderPost from './PlaceHolderPost';
import moment from 'moment';
import ScrollToTop from '../ScrollToTop';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Actions from './Actions';
import CreatePost from './CreatePost';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: '500'
  },
  featuredPosts: {
    marginBottom: '20px'
  }
}));

const months = monthYearCounter(moment().month(), moment().year());

export default function Main(props) {
  const classes = useStyles();
  const { posts, title, archive, featuredPosts, mainFeaturedPost, reload } = props;

  const [createPostExpanded, setCreatePostExpanded] = React.useState(false);

  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4} className={classes.featuredPosts}>
      { featuredPosts.map(post => (
        <FeaturedPost key={post.title} post={post} />
      ))
      }
      </Grid>
      <Grid container spacing={2} justify='flex-start' direction='row'>
        <Grid item xs={12} md={8} sm={12}>
          <Typography variant="h4" gutterBottom className={classes.heading} id='feed-anchor'>
              {!archive.length ? title : `${calendarMonths[archive[0]]} ${archive[1]}`}
          </Typography>
          <Divider />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Actions 
            onAddClick={() => setCreatePostExpanded(!createPostExpanded)} 
            onRefreshClick={() => reload()}
          />
        </Grid>
        <Grid item md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} sm={12}>
              <CreatePost expanded={createPostExpanded} onCreate={reload} onFinish={() => setCreatePostExpanded(false)} />
            </Grid>
          { posts.length
          ? (
            posts.map((post) => {
              return [...Array(3)].map(() => (
                <Grid item xs={12} md={12} sm={12}>          
                  <Post post={post} />
                </Grid>
              ))
            })) 
            : [...Array(3)].map(() => (
              <Grid item xs={12} md={12} sm={12}>
                <PlaceHolderPost />
              </Grid>
            ))
          }
          </Grid>
        </Grid>
        <Grid item md={4} sm={8} xs={8}>
          <Sidebar 
            title='nerd'
            description='nerd'
            archives={months}
            social={[
              { name: 'GitHub', icon: GitHubIcon, href: 'https://github.com/couscousdude/firebase-zhishidian' },
            ]}
          />
        </Grid>
        <ScrollToTop anchor='#feed-anchor' bottomOffset={window.innerWidth <= 768 ? '60px' : '0px'} />
      </Grid>
    </>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};