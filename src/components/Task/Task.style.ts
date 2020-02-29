import styled from "@emotion/styled";
import { Box } from "../../tasky-ui";

export const TaskIcon = styled.img`
    height: 40px;
    width: 40px;
    flex-basis: 40px;
    max-width: 40px;
    min-width: 40px;
    border-radius: 50%;
`;

export const Container = styled(Box)`
    transform: ${props =>
        props.rotate === "true"
            ? `${props.dndTransform} rotate(4deg) !important`
            : ""};
`;
