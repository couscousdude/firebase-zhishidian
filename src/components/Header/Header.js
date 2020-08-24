import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Typography, Toolbar, IconButton, ClickAwayListener } from '@material-ui/core';
import SearchBar from './SearchBar';
import ArrowForwardIosTwoToneIcon from '@material-ui/icons/ArrowForwardIosTwoTone';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20, 
    paddingTop: '10px'
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    fontWeight: 500
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  expand: {
    transform: 'rotate(0deg)',
    // marginRight: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { title, mobile } = props;
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  }

  return (
    <ClickAwayListener onClickAway={() => { if (expanded) setExpanded(false) }}>
      <div className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h5"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
            align='center'
            component={Link}
            to='/'
            style={{textDecoration: 'none'}}
          >
              {title}
          </Typography>
          <SearchBar 
            expanded={expanded}
            close={handleExpand}
          />
          <IconButton 
            onClick={handleExpand}
            style={expanded && !mobile ? {marginLeft: 20} : null}
            className={clsx(
                classes.expand, {
                  [classes.expandOpen]: expanded
                }
              )}
          >
            { expanded 
              ? <ArrowForwardIosTwoToneIcon color='primary' />
              : <SearchIcon color='primary' />
            }
          </IconButton>
      </Toolbar>
      </div>
    </ClickAwayListener>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};