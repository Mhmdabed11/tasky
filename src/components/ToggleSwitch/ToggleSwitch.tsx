import React from "react";
import { Container, Slider, SliderInput } from "./ToggleSwitch.style";

type Props = {
    checked: boolean;
    toggle: Function;
};

export default function ToggleSwitch({ checked, toggle }: Props) {
    return (
        <Container>
            <SliderInput
                type="checkbox"
                checked={checked}
                onChange={e => toggle(e)}
            />
            <Slider />
        </Container>
    );
}
