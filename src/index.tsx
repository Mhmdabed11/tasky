import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "emotion-theming";
import { Global } from "@emotion/core";
import css from "@styled-system/css";
import baseTheme from "./theme";
import merge from "lodash.merge";
import get from "lodash.get";

const modes: Array<string> = ["light", "dark"];

const getTheme = (mode: string) =>
    merge({}, baseTheme, {
        colors: get(baseTheme.colors.modes, mode, baseTheme.colors)
    });

const Tasky = () => {
    const [mode, setMode] = useState(modes[0]);
    const theme = getTheme(mode);

    // toggle Theme
    const toggleTheme = React.useCallback(() => {
        if (mode === modes[0]) {
            setMode(modes[1]);
        } else setMode(modes[0]);
    }, [mode]);

    return (
        <ThemeProvider theme={theme}>
            <Global
                styles={css({
                    body: {
                        margin: 0,
                        bg: "background",
                        fontFamily: "sans-serif"
                    }
                })}
            />
            <App toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
};

ReactDOM.render(<Tasky />, document.getElementById("tasky"));
