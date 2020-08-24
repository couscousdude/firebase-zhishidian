import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ProfileDetails from './ProfileDetails';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    card: {
        padding: theme.spacing(2),
    },
    circularLoading: {
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
    },
}));

function Profile(props) {
    const { setLoading, setInitialLoading } = props;
    const classes = useStyles();

    React.useEffect(() => {
        setTimeout(() => setInitialLoading(false), 1000);
    });

    return (
        <Grid container spacing={2} className={classes.root} style={{padding: 24}} justify='center'>
            <Grid item xs={12} md={10} sm={12} className={classes.card}>
                <ProfileDetails userDetails={{
                    username: 'test',
                    firstName: 'test',
                    lastName: 'test',
                    profileColor: 'test',
                    bio: 'test'
                }}
                />
            </Grid>
            <Grid item xs={12} />
            <Grid item xs={12}>
                <Typography variant='h4' align='center'>
                    Recent Activity:
                </Typography>
            </Grid>
            <Grid item md={8} sm={12} />
            <Grid item xs xl={12} />
            {/* {   this.state.userPosts.length
                ? this.state.userPosts.map(currentPost => (
                <>
                <Grid item xs={12} xl={5} md={5} sm={5} lg={5} className={classes.post}>
                    <Post 
                    post={
                        {
                            "title": currentPost.title,
                            "author": currentPost.author,
                            "content": currentPost.content,
                            "date": currentPost.time,
                            "pfColor": currentPost.pfColor
                        }
                    }
                    pushNotification={this.handleNotification}
                    />
                </Grid>
                <Grid item xl={8} md={8} sm={8} lg={8} />
                <GetMore 
                    startId={this.state.userPosts.length ? this.state.userPosts[this.state.userPosts.length - 1].id : 0} 
                    getMorePosts={this.handleGetMorePosts} 
                />
                </>
            ))
                : (
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <CircularProgress className={classes.circularLoading} />
                    </div>
                )
            } */}
        </Grid>
    )
}

export default Profile;