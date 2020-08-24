import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import { IconButton, ButtonGroup } from '@material-ui/core';
import PropTypes from 'prop-types';

function Actions(props) {
    const { onAddClick, onRefreshClick } = props;

    return (
        <ButtonGroup variant='text' color='primary'>
            <IconButton onClick={onAddClick}>
                <AddIcon />
            </IconButton>
            <IconButton onClick={onRefreshClick}>
                <RefreshIcon />
            </IconButton>
        </ButtonGroup>
    )
}
Actions.propTypes = {
    onAddClick: PropTypes.func,
    onRefreshClick: PropTypes.func
}
Actions.defaultProps = {
    onAddClick: () => void 0,
    onRefreshClick: () => void 0
}

export default Actions;