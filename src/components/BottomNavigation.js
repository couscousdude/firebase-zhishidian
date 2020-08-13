import React from 'react';
import { BottomNavigation, BottomNavigationAction, AppBar, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import PeopleIcon from '@material-ui/icons/People';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        opacity: 1
    },
    navigation: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const BottomNavLabel = (props) => {
    const { children } = props;

    return(
        <Typography variant='caption' color='inherit'>{children}</Typography>
    )
}

export default function MobileNavigation(props) {
    const classes = useStyles();

    let location = useLocation();
    let navPathname = location.pathname.slice();
    navPathname = navPathname.split('/')[1];
    return(
        <AppBar>
            <div className={classes.stickToBottom}>
                <BottomNavigation className={classes.navigation} showLabels value={navPathname}>
                    <BottomNavigationAction 
                        label={<BottomNavLabel>Feed</BottomNavLabel>} 
                        icon={<DynamicFeedIcon color='inherit' />}
                        value='feed'
                        component={Link}
                        to='/feed'
                    />
                    <BottomNavigationAction 
                        label={<BottomNavLabel>My Profile</BottomNavLabel>} 
                        icon={<AccountCircleIcon color='inherit' />} 
                        value='profile'
                        component={Link}
                        to='/users'
                    />
                    <BottomNavigationAction 
                        label={<BottomNavLabel>Users</BottomNavLabel>} 
                        icon={<PeopleIcon color='inherit' />}
                        value='users' 
                        component={Link}
                        to='/users'
                    />
                </BottomNavigation>
            </div>
        </AppBar>
    )
}