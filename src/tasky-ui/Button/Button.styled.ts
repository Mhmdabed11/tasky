import { variant } from 'styled-system';
import styled from '@emotion/styled';
import { space, color } from 'styled-system';

export const Button = styled('button')(
    {
        border: 'none',
    },
    space,
    color,
    variant({
        variants: {
            primary: {
                color: 'white',
                bg: 'primary',
            },
            secondary: {
                color: 'black',
                bg: 'secondary',
            },
        },
    }),
);
