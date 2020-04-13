import { Theme } from './../../theme';
import styled from '@emotion/styled';
import { Box } from '../../tasky-ui';

type Props = {
    theme: Theme;
};

export const AddNewCard = styled(Box)`
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }: Props) => theme.colors.rowBackground};
    }
`;
