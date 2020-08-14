import React from 'react';
import { Typography, ThemeProvider, Fade } from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, grey } from '@material-ui/core/colors';
import CircularProgress from './CircleLoaderLabeled';

const useStyles = makeStyles({
    root: {
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    text: {
        fontWeight: 300,
    },
    blank: {
        opacity: 1,
        background: grey[100],
        width: '100%',
        height: '100%',
        zIndex: 10,
        top: 0,
        left: 0,
        position: 'fixed'
    }
});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: deepPurple[900]
        },
        secondary: {
            main: deepPurple['A400']
        }
    }
});

export default function InitialLoadingScreen(props) {
    const classes = useStyles();
    const { on, setInitialLoading } = props;

    const handleOnExit = () => {
        setInitialLoading(false);
    }

    return(
        <ThemeProvider theme={theme}>
            <Fade in={on} unmountOnExit onExited={handleOnExit}>
                <div className={classes.blank}>
                    <div className={classes.root}>
                        <Typography variant='h1' className={classes.text} align='center' color='primary'>
                            Zhi Shi Dian
                        </Typography>
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: 100}}>
                            <CircularProgress 
                                disableShrink 
                                color='secondary' 
                                size={150} 
                            />
                        </div>
                    </div>
                </div>
                </Fade>
        </ThemeProvider>
    )
}