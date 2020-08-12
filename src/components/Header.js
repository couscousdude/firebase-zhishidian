import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Typography, Button, Toolbar } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <Toolbar className={classes.toolbar}>
    <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        className={classes.toolbarTitle}
    >
        {title}
    </Typography>
    <IconButton>
        <SearchIcon />
    </IconButton>
    </Toolbar>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};