import React from 'react';
import { Box } from '../../tasky-ui';
import Skeleton from 'react-loading-skeleton';
import TaskShimmer from './TaskShimmer';

function Column() {
    return (
        <Box
            bg="columnBackground"
            width={250}
            py={2}
            mx={1}
            display="inline-block"
            style={{
                verticalAlign: 'top',
            }}
        >
            <Box px={2} py={1} color="text" fontSize={1} fontWeight={5}>
                <Skeleton />
            </Box>
            <Box minHeight={50} p={2}>
                <TaskShimmer />
            </Box>
        </Box>
    );
}

export default React.memo(Column);
