import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Main from './Main';
import post1 from './post1';
import InitialLoadingScreen from '../InitialLoadingScreen';

const useStyles = makeStyles(theme => ({
    text: {
        color: theme.primary
    }
}));

export default function Feed(props) {
    const classes = useStyles();
    const { initialLoading, setInitialLoading, setLoading } = props;


    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        // fetch posts here
        // placeholder api call:
        setLoading(true);
        setTimeout(() => {
            setPosts([post1]);
            setLoading(false);
            setInitialLoading(false);
        }, 1000);
    }, [setInitialLoading, setLoading]);

    return(
        posts.length
            ? <Main title='posts' posts={posts} /> 
            : null
    )
}