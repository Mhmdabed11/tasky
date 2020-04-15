import React, { useRef, useEffect, useState, ReactChild } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { Box } from './index';

const fadeIn = keyframes`
  from 0% to {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from 0% to {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

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
    opacity: 0;
    animation: ${props => (props.show ? fadeIn : fadeOut)} 0.5s ease forwards;
`;

const ModalBody = styled(Box)``;

interface ModalProps {
    children: ReactChild;
    visible: boolean;
}

export default function Modal({ children, visible }: ModalProps) {
    const [shouldRender, setShouldRender] = useState<boolean>(false);

    useEffect(() => {
        if (visible) setShouldRender(true);
    }, [visible]);

    const onAnimationEnd = () => {
        if (!visible) setShouldRender(false);
    };

    const el = useRef(document.createElement('div'));

    useEffect(() => {
        const modalRoot = document.getElementById('modal');
        const currentEl = el.current;
        modalRoot.appendChild(currentEl);
        return () => modalRoot.removeChild(currentEl);
    }, []);

    return createPortal(
        shouldRender ? (
            <ModalBackdrop show={visible} onAnimationEnd={onAnimationEnd}>
                <ModalBody bg="tomato" p={3}>
                    {children}
                </ModalBody>
            </ModalBackdrop>
        ) : null,
        el.current,
    );
}
