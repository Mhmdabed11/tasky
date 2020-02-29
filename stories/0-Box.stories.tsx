import React from "react";
import { action } from "@storybook/addon-actions";
import { Box } from "../src/tasky-ui";
import { withKnobs, text, number } from "@storybook/addon-knobs";

export default {
    component: Box,
    title: "Box",
    decorators: [withKnobs]
};

export const Text = () => (
    <Box
        border={text("Border", "solid")}
        borderColor="rgba(0,0,0,0.2)"
        p={number("Padding", 3)}
        onClick={action("clicked")}
        bg={text("Background Color", "#f9f9f9")}
        color={text("Text Color", "black")}
        borderWidth={number("Border Width", 1)}
    >
        {text("Label", "This is a box with text")}
    </Box>
);

Text.story = {
    name: "with-text"
};
