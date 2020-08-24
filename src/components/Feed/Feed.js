import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Main from './Main';
import { useHistory } from 'react-router-dom';
import getPosts from '../../dbInterface/getPosts';

const useStyles = makeStyles(theme => ({
    text: {
        color: theme.primary
    }
}));

const mainFeaturedPost = {
    title: 'Sample main featured post',
    description:
      "description of featured post",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };
  const featuredPosts = [
    {
      title: 'Sample secondary featured post',
      date: 'August 19',
      description:
        'description',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Sample secondary featured post',
      date: 'August 16',
      description:
        'description',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];

export default function Feed(props) {
    const classes = useStyles();
    const { setInitialLoading, setLoading } = props;

    const [posts, setPosts] = React.useState([]);
    const [archive, setArchive] = React.useState([]);

    const history = useHistory();

    React.useEffect(() => {
        // fetch posts here
        // placeholder api call:
        const handleGetPosts = async () => {
          const res = await getPosts();
          setPosts(res);
          setLoading(false);
          setInitialLoading(false);
        }
        setLoading(true);
        handleGetPosts();
    }, [setInitialLoading, setLoading]);
  
    React.useEffect(() => {
      const handleGetArchives = async () => {
        setPosts([]);
        setLoading(true);
        const res = await getPosts();
        setPosts(res);
        setLoading(false);
        setInitialLoading(false);
      }
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
            handleGetArchives();
        }
    } else {
        setArchive([]);
    }
    }, [history.location.search, setLoading, history, setInitialLoading]);

    const handleReload = async () => {
        setLoading(true);
        setPosts([]);
        setPosts(await getPosts());
        setLoading(false);
    }

    return(
        <div style={posts ? {} : {overflow: "hidden"}}>
            <Main 
                title='Recent posts' 
                posts={posts} 
                archive={archive} 
                mainFeaturedPost={mainFeaturedPost}
                featuredPosts={featuredPosts}
                reload={handleReload}
            />
        </div>
    )
}