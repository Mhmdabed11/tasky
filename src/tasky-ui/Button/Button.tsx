import React, { ReactChildren, ReactNode } from 'react';
import { Button as Btn } from './Button.styled';

type ButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    mr?: number;
};

export default function Button({ children, variant = 'primary', mr = 0 }: ButtonProps) {
    return (
        <Btn variant={variant} p={2} border="none" borderRadius={4} mr={mr}>
            {children}
        </Btn>
    );
}
