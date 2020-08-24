import React from 'react';
import { Card, CardContent, Collapse, CardActionArea, Typography, CardActions, IconButton, Popover } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Markdown from '../Markdown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { grey } from '@material-ui/core/colors';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
    moreButton: {
        marginLeft: 'auto'
    },
    typography: {
        padding: theme.spacing(2),
    },
    card: {
        backgroundColor: grey['50']
    },
    postTitle: {
        fontWeight: 500
    }
  }));

export default function Post(props) {
    const { post } = props;
    const { title, author, date, body } = post;
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'post settings' : undefined;

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
      };

    return(
        <Card variant='outlined' className={classes.card}>
            <Collapse 
                in={expanded}
                collapsedHeight={300}
            >
                <CardActionArea onClick={() => setExpanded(!expanded)}>
                    <CardContent>
                        <Typography variant='h5' className={classes.postTitle}>{title}</Typography>
                        <Typography variant='caption'>{moment.unix(date).fromNow()} ago by <b>{author}</b></Typography>
                        <Markdown className={classes.markdown} key={body.substring(0, 40)}>
                        {body}
                        </Markdown>
                    </CardContent>
                </CardActionArea>
            </Collapse>
            <CardActions>
                <IconButton className={classes.moreButton} onClick={handleMenuOpen}>
                    <MoreHorizIcon />
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}
                >
                    <Typography className={classes.typography}>Settings</Typography>
                </Popover>
            </CardActions>
        </Card>
    )
}