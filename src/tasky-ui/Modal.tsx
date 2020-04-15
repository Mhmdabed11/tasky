import React, { useRef, useEffect, ReactNode, ReactNodeArray, ReactChildren, ReactChild } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import { Box } from './index';
const ModalBackdrop = styled(Box)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Modal({ children }: { children: ReactChild }) {
    const el = useRef(document.createElement('div'));

    useEffect(() => {
        const modalRoot = document.getElementById('modal');
        const currentEl = el.current;
        modalRoot.appendChild(currentEl);
        return () => modalRoot.removeChild(currentEl);
    }, []);

    return createPortal(
        <ModalBackdrop>
            <Box bg="tomato" p={3}>
                {children}
            </Box>
        </ModalBackdrop>,
        el.current,
    );
}
