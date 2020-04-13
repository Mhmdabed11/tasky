import styled from '@emotion/styled';
import { Box } from '../../tasky-ui';
import { keyframes } from '@emotion/core';

const fadeOut = keyframes`
  from 0% to {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled(Box)`
    position: absolute;
    top: 44px;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    animation: ${props => props.hide && fadeOut} 1s ease;
    overflow: hidden;
`;
