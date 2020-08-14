import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Main from './Main';
import post1 from './post1';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    text: {
        color: theme.primary
    }
}));

export default function Feed(props) {
    const classes = useStyles();
    const { setInitialLoading, setLoading } = props;

    const [posts, setPosts] = React.useState([]);
    const [archive, setArchive] = React.useState([]);

    const history = useHistory();

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
  
    React.useEffect(() => {
      let urlArchiveParam = new URLSearchParams(history.location.search).get('archive');
      if (urlArchiveParam) {
        if (urlArchiveParam.split(' ').length !== 2 
            || urlArchiveParam.split(' ')[0] < 1 
            || urlArchiveParam.split(' ')[0] > 12
            || urlArchiveParam.split(' ')[1].toString().length !== 4) {
            history.push('/feed');
        } else {
            setArchive(urlArchiveParam.split(' '));
            // api call to fetch archives
            setLoading(true);
            setPosts([]);
            setTimeout(() => {
                setLoading(false);
                setPosts([post1]);
            }, 1000);
        }
    } else {
        setArchive([]);
    }
    }, [history.location.search, setLoading, history]);

    return(
        <Main title='Recent activity' posts={posts} archive={archive} />
    )
}