import React from 'react';
import { Card, CardContent, Avatar, Typography, Grid } from '@material-ui/core';
import { red, blue, green, cyan } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    profileName: {
        // marginLeft: 4
    },
    red: {
        backgroundColor: red[500],
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    blue: {
        backgroundColor: blue[500],
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    green: {
        backgroundColor: green[500],
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    cyan: {
        backgroundColor: cyan[500],
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
}));

function ProfileDetails(props) {
    const { userDetails } = props;
    const classes = useStyles();

    const profileColorPicker = (color) => {
        switch(color) {
            case 'blue':
                return classes.blue;
            case 'green':
                return classes.green;
            case 'red':
                return classes.red;
            case 'cyan':
                return classes.cyan;
            default:
                return classes.blue;
        }
    }

    return(
        <Card variant="outlined" className={classes.root}>
            <CardContent>
                <Grid container className={classes.root} justify={'flex-start'} spacing={2}>
                    <Grid item>
                        <Avatar aria-label="profile" className={profileColorPicker(userDetails.profileColor)} variant='rounded'>
                            <Typography variant='h1'>
                                {userDetails.username ? userDetails.username[0].toUpperCase() : null}
                            </Typography>
                        </Avatar>
                    </Grid>
                    <Grid item xs={12} xl>
                        <div className={classes.profileName}>
                            <Typography variant='h2'>
                                {userDetails.username}
                            </Typography>
                            <Typography variant='h5'>
                                {userDetails.firstName} {userDetails.lastName}
                            </Typography>
                            {/* <Typography variant='body2' color='textSecondary'>
                                Student
                            </Typography> */}
                        </div>
                    </Grid>
                    <Grid item xs xl={12}>
                        <Typography variant='h6' style={{fontWeight: 500}}>
                            Bio:
                        </Typography>
                        <Typography paragraph style={{wordWrap: 'break-word'}}>
                            {userDetails.bio}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default ProfileDetails;

ProfileDetails.propTypes = {
    userDetails: PropTypes.object
}