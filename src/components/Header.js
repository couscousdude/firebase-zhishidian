import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Typography, Button, Toolbar, Collapse, TextField } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';
import SearchBar from 'material-ui-search-bar';
import ClearIcon from '@material-ui/icons/Clear';

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
  searchBar: {
    width: '0%',
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.short
    }),
  },
  searchExpanded: {
    width: '100%',
    display: 'visible'
  },
  noDisplay: {
    display: 'none'
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { title, mobile } = props;
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  }

  return (
    <div style={{marginBottom: 20}}>
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
      <IconButton 
        onClick={handleExpand}
        style={expanded && !mobile ? {marginLeft: 20} : null}
      >
        { expanded 
          ? <ClearIcon />
          : <SearchIcon />
        }
      </IconButton>
      <SearchBar
      className={clsx(classes.searchBar, {
        [classes.searchExpanded]: expanded,
        }
        )}
        color='secondary'
        searchIcon={
          expanded
            ? <SearchIcon />
            : <SearchIcon style={{transform: 'scale(0)'}} />
        }
        disabled={!expanded}
        cancelOnEscape
      />
      </Toolbar>
    </div>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};