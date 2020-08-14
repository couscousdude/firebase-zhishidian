import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Card, Typography} from '@material-ui/core';

export default function PlaceHolderPost(props) {
    return(
        <Card variant='outlined' style={{padding: 24}}>
            <div>
                <Typography variant='h5'>
                    <Skeleton variant='text' />
                </Typography>
                <Typography variant='caption'>
                    <Skeleton variant='text' style={{marginBottom: 10}} />
                </Typography>
                <Skeleton variant='rect' height={300} />
            </div>
        </Card>
    )
}