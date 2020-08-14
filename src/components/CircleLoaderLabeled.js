import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import AllInclusiveTwoToneIcon from '@material-ui/icons/AllInclusiveTwoTone';
import Box from '@material-ui/core/Box';

function CircleLoaderLabeled(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <AllInclusiveTwoToneIcon style={{fontSize: '80px'}} color='primary' />
      </Box>
    </Box>
  );
}

CircleLoaderLabeled.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
export default CircleLoaderLabeled;