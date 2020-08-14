import React from 'react';
import { Typography } from '@material-ui/core';

export default function NotFound(props) {
    const { setInitialLoading } = props;

    React.useEffect(() => {
        setTimeout(() => setInitialLoading(false), 1000);
    });

    return (
        <div style={{marginTop: 20}}>
            <Typography variant='h3' align='center'>
                <a 
                    href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404'
                    target='__blank'
                    rel='noopener noreferrer'
                    style={{color: '#3b7fff', fontWeight: '500'}}
                >
                    Error 404
                </a>
            </Typography>
            <Typography variant='h5' style={{color: 'grey', marginTop: 20}} align='center'>
                The requested resource was not found on this server
            </Typography>
        </div>
    )
};