import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Box } from '../../tasky-ui';

export default function TaskShimmer() {
    return (
        <Box display="flex">
            <Box mr={2}>
                <Skeleton circle={true} height={40} width={40} />
            </Box>
            <Box flex={1}>
                <Skeleton />
                <Skeleton count={2} />
            </Box>
        </Box>
    );
}
