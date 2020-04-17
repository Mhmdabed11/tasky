import { variant } from 'styled-system';
import styled from '@emotion/styled';
import { space, color, border } from 'styled-system';

export const Button = styled('button')(
    {
        cursor: 'pointer',
    },
    space,
    color,
    border,
    variant({
        variants: {
            primary: {
                color: 'buttonTextColor',
                bg: 'buttonBackgroundColor',
            },
            secondary: {
                color: 'buttonTextColor',
                bg: 'secondary',
            },
        },
    }),
);
