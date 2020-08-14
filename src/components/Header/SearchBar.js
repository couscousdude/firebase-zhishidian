import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import clsx from 'clsx';
import { withResizeDetector } from 'react-resize-detector';
import { IconButton, Divider, InputBase, Paper, Zoom, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { deepPurple, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    // width: '0%',
    display: 'flex',
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.standard 
    }),
    width: '0',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  searchExpanded: {
    width: '100%',
    display: 'visible',
    // padding: '2px 4px'
  },
  padSearch: {
    padding: '2px 4px'
  }
}));

const searchBarTheme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[`A400`],
    },
    secondary: {
      main: red[`400`]
    },
  },
});

function SearchBar(props) {
  const classes = useStyles();
  const { expanded, width } = props;

  const [searchValue, setSearchValue] = React.useState('');

  const handleSearch = () => {
    console.log(searchValue);
  }

  const searchInput = React.useRef(null);

  const clearSearch = () => {
    setSearchValue('');
    searchInput.current.focus();
  }

  const focusTextInput = () => {
    searchInput.current.focus();
  }

  React.useEffect(() => {
    if (expanded) {
      focusTextInput();
    }
  }, [expanded]);

  return (
    <>
      <ThemeProvider theme={searchBarTheme}>
        <Paper className={clsx(classes.root, {
          [classes.searchExpanded]: expanded,
          [classes.padSearch]: width
        })}
        >
          <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            disabled={!expanded}
            onChange={e => setSearchValue(e.target.value)}
            onKeyPress={e => { 
              if (e.key === 'Enter') {
                handleSearch();
              }}}
            value={searchValue}
            type='text'
            inputRef={searchInput}
          />
          <Zoom in={searchValue}>
            <IconButton 
              color="secondary" 
              className={classes.iconButton} 
              aria-label="clear" 
              disabled={!expanded}
              onClick={clearSearch}
            >
            { expanded
                  ? <ClearIcon />
                  : <ClearIcon style={{transform: 'scale(0)'}} />
              }
            </IconButton>
          </Zoom>
          <Divider className={classes.divider} orientation="vertical" style={expanded ? {} : {display: 'none'}} />
          <IconButton 
            color='primary' 
            className={classes.iconButton} 
            aria-label="search" 
            disabled={!expanded}
            onClick={handleSearch}
          >
            { expanded
                ? <SearchIcon />
                : <SearchIcon style={{transform: 'scale(0)'}} />
            }
          </IconButton>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default withResizeDetector(SearchBar);