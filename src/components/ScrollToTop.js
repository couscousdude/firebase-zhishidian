import React from 'react';
import { useScrollTrigger, Fab, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function getPosition(element) {
    let xPosition = 0;
    let yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
}

function ScrollTop(props) {
    const { children, anchor } = props;
    const classes = useStyles();

    const scrollAnchor = document.querySelector(anchor);
    const anchorCoords = getPosition(scrollAnchor);

    const trigger = useScrollTrigger({
        target: window,
        disableHysteresis: true,
        threshold: anchorCoords.y + 100,
    });

    const handleClick = () => {
        if (scrollAnchor) {
            scrollAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role='presentation' className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    anchor: PropTypes.string.isRequired
}

function BackToTop(props) {
    const { bottomOffset } = props;

    return (
        <ScrollTop {...props}>
            <div style={{marginBottom: bottomOffset}}>
                <Fab color='primary' aria-label='scroll back to top'>
                    <KeyboardArrowUpIcon />
                </Fab>
            </div>
        </ScrollTop>
    )
}

BackToTop.propTypes = {
    anchor: PropTypes.string.isRequired,
    bottomOffset: PropTypes.string
}
BackToTop.defaultProps = {
    bottomOffset: '0px'
}

export default BackToTop;