import styled from "@emotion/styled";
import { space, color, layout, flexbox, border } from "styled-system";

const Box = styled.div(
    {
        boxSizing: "border-box",
        minWidth: 0,
        display: "block"
    },
    space,
    color,
    layout
);
export default Box;
