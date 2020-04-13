import React, { useRef, useEffect, ReactNode } from 'react';

export default function Modal(): ReactNode {
    const modalRoot = document.getElementById('modal-root');
    const el = useRef(document.createElement('div'));

    useEffect(() => {
        const currentEl = el.current;
        modalRoot.appendChild(currentEl);
        return () => modalRoot.removeChild(currentEl);
    }, [modalRoot]);

    return <div></div>;
}
