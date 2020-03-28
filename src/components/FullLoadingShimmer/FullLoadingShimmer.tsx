import React from "react";
import ColumnShimmer from "./ColumnShimmer";
import { Container } from "./FullLoadingShimmer.style";

type Props = {
    hide: boolean;
    onAnimationEnd: () => void;
};

export default function FullLoadingShimmer({ hide, onAnimationEnd }: Props) {
    return (
        <Container
            mt={2}
            bg="background"
            onAnimationEnd={onAnimationEnd}
            hide={hide}
        >
            <ColumnShimmer />
            <ColumnShimmer />
            <ColumnShimmer />
        </Container>
    );
}
