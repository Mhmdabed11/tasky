import React, { ReactChildren, ReactNode } from 'react';
import { Button as Btn } from './Button.styled';

type ButtonProps = {
    children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
    return <Btn p={2}>{children}</Btn>;
}
