import React, { useRef, useEffect, useState, ReactChild } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import { Box } from '../index';
import { keyframes } from '@emotion/core';

const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility:hidden;
  }

  to {
    opacity: 1;
    visibility:visible;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility:visible;
  }

  to {
    opacity: 0;
    visibility:hidden;
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
    animation: ${props => (props.show ? fadeIn : fadeOut)} 0.15s linear;
`;

const ModalContainer = styled(Box)`
    margin: 0 auto;
    margin-top: 100px;
    height: auto;
`;
const ModalBody = styled(Box)``;
const ModalHeader = styled(Box)``;
const ModalFooter = styled(Box)``;

interface ModalProps {
    children: ReactChild;
    visible: boolean;
    title: string;
    okText?: string;
    cancelText?: string;
}

export default function Modal({
    children,
    visible,
    title = 'Modal title',
    okText = 'Save',
    cancelText = 'Cancel',
}: ModalProps) {
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
            <ModalBackdrop show={visible} onAnimationEnd={onAnimationEnd} role="dialog">
                <ModalContainer bg="columnBackground" maxWidth="400px" width="100%">
                    <ModalHeader borderBottom="1px solid" color="text" p={3}>
                        <Box display="flex" justifyContent="space-between">
                            <Box>{title}</Box>
                            <Box>X</Box>
                        </Box>
                    </ModalHeader>
                    <ModalBody p={3} borderBottom="1px solid" color="text">
                        {children}
                    </ModalBody>
                    <ModalFooter>
                        <Box display="flex" justifyContent="flex-end" p={3}>
                            <Box mr={2}>{cancelText}</Box>
                            <Box>{okText}</Box>
                        </Box>
                    </ModalFooter>
                </ModalContainer>
            </ModalBackdrop>
        ) : null,
        el.current,
    );
}
