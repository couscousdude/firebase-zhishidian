import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    profileName: {
        // marginLeft: 4
    },
}));

function ProfileSkeleton(props) {
    const classes = useStyles();

    return(
        <Card variant="outlined" className={classes.root}>
            <CardContent>
                <Grid container className={classes.root} justify={'flex-start'} spacing={2}>
                    <Grid item>
                        <Skeleton variant='rect' width={250} height={250} />
                    </Grid>
                    <Grid item xs={12} xl>
                        <div className={classes.profileName}>
                            <Typography variant='h2'>
                                <Skeleton variant='text' width={200} />
                            </Typography>
                            <Typography variant='h5'>
                                <Skeleton variant='text' width={250} />
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
                            <Skeleton variant='text' height={100} />
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default ProfileSkeleton;