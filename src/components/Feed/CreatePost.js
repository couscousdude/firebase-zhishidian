import React, { useState } from 'react';
import { Card, CardContent, TextField, Typography, Collapse, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import postItem from '../databaseManagement/postItem';
import { Divider } from '@material-ui/core';
import CircularStatic from '../CircularStatic';
import PropTypes from 'prop-types';

const postItem = async (one, two, three, four) => {
    const timeoutPromise = () => new Promise((resolve, ms) => {
        setTimeout(resolve, ms);
    });
    await timeoutPromise();
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        // marginRight: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    },
    erroredText: {
        color: 'red'
    }
}));

function InlineCreatePost(props) {
    const classes = useStyles();
    const { onCreate, onFinish, onError, expanded } = props;

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [titleErrored, setTitleErrored] = useState(false);
    const [contentErrored, setContentErrored] = useState(false);
    const [titleErrorMessage, setTitleErrorMessage] = useState('');

    const handleContentInputChange = (event) => {
        setContent(event.target.value);
        setContentErrored(false);
    }

    const handleTitleInputChange = (event) => {
        setTitle(event.target.value);
        setTitleErrored(false);
        if (event.target.value.length > 20) {
            setTitleErrorMessage('Title cannot be more than 20 characters!')
            setTitleErrored(true);
        }
    }
    
    const whiteSpaceCheck = (string) => {
        const whiteSpaceRegex = /\s/g;
        return string.replace(whiteSpaceRegex, '').length ? true : false;
    }

    const handleCreatePost = async () => {
        if (whiteSpaceCheck(title) && whiteSpaceCheck(content) && title.length <= 20 && content.length <= 400) {
            try {
                onCreate();
                await postItem();
                onFinish();
            } catch(error) {
                onError();
            }
        } else if (!whiteSpaceCheck(title)) {
            setTitleErrorMessage('Title cannot just be whitespace')
            setTitleErrored(true);
        } else {
            setContentErrored(true);
        }

    }

    return(
    <Collapse in={expanded} timeout='auto' collapsedHeight='0px'>
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h6">
                    What's going on?
                </Typography>
                <TextField
                    fullWidth
                    id="title"
                    margin='dense'
                    label='Enter a title for your post'
                    variant='filled'
                    onChange={handleTitleInputChange}
                    defaultValue={title}
                    error={titleErrored}
                    helperText={titleErrored ? titleErrorMessage : null}
                />
                <TextField
                    fullWidth
                    margin="dense"
                    id="content"
                    label='Enter something for the body of your post'
                    type="content"
                    variant="outlined"
                    multiline
                    rows={12}
                    onChange={handleContentInputChange}
                    error={contentErrored}
                    helperText={contentErrored ? 'Content cannot be only whitespace' : null}
                />
                    <div>
                        <Divider style={{marginBottom: 5}} />
                        <CircularStatic
                        variant='static' 
                        value={content.length < 400 ? Math.ceil(content.length/4) : 100} 
                        size={40} 
                        color={content.length > 400 ? 'secondary': 'primary'} />
                        <Divider />
                        <Typography variant='caption' className={classes.erroredText}>
                            { content.length > 400
                                ? '400 character limit reached!'
                                : null
                            }
                        </Typography>
                    </div>
                    <div>
                        <Button color="inherit" disabled={!title || !content || title.length > 20 || content.length > 400 ? true : false} onClick={handleCreatePost}>
                            Create
                        </Button>
                    </div>
            </CardContent>
        </Card>
    </Collapse>
    );
}
InlineCreatePost.propTypes = {
    onCreate: PropTypes.func,
    onFinish: PropTypes.func,
    onError: PropTypes.func
}
InlineCreatePost.defaultProps = {
    onCreate: () => void 0,
    onFinish: () => void 0,
    onError: () => void 0
}
export default InlineCreatePost;